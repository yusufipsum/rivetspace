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
import { Background, PostFeed, ProfilePicture } from "../../components";
import profiles from "../../data/profiles";
import { useSelector } from "react-redux";

import * as ImagePicker from "expo-image-picker";
import { Octicons, Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser } from '../../graphql/queries';
import { updateUser } from "../../graphql/mutations";
import { useAppDispatch } from "../../store";
import { profileSlice } from "../../store/profileSlice";

export default function ProfileScreen() {
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();
  const [focused, setFocused] = React.useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const currentUser = useSelector((state: any) => state.profile.currentUser);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
    }
  };

  const onPostShare = () => {
    console.warn(`${biography}`);
    navigation.goBack();
    Alert.alert("Düzenlendi");
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  const nameRef = useRef(null);
  const usernameRef = useRef(null);

  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [biography, setBiography] = useState("");

  const updateUserToDB = async (update: any) => {
    await API.graphql(graphqlOperation(updateUser, { input: update }))
    const user = await Auth.currentAuthenticatedUser();
    const userData = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }))
    console.log("User Updated: ", update);
    dispatch(
      profileSlice.actions.userProfile({
        id: userData.data.getUser.id,
        name: userData.data.getUser.name,
        username: userData.data.getUser.userName,
        profilePhoto: userData.data.getUser.profilePhoto,
        biography: userData.data.getUser.biography,
        color: userData.data.getUser.color,
        isCurrentUser: true,
      })
    );
    console.log("update user", update);
    navigation.goBack();
  }

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userData = await API.graphql(graphqlOperation(getUser, { id: user.attributes.sub }))
      const check = {
        id: user.attributes.sub,
        name: name,
        userName: username,
        profilePhoto: profilePicture,
        biography: biography,
      }
      const update: Partial<typeof check> = {...check};
      try{
        if(name == "" || name.length <= 0 || name === userData.data.getUser.name){
          delete update.name;
        }
        if(username == "" || username.length <= 4 || username === userData.data.getUser.userName){
          delete update.userName;
          console.log("hayirdir", update);
        }
        if(biography == "" || biography === userData.data.getUser.biography){
          delete update.biography;
        }
        if(!profilePicture || profilePicture == "" || biography === userData.data.getUser.profilePhoto){
          delete update.profilePhoto;
        }
      } catch (e) { 
        console.log("not deleted:::: ", e);
      } finally {
        await updateUserToDB(update);
      }
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
              {profilePicture ?
              <ProfilePicture
                borderWidth={0.2}
                borderRadius={100}
                borderColor="grey"
                size={120}
                image={profilePicture}
              /> : 
              <ProfilePicture
                borderWidth={0.2}
                borderRadius={100}
                borderColor="grey"
                size={120}
                image={currentUser.profilePhoto}
              /> 
              }
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
            value={biography}
            onChangeText={(value) => setBiography(value)}
            numberOfLines={3}
            maxLength={300}
            maxHeight={100}
            style={styles.textInput}
            placeholder={"Biyografine bir şeyler yaz..."}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={onPostCancel}>
            <Text style={styles.vazgecButtonText}>Vazgeç</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={handleSubmit}>
            <Text style={styles.onaylaButtonText}>Onayla</Text>
          </TouchableOpacity>
        </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <PostFeed />}
      />
        {/* <View style={styles.images}>
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
        </View> */}
      </View>
    </SafeAreaView>
  );
}
