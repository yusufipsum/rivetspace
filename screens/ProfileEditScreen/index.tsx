import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { ProfilePicture } from "../../components";

import * as ImagePicker from "expo-image-picker";
import { Ionicons, Octicons, Feather, AntDesign } from "@expo/vector-icons";

export default function ProfileScreen() {
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

  const name = useRef(null);
  const username = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profili düzenle</Text>
      </View>
      <View style={styles.newPostContainer}>
        <View
          style={styles.editContainer}
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <ProfilePicture
            size={170}
            image={
              "https://instagram.fada1-14.fna.fbcdn.net/v/t51.2885-19/302715394_590710095862488_8705732755495836892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-14.fna.fbcdn.net&_nc_cat=100&_nc_ohc=j2fW7PUZHzwAX_cBg7H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDGDPnaIkYNew1IXIf74t-ZltQxOB36Uq4TZT9XRo_Vyw&oe=636E8ADC&_nc_sid=1527a3"
            }
          />
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              position: "absolute",
              right: 15,
              bottom: 10,
            }}
          >
            <TouchableOpacity onPress={pickImage}>
              <AntDesign name="pluscircleo" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.editContainer}>
          <TextInput style={styles.nameText} ref={name} placeholder={"Adı"}>
            Yusuf
          </TextInput>
          <TouchableOpacity>
            <Octicons
              name="pencil"
              style={{ paddingLeft: 7 }}
              onPress={() => name.current.focus()}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.editContainer}>
          <Feather name="at-sign" color="grey" />
          <TextInput
            style={styles.buttonText}
            ref={username}
            placeholder={"Kullanıcı adı"}
          >
            yusufipsum
          </TextInput>
          <TouchableOpacity>
            <Octicons
              name="pencil"
              style={{ paddingLeft: 7 }}
              onPress={() => username.current.focus()}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          autoFocus={true}
          multiline={true}
          value={post}
          onChangeText={(value) => setPost(value)}
          numberOfLines={3}
          maxLength={300}
          maxHeight={100}
          style={styles.textInput}
          placeholder={"Biyografine bir şeyler yaz"}
        />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPostCancel}>
            <Text style={styles.vazgecButtonText}>Vazgeç</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPostShare}>
            <Text style={styles.onaylaButtonText}>Onayla</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
