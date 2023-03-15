import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import Lightbox from "react-native-lightbox-v2";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { Background, Images, ProfilePicture } from "../../components";

import { Ionicons, Feather, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Auth, Hub } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../../store/profileSlice";
import profiles from "../../data/profiles";

export default function ProfileScreen() {
  const width = Dimensions.get("window").width;

  const [images, setImages] = useState(profiles.slice(0, 5));

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
    userInfo();
  }, []);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

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
          <Background color="#E2C9FF" />
          <View style={styles.tag}>
            <View style={styles.tagTop}>
              <ProfilePicture
                borderWidth={0.2}
                borderRadius={100}
                borderColor="grey"
                size={120}
                alignSelf={"center"}
                image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
              />
              <View style={styles.tagRight}>
                <View>
                  <Text style={styles.nameText}>{name}</Text>
                  <Text style={styles.buttonText}>@{username}</Text>
                </View>
                <View style={styles.social}>
                  <FontAwesome5 name={"instagram"} size={18} />
                  <Text>yusufipsum</Text>
                </View>
                <View style={styles.social}>
                  <FontAwesome5 name={"spotify"} size={18} />
                  <Text>raksıtaryusuf</Text>
                </View>
                {/* <View style={styles.social}>
                  <FontAwesome5 name={"tiktok"} size={18} />
                  <Text>yusufipsum</Text>
                </View> */}
              </View>
            </View>
            <Text style={styles.textInput}>
              Burası benim biyografim. Lorem ipsum dolor sit amet - IAU
              baksanalalalal lasllaslslaldklfalkfjklkkkksk
            </Text>
          </View>
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
          {isUser ? (
            <TouchableOpacity style={styles.button} onPress={onPostShare}>
              <Text style={styles.shareButtonText}>Profili Düzenle</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Carousel
          width={width}
          height={width * 0.8}
          mode="parallax"
          pagingEnabled={true}
          autoPlay={false}
          data={images}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <Lightbox
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              resizeMode="contain"
              underlayColor="white"
            >
              <Images
                width={width}
                height={300}
                borderRadius={20}
                image={item.user.image}
              />
            </Lightbox>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
