import React, { useState, useRef, useEffect } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { Background, ProfilePicture } from "../../components";
import profiles from "../../data/profiles";
import { useSelector } from "react-redux";

import * as ImagePicker from "expo-image-picker";
import { Octicons, Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Auth } from "aws-amplify";

export default function ProfileScreen() {
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();
  const [focused, setFocused] = React.useState(false);
  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);

  const CheckImage = () => {
    return (
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
    );
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let media = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(media);

    if (!media.cancelled) {
      setImage(media.uri);
      console.log(media.uri);
    }
  };

  const onPostShare = () => {
    console.warn(`${post}`);
    navigation.goBack();
    Alert.alert("Düzenlendi");
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const [imgIndex, setImageIndex] = useState(Number);

  const images = useSelector((state: any) => state.profile.user.photos);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const response = await Auth.updateUserAttributes(user, {
        name: name,
      });
      console.log("update user", response);
    } catch (error) {
      console.log("update curr user:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profili Düzenle</Text>
      </View>
      <View style={styles.mainContainer}>
        <Background color="#def2fa" />
        <View style={styles.tagContainer}>
          <View style={styles.tagLeft}>
            <View>
              <ProfilePicture
                borderWidth={0.2}
                borderRadius={100}
                borderColor="grey"
                size={120}
                image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
              />
              <View style={styles.changeImage}>
                <TouchableOpacity
                  hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                  activeOpacity={0.4}
                  onPress={pickImage}
                >
                  <AntDesign name="pluscircleo" size={30} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.tagRight}>
              <View style={styles.editableName}>
                <View style={styles.editContainer}>
                  <TextInput
                    style={styles.nameText}
                    ref={nameRef}
                    onChangeText={setName}
                    placeholder={"Adı"}
                  ></TextInput>
                  <TouchableOpacity
                    hitSlop={{ top: 15, bottom: 15, right: 15 }}
                    activeOpacity={0.6}
                    onPress={() => nameRef.current.focus()}
                  >
                    <Octicons
                      name="pencil"
                      style={{ paddingLeft: 7 }}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.editContainer}>
                  <Feather name="at-sign" color="grey" size={16} />
                  <TextInput
                    style={styles.buttonText}
                    ref={usernameRef}
                    value={username}
                    onChangeText={(username) =>
                      setUsername(
                        username.replace(/\s+/g, "").trim().toLowerCase()
                      )
                    }
                    placeholder={"Kullanıcı adı"}
                  ></TextInput>
                  <TouchableOpacity
                    hitSlop={{ top: 15, bottom: 15, right: 15 }}
                    activeOpacity={0.6}
                    onPress={() => usernameRef.current.focus()}
                  >
                    <Octicons
                      name="pencil"
                      style={{ paddingLeft: 7 }}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.social}>
                <FontAwesome5 name={"instagram"} size={18} />
                <Text>yusufipsum</Text>
              </View>
              <View style={styles.social}>
                <FontAwesome5 name={"spotify"} size={18} />
                <Text>dev_y</Text>
              </View>
              {/* <View style={styles.social}>
                  <FontAwesome5 name={"tiktok"} size={18} />
                  <Text>yusufipsum</Text>
                </View> */}
            </View>
          </View>
          <TextInput
            autoFocus={false}
            multiline={true}
            value={post}
            onChangeText={(value) => setPost(value)}
            numberOfLines={3}
            maxLength={300}
            maxHeight={100}
            style={styles.textInput}
            placeholder={"Biyografine bir şeyler yaz"}
          />
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
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.images}>
          <FlatList
            contentContainerStyle={{ gap: 15 }}
            data={images}
            numColumns={3}
            renderItem={({ item }) => (
              <View key={item.id} style={{ margin: 10 }}>
                <ProfilePicture
                  size={100}
                  borderRadius={20}
                  image={item.user.profilePhoto}
                />
                <View style={styles.deleteImage}>
                  <TouchableOpacity>
                    <AntDesign color="white" name="minuscircleo" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.user.id}
            ListFooterComponent={() => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 15,
                  zIndex: 3,
                }}
              >
                <View style={styles.addImage}>
                  <AntDesign size={50} name="picture" />
                  <AntDesign
                    style={{
                      position: "absolute",
                      right: 20,
                      bottom: 20,
                      zIndex: 1,
                      backgroundColor: "white",
                    }}
                    name="pluscircleo"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPostCancel}>
            <Text style={styles.vazgecButtonText}>Vazgeç</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.onaylaButtonText}>Onayla</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
