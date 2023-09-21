import * as React from "react";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import { PostFeed, StoryFeed, ProfileButton } from "../../components";

import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { profileSlice } from "../../store/profileSlice";
import { UserType } from "../../types";

import { getUser, listUsers } from '../../graphql/queries';
import DeviceInfo from "react-native-device-info";
import { createUser, updateUser } from "../../graphql/mutations";
import { startScanning } from "../../store/bleSlice";

import { getProfiles } from "../../store/profileSlice";

import RNBluetoothClassic, { BluetoothDevice } from 'react-native-bluetooth-classic';

export type ProfileContainerProps = {
  user: UserType;
};

export default function HomeScreen({ user }: ProfileContainerProps) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Profile");
  };
  
  const dispatch = useAppDispatch();
  const discoveredDevices = useAppSelector(state => state.ble.allDevices);
  const macAddress = useAppSelector((state: any) => state.device.macAddress);

  const [customUUID, setCustomUUID] = useState("");

  //BLUETOOTH CLASSIC
  let scanInterval;

  const startDiscovery = async () => {
    try {
      const unpaired = await RNBluetoothClassic.startDiscovery();
      const allMACs: Record<string, { mac: string }>[] = [];
      unpaired.forEach(item => {
        const mac = {
            mac: item["_nativeDevice"]["name"],
          };
          allMACs.push(mac);
      });
      console.log("unpaired: ", allMACs);
      dispatch(
        profileSlice.actions.setMACs(allMACs)
      );
      // const discoveredMACs: Record<string, { mac: string}>[] = [];
      // discoveredDevices.forEach(item => {
      //   const mac = {
      //     mac: item.name
      //   };
      //   discoveredMACs.push(mac);
      // })
      // console.log(discoveredMACs);
    } catch (err) {
      console.log("ulanhataamk: ", err);
    } finally {
      await RNBluetoothClassic.cancelDiscovery();
    }
  }

  function startScanInterval(){
    scanInterval = setInterval(() =>{
      startDiscovery();
    }, 15000)
  }
 
  useEffect(() => {
    startDiscovery();
    //startScanInterval();
    console.log("discaaa: ", discoveredDevices);
    //dispatch(startScanning());
    //dispatch(stopScanning());
  },[]);

  const saveUserToDB = async (user: any) => {
    await API.graphql(graphqlOperation(createUser, { input: user}));
    console.log("User Created: ", user);
    const userInfo = await Auth.currentUserInfo();
    const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
    dispatch(
      profileSlice.actions.userProfile({
        id: userData.data.getUser.id,
        name: userData.data.getUser.name,
        username: userData.data.getUser.userName,
        profilePhoto: userData.data.getUser.profilePhoto,
        biography: userData.data.getUser.biography,
        color: userData.data.getUser.color,
        isCurrentUser: true,
      })
    );
  }
  
  const updateUserToDB = async (updateUserUUID: any) => {
    await API.graphql(graphqlOperation(updateUser, { input: updateUserUUID }))
    console.log("User Updated: ", updateUserUUID);
  }

  const getRandomPhoto = () => {
    return 'https://cdn-icons-png.flaticon.com/512/666/666201.png'
  }

  const getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 16);
      color += randomDigit.toString(16);
    }
    return color;
  };

  useEffect(() => {
    const userUpdate = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      if(customUUID !== "" && customUUID !== macAddress.uuid){
        console.log("USER IN ", userData.data.getUser)
        const updateUserUUID = {
          id: userInfo.attributes.sub,
          uuid: macAddress.uuid,        
        }
        await updateUserToDB(updateUserUUID);
        console.log("update user", updateUserUUID);
      }
    }
    userUpdate();
  }, [customUUID]);

  useEffect(() => {
    const user = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      console.log("CUSTOM UUID::::: ", customUUID)
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      console.log("YETERULAAAN::: ", userData)
      if (userInfo) {
        if(!userData.data.getUser && macAddress.uuid != ""){
          try {
            const user = {
              id: userInfo.attributes.sub,
              userName: userInfo.username,
              name: userInfo.attributes.name,
              email: userInfo.attributes.email,
              biography: "Merhaba, ben de RivetSpace kullanıyorum!",
              uuid: macAddress.uuid,
              profilePhoto: getRandomPhoto(),
              color: getRandomColor(),
            }
            await saveUserToDB(user);
          } catch (error) {
            console.log("Hata", error)
          }
        } else {
          setCustomUUID(userData.data.getUser.uuid);
        }
        dispatch(
          profileSlice.actions.userProfile({
            id: userData.data.getUser.id,
            name: userData.data.getUser.name,
            username: userData.data.getUser.userName,
            profilePhoto: userData.data.getUser.profilePhoto,
            biography: userData.data.getUser.biography,
            color: userData.data.getUser.color,
            isCurrentUser: true,
          })
        );
      }
    }

    const fetchProfiles = async () => {
      try {
        const profilesData = await API.graphql(graphqlOperation(listUsers));
        const allProfiles: {id: string, user: string}[] = [];
        profilesData.data.listUsers.items.forEach(item => {
          const user = {
            id: item.uuid,
            user: item
          };
          allProfiles.push(user);
        });
        const profiles = allProfiles.filter(item => item.id !== macAddress.uuid);
        dispatch(profileSlice.actions.setProfiles(profiles));
      } catch (error) {
        console.log("fetchProfiels::: ", error);
      }
    }

    function startUpdateProfiles(){
      scanInterval = setInterval(() =>{
        fetchProfiles();
      }, 120000)
    }
    
    user();
    fetchProfiles();
    // startUpdateProfiles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Logo size={38} />
        </View>
        <View>
          <Text style={styles.title}>rivetspace</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onPress}
        >
          <ProfileButton />
        </TouchableOpacity>
      </View>
      {/* <FlatList
        contentContainerStyle={{}}
        style={{width: "100%"}}
        data={discoveredDevices}
        renderItem={({ item }) => {
          return (
            <Text>{item.id} {item.name}</Text>
          )
        }}
      /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <StoryFeed />}
        ListFooterComponent={() => <PostFeed />}
      />
    </SafeAreaView>
  );
}
