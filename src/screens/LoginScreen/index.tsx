import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { API, Auth, graphqlOperation } from "aws-amplify";

import styles from "./styles";
import { Logo } from "../../assets/svg";
import { useEffect, useRef, useState } from "react";
import { createUser, updateUser } from "../../graphql/mutations";
import DeviceInfo from "react-native-device-info";
import { getUser } from '../../graphql/queries';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const Sign = () => {
    navigation.navigate("SignIn");
    setError(false);
  };

  const Confirm = () => {
    navigation.navigate("ConfirmSignIn");
    setError(false);
  };

  const [MACAddress, setMACAddress] = useState("");
  const [customUUID, setCustomUUID] = useState("");

  const saveUserToDB = async (user: any) => {
    await API.graphql(graphqlOperation(createUser, { input: user}));
    console.log("User Created: ", user);
  }

  const updateUserToDB = async (updateUserUUID: any) => {
    await API.graphql(graphqlOperation(updateUser, { input: updateUserUUID }))
    console.log("User Updated: ", updateUserUUID);
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

  useEffect(() => {
    const user = async () => {
      //get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (userInfo) {
        //check if user already exist in database
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        setCustomUUID(userData.data.getUser.uuid);
        console.log("aa", userData);
        if (!userData.data.getUser){
          console.log(userInfo.attributes.email)
          try {
            const user = {
              id: userInfo.attributes.sub,
              userName: userInfo.username,
              name: userInfo.attributes.name,
              email: userInfo.attributes.email,
              uuid: MACAddress,
              profilePhoto: getRandomPhoto(),
            }
            await saveUserToDB(user);
          } catch (error) {
            console.log("Hata", error)
          }
        } else {
          console.log("User already exists")
        }
      }
      //if doesn't, create the user in the database
    }
    getMac();
    user();
  }, [customUUID]);

  const handleSubmit = async function name(event: any) {
    try {
      event.preventDefault();
      await Auth.signIn(username, password);
      console.log("uuid: ", customUUID + " MACAddress: ", MACAddress);
      if(customUUID !== MACAddress){
        const userInfo = await Auth.currentAuthenticatedUser();
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        console.log("USER IN ", userData)
        const updateUserUUID = {
          id: userInfo.attributes.sub,
          uuid: MACAddress,        
        }
        await updateUserToDB(updateUserUUID);
        console.log("update user", updateUserUUID);
      }
    } catch (error) {
      console.log("error signing up:", error);
      setUsername("");
      setPassword("");
      setError(true);
    }
  };

  const inputPassword = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionCenter}>
        <View style={styles.logo}>
          <Logo size={140} />
          <Text style={styles.title}>rivetspace</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <View style={styles.input}>
              <TextInput
                value={username}
                onChangeText={(username) =>
                  setUsername(username.replace(/\s+/g, "").trim().toLowerCase())
                }
                onSubmitEditing={() => inputPassword.current.focus()}
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
                ref={inputPassword}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                fontSize={15}
                width={"100%"}
                placeholder="Şifre"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.forgotPassword}>
              {error ? (
                <View>
                  <Text
                    style={{
                      color: "red",
                      fontSize: 13,
                      position: "relative",
                      minWidth: "80%",
                      height: 20,
                    }}
                  >
                    Kullanıcı adı ya da şifre yanlış!
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
                  minWidth: "80%",
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    width: 110,
                    textAlign: "right",
                    height: 20,
                  }}
                >
                  Şifremi Unuttum
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              raised
              activeOpacity={0.8}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signContainer}>
          <View style={styles.sign}>
            <Text style={styles.text}>Hesabına giriş yapamıyor musun? </Text>
            <TouchableOpacity
              raised
              activeOpacity={0.6}
              onPress={Confirm}
              hitSlop={{ top: 25, bottom: 25, left: 40, right: 40 }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>Doğrula</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sign}>
            <Text style={styles.text}>Henüz bir hesabın yok mu? </Text>
            <TouchableOpacity
              raised
              activeOpacity={0.6}
              onPress={Sign}
              hitSlop={{ top: 25, bottom: 25, left: 40, right: 40 }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>Kaydol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}
