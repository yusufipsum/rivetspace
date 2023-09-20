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
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Auth } from "aws-amplify";

import styles from "./styles";

import { useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibilty";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();

  const Sign = () => {
    navigation.goBack();
    setError(false);
  };

  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [code, setCode] = useState("");
  const [sendCode, setSendCode] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async function name(event: any) {
    event.preventDefault();
    if(newPassword.length < 8){
      setErrorMessage("Şifren en az 8 karakterli olmalı!");
      setError(true);
    }else{
      try {
        const data = await Auth.forgotPasswordSubmit(username, code, newPassword);
        console.log(data);
        navigation.goBack();
      } catch (error) {
        console.log("error signing up:", error);
        setCode("");
        setErrorMessage("Doğrulama Kodu Yanlış!")
        setError(true);
      }
    }
  };

    // Send confirmation code to user's email
    const forgotPassword = async function () {
        try {
          const data = await Auth.forgotPassword(username);
          console.log(data);
          setSendCode(true);
          setError(false);
        } catch(err) {
          console.log(err);
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

  const inputCode = useRef(null);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionCenter}>
        <Text style={styles.title}>Şifreni Yenile</Text>
        <View style={styles.form}>
          <View style={styles.inputs}>
                {sendCode? 
                <View style={styles.input}>
                    <TextInput
                        value={newPassword}
                        autoFocus={true}
                        onChangeText={(password) =>
                        setNewPassword(password.replace(/\s+/g, "").trim())
                        }
                        onSubmitEditing={() => inputCode.current.focus()}
                        secureTextEntry={passwordVisibility}
                        fontSize={15}
                        width={"100%"}
                        placeholder="Yeni Şifre"
                        placeholderFontWeight="bold"
                        hitSlop={{ top: 30, bottom: 30 }}
                    />
                    <Pressable
                    onPress={handlePasswordVisibility}
                    style={{ position: "relative", right: "80%" }}
                    hitSlop={35}
                    >
                    <MaterialCommunityIcons
                        name={rightIcon}
                        size={26}
                        color="#232323"
                    />
                    </Pressable>
                </View>
                : 
                <View style={styles.input}>
                <TextInput
                    value={username}
                    autoFocus={true}
                    onChangeText={(username) =>
                    setUsername(username.replace(/\s+/g, "").trim().toLowerCase())
                    }
                    type="text"
                    fontSize={15}
                    width={"100%"}
                    placeholder="Kullanıcı adı"
                    placeholderFontWeight="bold"
                    hitSlop={{ top: 30, bottom: 30 }}
                />
                </View>
                }
            {sendCode ?
            <View style={styles.input}>
              <TextInput
                ref={inputCode}
                value={code}
                onChangeText={setCode}
                keyboardType={"number-pad"}
                inputMode="number"
                fontSize={15}
                width={"100%"}
                maxLength={6}
                placeholder="Doğrulama Kodu"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View> 
            : null} 
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
                    {errorMessage}
                  </Text>
                </View>
              ) : null}
              {sendCode ? 
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
              : null}
            </View>
            {sendCode ? 
            <TouchableOpacity
                raised
                activeOpacity={0.8}
                style={styles.button}
                onPress={handleSubmit}
                >
                <Text style={styles.buttonText}>Onayla</Text>
            </TouchableOpacity>
            : 
            <TouchableOpacity
              raised
              activeOpacity={0.8}
              style={styles.button}
              onPress={forgotPassword}
            >
              <Text style={styles.buttonText}>Kod Gönder</Text>
            </TouchableOpacity>
            }
          </View>
        </View>
        <View style={styles.signContainer}>
          <View style={styles.sign}>
            <Text style={styles.text}>Şifreni hatırladın mı? </Text>
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
