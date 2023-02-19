import React, { useState, useRef } from "react";
import { TouchableOpacity, SafeAreaView, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { ProfilePicture } from "../../components";

import * as ImagePicker from "expo-image-picker";
import { Octicons, Feather, AntDesign } from "@expo/vector-icons";

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
            image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
          />
          <View style={styles.changeImage}>
            <TouchableOpacity onPress={pickImage}>
              <AntDesign name="pluscircleo" size={30} />
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
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.editContainer}>
          <Feather name="at-sign" color="grey" size={16} />
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
              size={20}
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
