import * as React from "react";
import { SafeAreaView, FlatList, TouchableOpacity, Dimensions, RefreshControl } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import { PostFeed, StoryFeed, ProfileButton } from "../../components";

import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback, useEffect, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { profileSlice } from "../../store/profileSlice";
import { UserType } from "../../types";

import { getUser, listUsers } from '../../graphql/queries';
import DeviceInfo from "react-native-device-info";
import { createUser, updateUser } from "../../graphql/mutations";
import { startScanning } from "../../store/bleSlice";
//import socket from "../../utils/socket";  

//import { getProfiles } from "../../store/profileSlice";

import RNBluetoothClassic, { BluetoothDevice } from 'react-native-bluetooth-classic';

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Profile");
  };
  
  const dispatch = useAppDispatch();
  //const discoveredDevices = useAppSelector(state => state.ble.allDevices);
  const macAddress = useAppSelector((state: any) => state.device.macAddress);
  const users = useAppSelector((state: any) => state.profile.allProfiles);
  
  const [customUUID, setCustomUUID] = useState("");

  //BLUETOOTH CLASSIC

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
      // const discoveredMACs: Record<string, { mac: string}>[] = [];
      // discoveredDevices.forEach(item => {
      //   const mac = {
      //     mac: item.name
      //   };
      //   discoveredMACs.push(mac);
      // })
      // console.log(discoveredMACs);
    
        const matches = users.filter(profile => {
          const matched = allMACs.filter(device => device.mac === profile.id);
          return matched.length > 0;
        });
  
        dispatch(profileSlice.actions.matches(matches));
    
    } catch (err) {
      console.log("ulanhataamk: ", err);
    } finally {
      await RNBluetoothClassic.cancelDiscovery();
    }
  }
  //let scanInterval;
  // function startScanInterval(){
  //   scanInterval = setInterval(() =>{
  //     startDiscovery();
  //   }, 25000)
  // }
 
  useEffect(() => {
    startDiscovery();
    //socket.emit("createRoom", macAddress.uuid);
    //startScanInterval();
    // console.log("discaaa: ", discoveredDevices);
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
          console.log("CUSTOM UUID::::: ", customUUID)
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
    user();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
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
        contentContainerStyle={{width: windowWidth, flexDirection: "column"}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={() => <StoryFeed />}
        ListFooterComponent={() => <PostFeed />}
      />
    </SafeAreaView>
  );
}
