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
import Carousel from "react-native-reanimated-carousel";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { Background, ProfilePicture } from "../../components";
import profiles from "../../data/profiles";

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

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );

  const [images, setImages] = useState(profiles.slice(0, 5));
  console.log(images);

  const delImage = () => {
    const index = images.indexOf(imgIndex - 1);
    images.splice(index, 1);
    setImages(images);
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const response = await Auth.updateUserAttributes(user, {
        name: name,
      });
      console.log("update user", user);
      console.log("update user", response);
    } catch (error) {
      console.log("update curr user:", error);
    }
  };

  const array = [
    {
      key: "1",
      title: "example title 1",
      subtitle: "example subtitle 1",
    },
    {
      key: "2",
      title: "example title 2",
      subtitle: "example subtitle 2",
    },
    {
      key: "3",
      title: "example title 3",
      subtitle: "example subtitle 3",
    },
  ];

  const list1 = () => {
    return profiles.slice(0, 3).map((item) => {
      return (
        <View key={item.id} style={{ margin: 10 }}>
          <ProfilePicture
            size={100}
            borderRadius={20}
            image={item.user.image}
          />
          <View style={styles.deleteImage}>
            <TouchableOpacity>
              <AntDesign color="white" name="minuscircleo" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  const list2 = () => {
    return profiles.slice(3, 5).map((item) => {
      return (
        <View key={item.id} style={{ margin: 10 }}>
          <ProfilePicture
            size={100}
            borderRadius={20}
            image={item.user.image}
          />
          <View style={styles.deleteImage}>
            <TouchableOpacity>
              <AntDesign color="white" name="minuscircleo" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  return (
    //<DismissKeyboard>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profili Düzenle</Text>
      </View>
      <View style={styles.newPostContainer}>
        <Background color="#E2C9FF" />
        <View style={styles.tag}>
          <View style={styles.tagTop}>
            <View>
              <ProfilePicture
                borderWidth={0.2}
                borderRadius={100}
                borderColor="grey"
                size={120}
                image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
              />
              <View style={styles.changeImage}>
                <TouchableOpacity onPress={pickImage}>
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
                  <TouchableOpacity>
                    <Octicons
                      name="pencil"
                      style={{ paddingLeft: 7 }}
                      onPress={() => nameRef.current.focus()}
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
                  <TouchableOpacity>
                    <Octicons
                      name="pencil"
                      style={{ paddingLeft: 7 }}
                      onPress={() => usernameRef.current.focus()}
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
                <Text>raksıtaryusuf</Text>
              </View>
              {/* <View style={styles.social}>
                  <FontAwesome5 name={"tiktok"} size={18} />
                  <Text>yusufipsum</Text>
                </View> */}
            </View>
          </View>
          <TextInput
            autoFocus={false}
            multiline={false}
            value={post}
            onChangeText={(value) => setPost(value)}
            numberOfLines={3}
            maxLength={300}
            maxHeight={100}
            style={styles.textInput}
            placeholder={"Biyografine bir şeyler yaz"}
          />
        </View>
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
      <View style={styles.footerContainer}>
        <View style={styles.images}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            {list1()}
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View style={{ flexDirection: "row" }}>{list2()}</View>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.addImage}>
                <AntDesign size={50} name="plus" />
              </View>
            </TouchableOpacity>
          </View>
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
    //</DismissKeyboard>
  );
}
