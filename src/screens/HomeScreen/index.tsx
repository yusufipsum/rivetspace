import * as React from "react";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import { PostFeed, StoryFeed, ProfileButton } from "../../components";

import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { startScanning, stopScanning } from "../../store/bleSlice";
import useBLE from "../../useBLE";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { profileSlice } from "../../store/profileSlice";
import { UserType } from "../../types";
import { useSelector } from "react-redux";
import { getUser } from '../../graphql/queries';
import DeviceInfo from "react-native-device-info";
import { createUser, updateUser } from "../../graphql/mutations";

export type ProfileContainerProps = {
  user: UserType;
};

export default function HomeScreen({ user }: ProfileContainerProps) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Profile");
  };

//WITH USEBLE
//   const {
//     requestPermissions,
//     scanForPeripherals,
//     allDevices,
//   } = useBLE();

// useEffect(() => {
//   const scanForDevices = async () => {
//     const isPermissionsEnabled = await requestPermissions();
//     if(isPermissionsEnabled){
//       scanForPeripherals();
//       console.log("zzz");
//     }
//   }
//   scanForDevices();
// });
  
//WITH REDUX TOOLKIT 
  const dispatch = useAppDispatch();
  const discoveredDevices = useAppSelector(state => state.ble.allDevices);

  const [MACAddress, setMACAddress] = useState("");
  const [customUUID, setCustomUUID] = useState("");

  const getMac = async () => {
    DeviceInfo.getMacAddress()
    .then(macAddress => {
         console.log("MAC Address:", macAddress)
         setMACAddress(macAddress);
     })
     .catch(error => console.log("error", error))
  }

  const saveUserToDB = async (user: any) => {
    await API.graphql(graphqlOperation(createUser, { input: user}));
    console.log("User Created: ", user);
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
    getMac();
    //dispatch(startScanning());
    //dispatch(stopScanning());
    console.log("disc: ", discoveredDevices);
  }, []);

  useEffect(() => {
    const userUpdate = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      if(customUUID !== "" && customUUID !== MACAddress){
        console.log("USER IN ", userData.data.getUser)
        const updateUserUUID = {
          id: userInfo.attributes.sub,
          uuid: MACAddress,        
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
        if(!userData.data.getUser && MACAddress != ""){
          try {
            const user = {
              id: userInfo.attributes.sub,
              userName: userInfo.username,
              name: userInfo.attributes.name,
              email: userInfo.attributes.email,
              biography: "Merhaba, ben de RivetSpace kullanıyorum!",
              uuid: MACAddress,
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
      }
    }
    user();
  }, [MACAddress]);

  useEffect(() => {
    async function userInfo() {
      const userInfo = await Auth.currentAuthenticatedUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      try {
        console.log("USER INFO: ", userData);
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
      } catch (error) {
        console.log("error curr user:", error);
      }
    }
    userInfo();
  }, [MACAddress]);

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
      <FlatList
        contentContainerStyle={{}}
        style={{width: "100%"}}
        data={discoveredDevices}
        renderItem={({ item }) => {
          return (
            <Text>{item.id} {item.name}</Text>
          )
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <StoryFeed />}
        ListFooterComponent={() => <PostFeed />}
      />
    </SafeAreaView>
  );
}
