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
import { createUser, deleteUser, updateUser } from "../../graphql/mutations";
import DeviceInfo from "react-native-device-info";
import { getUser, listUsers } from '../../graphql/queries';
import { useAppDispatch } from "../../store";
import { deviceSlice } from "../../store/deviceSlice";
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import { profileSlice } from "../../store/profileSlice";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const Sign = () => {
    navigation.navigate("SignIn");
    setError(false);
  };

  const Confirm = () => {
    navigation.navigate("ConfirmSignIn");
    setError(false);
  };

  const Forgot = () => {
    navigation.navigate("ForgotPassword");
    setError(false);
  };

  let scanInterval;

  const getMac = async () => {
    DeviceInfo.getMacAddress()
    .then(uuid => {
        console.log("UUID Address: ", uuid)
        dispatch(
          deviceSlice.actions.setMACAddress({uuid})
        );
        RNBluetoothClassic.setBluetoothAdapterName(uuid);
        const fetchProfiles = async () => {
          try {
            const profilesData = await API.graphql(graphqlOperation(listUsers));
            const allProfiles: {id: string, user: string}[] = [];
            profilesData.data.listUsers.items.forEach(item => {
              const user = {
                id: item.uuid,
                user: item
              };
              allProfiles.push(user);
            });
            const profiles = allProfiles.filter(item => item.id !== uuid);
    
            function filter(allProfiles: any) {
              const profiles = new Set();
          
              return allProfiles.filter((item: any) => {
                if (profiles.has(item.id)) {
                  return false; // Aynı objeyi daha önce ekledik, bu objeyi filtrele
                }
                profiles.add(item.id);
                return true; // Objeyi benzersiz olarak kabul et ve yeni dizide sakla
              });
            }
            const users = filter(profiles);  
            dispatch(profileSlice.actions.setProfiles(users));
          } catch (er){
            console.log(er);
          }
        }
      //  function startUpdateProfiles(){
      //   scanInterval = setInterval(() =>{
      //     fetchProfiles();
      //   }, 120000)
      // }
      fetchProfiles();
      // startUpdateProfiles();
    })
    .catch(error => console.log("error", error))
  }

  useEffect(() => {
    getMac();
  },[]);

  const handleSubmit = async function name(event: any) {
    try {
      event.preventDefault();
      //await Auth.currentAuthenticatedUser({bypassCache: true});
      await Auth.signIn(username, password);
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
                <Text
                  style={{
                    color: "grey",
                    width: '100%',
                    position: "absolute",
                    right: 0,
                    textAlign: "right",
                    height: 20,
                  }}
                  onPress={Forgot}
                >
                Şifremi Unuttum
                </Text>
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
