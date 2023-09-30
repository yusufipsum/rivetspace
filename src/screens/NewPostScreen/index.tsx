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
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Marquee from "react-native-marquee";

import styles from "./styles";
import { Text, View } from "../../components/Themed";

import { ProfilePicture } from "../../components";

import { MaterialIcons } from "@expo/vector-icons";
import DeviceInfo from "react-native-device-info";
import { useSelector } from "react-redux";
import { API, graphqlOperation } from 'aws-amplify';

import * as ImagePicker from 'expo-image-picker';
import { GifSearch } from 'react-native-gif-search';

import { createPost } from "../../graphql/mutations";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const tenor = "AIzaSyD0Ieyxlk_T9AzFal26xePEmehNTh1hn7Q";
const giphy = "https://api.giphy.com/v1/gifs/search?api_key=z5mzhc6AfhlI5G2C8VvisYt2f3quV6bE&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

export default function NewPostScreen() {
  const [imagif, setImagif] = useState('');
  const [isPick, setIsPick] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagif(result.assets[0].uri);
    }
  };

  const createPool = async () => {
   
  };

  const pickGIF = () => {
    setImagif('');
    setIsPick(true);
  };

  const pickMood = async () => {
   
  };

  const pickGame = async () => {
   
  };

  const ICONS = [
    {
      id: "1",
      name: "photo",
      onPress: pickImage,
      text: "Galeri",
    },
    {
      id: "2",
      name: "poll",
      onPress: createPool,
      text: "Anket",
    },
    {
      id: "3",
      name: "gif",
      onPress: pickGIF,
      text: "GIF",
    },
    {
      id: "4",
      name: "sentiment-satisfied-alt",
      onPress: pickMood,
      text: "Hisler",
    },
    {
      id: "5",
      name: "sports-esports",
      onPress: pickGame,
      text: "Meydan Oku",
    },
  ];

  const navigation = useNavigation();
  const [focused, setFocused] = React.useState(false);
  const [post, setPost] = useState("");

  const currentUser = useSelector((state: any) => state.profile.currentUser);
  
  const onPostShare = async () => {
    try {
      if(post != "" ){
        const newPost = {
          content: post,
          image: imagif,
          userID: currentUser.sub,
        }
        await API.graphql(graphqlOperation(createPost, {input: newPost}));
        Alert.alert("Paylaşıldı", `${post}`);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(`${post}`);
    navigation.goBack();
  };

  const onPostCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "space-between" }}>
        <View style={styles.newPostContainer}>
          <ProfilePicture
            borderWidth={0.2}
            borderRadius={100}
            borderColor="grey"
            size={35}
            image={currentUser.profilePhoto}
          />
          <View style={styles.inputContainer}>
            <TextInput
              autoFocus={true}
              multiline={true}
              value={post}
              onChangeText={(value) => setPost(value)}
              numberOfLines={2}
              maxLength={300}
              style={styles.textInput}
              placeholder={"Aklından neler geçiyor?"}
            />
            {isPick ? 
            <View style={{height: "90%", width: "100%"}}>
             <GifSearch
              tenorApiKey={tenor}
              giphyApiKey={giphy}  
              gifsToLoad={10}
              maxGifsToLoad={24}
              style={styles.gifSearch}
              textInputStyle={{color: 'white'}}
              gifListStyle={{height:320}}
              gifStyle={{height:160}}
              loadingSpinnerColor={'white'}
              placeholderTextColor={'grey'}
              placeholderText={'Gif Ara'}
              horizontal={false}
              showScrollBar={false} 
              numColumns={2} 
              noGifsFoundText={"No Gifs found :("}
              noGifsFoundTextStyle={{fontWeight: 'bold'}}
              onGifSelected={(gif_url)=>{setImagif(gif_url), setIsPick(true)}}
              />
              <TouchableOpacity activeOpacity={1} style={styles.closeGif} hitSlop={{top: 15, bottom: 15, right: 15, left: 10}} onPress={() => setIsPick(false)}>
                <Text style={{color: "white"}}>X</Text>
              </TouchableOpacity>
            </View> : null}
            {imagif && <Image source={{ uri: imagif }} style={{ width: "100%", height: 220, marginVertical: 5, borderRadius: 20 }} />}
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
                    <TouchableOpacity activeOpacity={.7} onPress={item.onPress}>
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
