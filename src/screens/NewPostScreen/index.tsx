import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
  ScrollView,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles.ts";
import Colors from "../constants/Colors";
import { Text, View } from "../../components/Themed";

import { ProfilePicture } from "../../components";

import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

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

  const onPostShare = () => {
    console.log(`${post}`);
    navigation.goBack();
    Alert.alert("Paylaşıldı");
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  const DismissKeyboard = ({ children }) => (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      enabled
    >
      {children}
    </KeyboardAvoidingView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.newPostContainer}>
          <ProfilePicture
            size={35}
            image={
              "https://instagram.fist13-1.fna.fbcdn.net/v/t51.2885-19/317881261_514954124010496_344328476115875096_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SFswZBGNhzAAX8bc908&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDT_IiZLLSqKq_gDlbhsen9BBlAFchs3lRdWRrtJJDxpg&oe=639A14AF&_nc_sid=1527a3"
            }
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
        <DismissKeyboard>
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
        </DismissKeyboard>
      </View>
    </SafeAreaView>
  );
}
