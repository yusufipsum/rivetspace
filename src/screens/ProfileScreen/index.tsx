import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { ProfilePicture } from "../../components";

import { Ionicons, Feather } from "@expo/vector-icons";
import { Auth, Hub } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../../store/profileSlice";

export default function ProfileScreen() {
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();

  const isUser = useSelector((state: any) => state.profile.isUser);
  const ad = useSelector((state: any) => state.profile.name);

  console.log("AD:::", ad);

  const onPostShare = () => {
    navigation.navigate("ProfileEdit");
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Hub.listen("auth", (e) => {
      if (e.payload.event == "signIn") {
        console.log("auth event", e.payload.event);
        setCurrentUser(e.payload.data);
      } else {
        setCurrentUser(undefined);
      }
    });
  });

  async function userInfo() {
    try {
      const userInfo = await Auth.currentUserInfo();
      setName(userInfo.attributes.name);
      setUsername(userInfo.username);
      console.log("curr user response", userInfo);
    } catch (error) {
      console.log("error curr user:", error);
    }
  }
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  userInfo();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onPostCancel}>
            <Feather name="chevron-left" size={30} style={styles.goBackIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profil</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              name="md-menu-outline"
              size={30}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.newPostContainer}>
          <ProfilePicture
            size={170}
            image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
          />
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.buttonText}>@{username}</Text>
          <View style={styles.point}>
            <View style={styles.dot}></View>
            <Text style={styles.buttonText}>
              Sosyallik Puanı:{" "}
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                146
              </Text>
            </Text>
          </View>
          <Text style={styles.textInput}>
            Burası benim biyografim. Lorem ipsum dolor sit amet - IAU
            baksanalalalal lasllaslslaldklfalkfjklkkkksk
          </Text>
          {isUser ? (
            <TouchableOpacity style={styles.button} onPress={onPostShare}>
              <Text style={styles.shareButtonText}>Profili Düzenle</Text>
            </TouchableOpacity>
          ) : null}
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Carousel
          loop
          width={width}
          height={width * 0.8}
          mode="parallax"
          pagingEnabled={true}
          snapEnabled={true}
          autoPlay={false}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: "black",
                justifyContent: "center",
                alignSelf: "center",
                width: width,
              }}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 30 }}
              >
                {index}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
