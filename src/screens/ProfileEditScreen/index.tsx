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
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Text, View } from '../../components/Themed';
import { Background, ProfilePicture } from "../../components";
import profiles from "../../data/profiles";
import { useSelector } from "react-redux";

import * as ImagePicker from "expo-image-picker";
import { Octicons, Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import { updateUser } from "../../graphql/mutations";
import { useAppDispatch } from "../../store";
import { profileSlice } from "../../store/profileSlice";

export default function ProfileScreen() {
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();
  const [focused, setFocused] = React.useState(false);
  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);

  const currentUser = useSelector((state: any) => state.profile.currentUser);

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

  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const updateUserToDB = async (update: any) => {
    await API.graphql(graphqlOperation(updateUser, { input: update }))
    console.log("User Updated: ", update);
  }

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }))
      const update = {
        id: user.attributes.sub,
        name: name,     
      }
      await updateUserToDB(update);
      dispatch(
        profileSlice.actions.userProfile({
          id: userData.data.getUser.id,
          name: name,
          username: userData.data.getUser.userName,
          profilePhoto: userData.data.getUser.profilePhoto,
          biography: userData.data.getUser.biography,
          color: userData.data.getUser.color,
          isCurrentUser: true,
        })
      );
      console.log("update user", update);
      navigation.goBack();
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
        <Background color={currentUser.color}/>
        <View style={styles.tagContainer}>
          <View style={styles.tagLeft}>
            <View>
              <ProfilePicture
                borderWidth={0.2}
                borderRadius={100}
                borderColor="grey"
                size={120}
                image={currentUser.profilePhoto}
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
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.images}>
          <FlatList
            contentContainerStyle={{ gap: 10 }}
            data={images}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View key={item.id} style={{ margin: 10 }}>
                <Pressable style={{flex: 1}}>
                  <ProfilePicture
                    size={80}
                    borderRadius={20}
                    image={item.user.profilePhoto}
                  />
                  <View style={styles.deleteImage}>
                    <TouchableOpacity activeOpacity={.7}>
                      <AntDesign color="white" name="minuscircleo" size={30} />
                    </TouchableOpacity>
                  </View>
                </Pressable>
              </View>
            )}
            keyExtractor={(item) => item.user.id}
            ListFooterComponent={() => (
              <TouchableOpacity
                activeOpacity={0.8} 
              >
                <View style={styles.addImage}>
                  <AntDesign size={50} name="picture" />
                  <AntDesign
                    style={{
                      position: "absolute",
                      bottom: -15,
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
