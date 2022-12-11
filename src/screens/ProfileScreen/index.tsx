import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Colors from "../constants/Colors";

import { Text, View } from "../../components/Themed";
import { ProfilePicture } from "../../components";

import { Ionicons, Octicons, Feather } from "@expo/vector-icons";

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
            "https://instagram.fist13-1.fna.fbcdn.net/v/t51.2885-19/317881261_514954124010496_344328476115875096_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SFswZBGNhzAAX8bc908&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDT_IiZLLSqKq_gDlbhsen9BBlAFchs3lRdWRrtJJDxpg&oe=639A14AF&_nc_sid=1527a3"
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
