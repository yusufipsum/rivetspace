import * as React from "react";
import { SafeAreaView, FlatList, TouchableOpacity, Dimensions, RefreshControl, Alert, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import { PostFeed, StoryFeed, ProfileButton } from "../../components";

import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback, useEffect, useRef, useState } from "react";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { profileSlice } from "../../store/profileSlice";
import { UserType } from "../../types";

import { getUser, listUsers } from '../../graphql/queries';
import DeviceInfo from "react-native-device-info";
import { createUser, deleteUser, updateUser } from "../../graphql/mutations";
import { startScanning } from "../../store/bleSlice";
//import socket from "../../utils/socket";  

//import { getProfiles } from "../../store/profileSlice";

import RNBluetoothClassic, { BluetoothDevice } from 'react-native-bluetooth-classic';
import useBLE from "../../useBLE";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({route}) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Profile");
  };

  const dispatch = useAppDispatch();
  //const discoveredDevices = useAppSelector(state => state.ble.allDevices);
  const macAddress = useAppSelector((state: any) => state.device.macAddress);
  const users = useAppSelector((state: any) => state.profile.allProfiles);
  
  const [customUUID, setCustomUUID] = useState("");
  //const [isDiscovery, setIsDiscovery] = useState(false);
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
      console.log("err: ", err);
    } finally {
      await RNBluetoothClassic.cancelDiscovery();
    }
  }

  const showAlert = () => {
    Alert.alert(
      'Bluetooth Gerekli',
      'Uygulamayı kullanabilmek için telefonunuzun bluetooth özelliği açık olmalıdır.',
      [
        {
          text: 'Aç',
          onPress: async () => await RNBluetoothClassic.requestBluetoothEnabled(),
        },
        {
          text: 'İptal',
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  };

  const request = async () => {
    const isBluetoothEnabled = await RNBluetoothClassic.isBluetoothEnabled();
    if(isBluetoothEnabled){
      startDiscovery();
    } else {
      showAlert();
    }
  }

  let scanInterval;
  function startScanInterval(){
    scanInterval = setInterval(() =>{
      request();
    }, 25000);
  }
 
  useEffect(() => {
    //socket.emit("createRoom", macAddress.uuid);
    startScanInterval();
    // console.log("discaaa: ", discoveredDevices);
    //dispatch(startScanning());
    //dispatch(stopScanning());
  },[]);

  const saveUserToDB = async (user: any) => {
    await API.graphql(graphqlOperation(createUser, { input: user}));
    console.log("User Created: ", user);
    const userInfo = await Auth.currentUserPoolUser();
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
  
  const updateUserMAC = async (updateUserUUID: any) => {
    await API.graphql(graphqlOperation(updateUser, { input: updateUserUUID }))
    console.log("User Updated: ", updateUserUUID);
  }

  // const updateUserPushNToken = async (updateUserToken: any) => {
  //   await API.graphql(graphqlOperation(updateUser, { input: updateUserToken }))
  //   console.log("User Updated: ", updateUserToken);
  // }

  const getRandomPhoto = async () => {
    return 'https://rivetspacef36c220ed25f4408baf82c64fe9e1505225735-staging.s3.eu-west-1.amazonaws.com/public/profilePhoto.png';
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
      const userInfo = await Auth.currentUserPoolUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      let user;
      try {
        const response = await API.graphql(graphqlOperation(listUsers, { filter: { uuid: { eq: macAddress.uuid } } }));
        user = response.data.listUsers.items[0];
        console.log("responsss ", user.userName, userInfo.username);
      } catch (e) {
        console.log("NULLLL ", e)
      } finally {
        if(user !== undefined && user.userName != userInfo.username){
          let updateUserUUID;
         
          updateUserUUID = {
            id: user.id,
            uuid: "",        
          }
          await updateUserMAC(updateUserUUID);
         
          updateUserUUID = {
            id: userInfo.attributes.sub,
            uuid: macAddress.uuid,        
          }
          await updateUserMAC(updateUserUUID);
            
        } else if(customUUID != "" && customUUID != macAddress.uuid){
          const updateUserUUID = {
            id: userInfo.attributes.sub,
            uuid: macAddress.uuid,        
          }
          await updateUserMAC(updateUserUUID);
        }  
      }
      //await updateUserPushNToken(token.data);
    }
    userUpdate();
  }, [customUUID]);

  useEffect(() => {
    const user = async () => {
      const userInfo = await Auth.currentUserPoolUser();
      console.log("INFOFOFOFOF:: ", userInfo);
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      console.log("asdasd", userData);
      //let profilePhotoURL;
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
          // try {
          //   
          //   profilePhotoURL = await Storage.get(`profile${userInfo.attributes.sub}.jpeg`);
          //   profilePhotoURL = profilePhotoURL.substring(0, profilePhotoURL.indexOf('?'));
          //   console.log('Profil fotoğrafı URL:', profilePhotoURL);
          //   
          // } catch (error) {
          //   console.error('Profil fotoğrafı alınamadı.', error);
          //   profilePhotoURL = await Storage.get(`public/profilePhoto.png`);
          // }
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

  useEffect(() => {
    if (route.params?.refresh) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 100);
    }
  }, [route.params?.refresh]);

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
        ListFooterComponent={() => <PostFeed isHome={true} />}
      />
    </SafeAreaView>
  );
}
