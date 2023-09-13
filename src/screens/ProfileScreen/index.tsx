import React from "react";
import { Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import Lightbox from "react-native-lightbox-v2";

import styles from "./styles";

import { Text, View } from '../../components/Themed';
import { Background, Images, ProfilePicture } from "../../components";

import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";

import { useSelector } from "react-redux";
export default function ProfileScreen() {
  const width = Dimensions.get("window").width;

  const images = useSelector((state: any) => state.profile.user.photos);
  const randomNumber = Math.floor(Math.random() * 300) + 1;

  const navigation = useNavigation();
  const isCurrentUser = useSelector((state: any) => state.profile.isCurrentUser);
  const user = useSelector((state: any) => state.profile.user);
  const currentUser = useSelector((state: any) => state.profile.currentUser);


  console.log("currentuser ", currentUser.name , isCurrentUser);

  const onPostShare = () => {
    navigation.navigate("ProfileEdit");
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
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
      <View style={styles.mainContainer}>
        {isCurrentUser ? (
            <>
              <Background color={currentUser.color} />
              <View style={styles.tagContainer}>
                <View style={styles.tagLeft}>
                  <ProfilePicture
                    borderWidth={0.2}
                    borderRadius={100}
                    borderColor="grey"
                    size={120}
                    alignSelf={"center"}
                    image={currentUser.profilePhoto}
                  />
                  <View style={styles.tagRight}>
                    <View style={{height: 45}}>
                      <Text style={styles.nameText}>{currentUser.name}</Text>
                      <Text style={styles.buttonText}>@{currentUser.username}</Text>
                    </View>
                    <View style={styles.social}>
                      <FontAwesome5 name={"instagram"} size={18} />
                      <Text style={{width: "100%"}}>yusufipsum</Text>
                    </View>
                    <View style={styles.social}>
                      <FontAwesome5 name={"spotify"} size={18} />
                      <Text style={{width: "100%"}}>dev_y</Text>
                    </View>
                    {/* <View style={styles.social}>
                  <FontAwesome5 name={"tiktok"} size={18} />
                  <Text>yusufipsum</Text>
                </View> */}
                  </View>
                </View>
                <Text style={styles.textInput}>
                  {currentUser.bio}
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
              <TouchableOpacity style={styles.button} activeOpacity={.8} onPress={onPostShare}>
                <Text style={styles.editButtonText}>Profili Düzenle</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Background color={user.color} />
              <View style={styles.tagContainer}>
                <View style={styles.tagLeft}>
                  <ProfilePicture
                    borderWidth={0.2}
                    borderRadius={100}
                    borderColor="grey"
                    size={120}
                    alignSelf={"center"}
                    image={user.profilePhoto}
                  />
                  <View style={styles.tagRight}>
                    <View style={{height: 45}}>
                      <Text style={styles.nameText}>{user.name}</Text>
                      <Text style={styles.buttonText}>{user.username}</Text>
                    </View>
                    <View style={styles.social}>
                      <FontAwesome5 name={"instagram"} size={18} />
                      <Text style={{width: "100%"}}>{user.name}</Text>
                    </View>
                    <View style={styles.social}>
                      <FontAwesome5 name={"spotify"} size={18} />
                      <Text style={{width: "100%"}}>{user.name}</Text>
                    </View>
                    {/* <View style={styles.social}>
                  <FontAwesome5 name={"tiktok"} size={18} />
                  <Text>yusufipsum</Text>
                </View> */}
                  </View>
                </View>
                <Text style={styles.textInput}>{user.bio}</Text>
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
                    {randomNumber}
                  </Text>
                </Text>
              </View>
            </>
          )}
      <View style={styles.photos}>
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
                height={240}
                borderRadius={20}
                image={item.user.profilePhoto}
              />
            </Lightbox>
          )}
        />
      </View>
    </View>
    </SafeAreaView>
  );
}
