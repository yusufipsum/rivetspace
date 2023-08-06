import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Marquee from "react-native-marquee";

import styles from "./styles";
import { Text, View } from "../../components/Themed";

import { ProfilePicture } from "../../components";

import { MaterialIcons } from "@expo/vector-icons";
import DeviceInfo from "react-native-device-info";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function NewPostScreen() {
  const ICONS = [
    {
      id: "1",
      name: "photo",
      text: "Galeri",
    },
    {
      id: "2",
      name: "poll",
      text: "Anket",
    },
    {
      id: "3",
      name: "gif",
      text: "GIF",
    },
    {
      id: "4",
      name: "sentiment-satisfied-alt",
      text: "Hisler",
    },
    {
      id: "5",
      name: "sports-esports",
      text: "Meydan Oku",
    },
  ];

  const navigation = useNavigation();
  const [focused, setFocused] = React.useState(false);
  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [mac, setMac] = useState("");

  const onPostShare = () => {
    const getMac = async()=>{
      DeviceInfo.getUniqueId()
      .then(macAddress => {
           console.log("bbb", macAddress)
           setMac(macAddress);
       })
       .catch(error => console.log("aaa", error))
    }
    getMac();
    console.log(`${post}`);
    const a = DeviceInfo.getApplicationName();
    const b = DeviceInfo.getMacAddress();
    navigation.goBack();
    Alert.alert("Paylaşıldı", `${post} ` + a + " " + mac);
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.newPostContainer}>
          <ProfilePicture
            size={35}
            image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
          />
          <View style={styles.inputContainer}>
            <TextInput
              autoFocus={true}
              multiline={true}
              value={post}
              onChangeText={(value) => setPost(value)}
              numberOfLines={3}
              maxLength={300}
              style={styles.textInput}
              placeholder={"Aklından neler geçiyor?"}
            />
            {/*<TextInput
          value={imageUrl}
          onChangeText={(value) => setImageUrl(value)}
          placeholder={"Görsel Url'i"}
        />*/}
          </View>
        </View>
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <FlatList
                data={ICONS}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity>
                      <View style={styles.icons}>
                        <MaterialIcons
                          name={item.name}
                          size={24}
                          style={{
                            color: "black",
                          }}
                        />
                        <Text style={styles.iconText}>{item.text}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={onPostCancel}>
                <Text style={styles.buttonText}>Vazgeç</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onPostShare}>
                <Text style={styles.shareButtonText}>Paylaş</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
}
