import * as React from "react";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import { PostFeed, StoryFeed, ProfileButton } from "../../components";

import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { startScanning, stopScanning } from "../../store/bleSlice";
import useBLE from "../../useBLE";
import { Auth } from "aws-amplify";
import { profileSlice } from "../../store/profileSlice";
import { UserType } from "../../types";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    dispatch(startScanning());
    //dispatch(stopScanning());
    console.log("disc: ", discoveredDevices);
  }, []);

  useEffect(() => {
    async function userInfo() {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        dispatch(
          profileSlice.actions.userProfile({
            id: userInfo.attributes.sub,
            name: userInfo.attributes.name,
            username: userInfo.username,
            isCurrentUser: true,
          })
        );
      } catch (error) {
        console.log("error curr user:", error);
      }
    }
    userInfo();
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
