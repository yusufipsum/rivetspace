import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { API, Auth, graphqlOperation } from "aws-amplify";

import styles from "./styles";
import { Logo } from "../../assets/svg";

import { useEffect, useRef, useState } from "react";
import { createUser, updateUser } from "../../graphql/mutations";
import DeviceInfo from "react-native-device-info";
import { getUser } from "../../graphql/queries";

export default function ConfirmSignInScreen() {
  const navigation = useNavigation();

  const Sign = () => {
    navigation.goBack();
    setError(false);
  };

  const [username, setUsername] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [error, setError] = useState(false);

  const [MACAddress, setMACAddress] = useState("");
  const [customUUID, setCustomUUID] = useState("");

  const saveUserToDB = async (user: any) => {
    await API.graphql(graphqlOperation(createUser, { input: user}));
    console.log("User Created: ", user);
  }

  const getMac = async () => {
    DeviceInfo.getMacAddress()
    .then(macAddress => {
         console.log("MAC Address:", macAddress)
         setMACAddress(macAddress);
     })
     .catch(error => console.log("error", error))
  }

  const getRandomPhoto = () => {
    return 'https://cdn-icons-png.flaticon.com/512/666/666201.png'
  }

  const getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * 16);
      color += randomDigit.toString(16);
    }
    return color;
  };
  
  useEffect(() => {
    getMac();
  }, [MACAddress]);

  const handleSubmit = async function name(event: any) {
    try {
      event.preventDefault();
      const confirm = await Auth.confirmSignUp(username, authCode);
      if (confirm) {
        const userInfo = await Auth.currentUserInfo();
        console.log("bajabkabak::  ", customUUID)
        //check if user already exist in database
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        console.log("aa", userData.data.getUser);
        if(!userData.data.getUser && MACAddress != ""){
          try {
            const user = {
              id: userInfo.attributes.sub,
              userName: userInfo.username,
              name: userInfo.attributes.name,
              email: userInfo.attributes.email,
              biography: "Merhaba, ben de RivetSpace kullanıyorum!",
              uuid: MACAddress,
              profilePhoto: getRandomPhoto(),
              color: getRandomColor(),
            }
            await saveUserToDB(user);
          } catch (error) {
            console.log("Hata", error)
          }
        } else {
          setCustomUUID(userData.data.getUser.uuid);
          console.log("User already exists")
        }
      }
    } catch (error) {
      console.log("error signing up:", error);
      setAuthCode("");
      setError(true);
    }
  };

  const resendCode = async function name(event: any) {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Kod Tekrar Gönderildi!");
      setError(false);
    } catch (err) {
      console.log("error resending code: ", err);
    }
  };

  const inputAuthCode = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionCenter}>
        <Text style={styles.title}>Hesabını Doğrula</Text>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <View style={styles.input}>
              <TextInput
                value={username}
                autoFocus={true}
                onChangeText={(username) =>
                  setUsername(username.replace(/\s+/g, "").trim().toLowerCase())
                }
                onSubmitEditing={() => inputAuthCode.current.focus()}
                type="text"
                fontSize={15}
                width={"100%"}
                placeholder="Kullanıcı adı"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                ref={inputAuthCode}
                value={authCode}
                onChangeText={setAuthCode}
                keyboardType={"number-pad"}
                fontSize={15}
                width={"100%"}
                maxLength={6}
                placeholder="Doğrulama Kodu"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.resendCode}>
              {error ? (
                <View>
                  <Text
                    style={{
                      color: "red",
                      fontSize: 13,
                      position: "relative",
                    }}
                  >
                    Doğrulama Kodu Yanlış!
                  </Text>
                </View>
              ) : null}
              <TouchableOpacity
                raised
                activeOpacity={0.8}
                hitSlop={{ bottom: 25 }}
                style={{
                  position: "absolute",
                  right: 0,
                }}
                onPress={resendCode}
              >
                <Text
                  style={{
                    color: "grey",
                  }}
                >
                  Yeni Kod Gönder
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              raised
              activeOpacity={0.8}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Onayla</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signContainer}>
          <View style={styles.sign}>
            <Text style={styles.text}>Kayıt bilgilerin doğru değil mi? </Text>
            <TouchableOpacity
              raised
              activeOpacity={0.6}
              onPress={Sign}
              hitSlop={{ top: 25, bottom: 25, left: 40, right: 40 }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>Geri Dön</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}
