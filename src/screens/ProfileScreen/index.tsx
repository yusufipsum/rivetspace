import React, { useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { ProfilePicture } from "../../components";

import { Ionicons, Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const onPostShare = () => {
    navigation.navigate("ProfileEdit");
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPostCancel}>
          <Feather name="chevron-left" size={30} style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profil</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="md-menu-outline" size={30} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.newPostContainer}>
        <ProfilePicture
          size={170}
          image={
            "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/322471732_1277548349458457_1573710981679399978_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fMv8qzpJFpoAX9yB7W3&_nc_ht=scontent.fist13-1.fna&oh=00_AfCkiTxrul4qEohnGFU9u1-fjYnATgHsFHDR12U2LqnhlQ&oe=63D2FC76"
          }
        />
        <Text style={styles.nameText}>Yusuf</Text>
        <Text style={styles.buttonText}>@yusufipsum</Text>
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
        <TouchableOpacity style={styles.button} onPress={onPostShare}>
          <Text style={styles.shareButtonText}>Profili Düzenle</Text>
        </TouchableOpacity>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <View style={styles.footerContainer}>
        <Text>Will Add MyPictures Carousel</Text>
      </View>
    </SafeAreaView>
  );
}
