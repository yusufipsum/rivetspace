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

import { Ionicons, Octicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const onPostShare = () => {
    navigation.navigate("ProfileEdit");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profil</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="md-menu-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.newPostContainer}>
        <ProfilePicture
          size={170}
          image={
            "https://instagram.fada1-14.fna.fbcdn.net/v/t51.2885-19/302715394_590710095862488_8705732755495836892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-14.fna.fbcdn.net&_nc_cat=100&_nc_ohc=j2fW7PUZHzwAX_cBg7H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDGDPnaIkYNew1IXIf74t-ZltQxOB36Uq4TZT9XRo_Vyw&oe=636E8ADC&_nc_sid=1527a3"
          }
        />
        <Text style={styles.nameText}>Yusuf</Text>
        <Text style={styles.buttonText}>@yusufipsum</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 50,
              backgroundColor: "#26a9e1",
              marginRight: 5,
            }}
          ></View>
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
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </SafeAreaView>
  );
}
