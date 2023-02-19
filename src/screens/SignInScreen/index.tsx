import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

import styles from "./styles";
import { Logo } from "../../assets/svg";
import { useState } from "react";

export default function LoginScreen() {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate("Login");
  };

  const Sign = () => {
    navigation.navigate("Home");
  };

  const [numberOrMail, setNumberOrMail] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async function name(event: any) {
    if (numberOrMail.includes("@")) {
      setEmail(numberOrMail);
      setPhoneNumber("+100000000000");
      console.log(email);
    } else {
      setPhoneNumber(numberOrMail);
      console.log(phoneNumber);
    }
    console.log(username);
    try {
      event.preventDefault();
      const { user } = await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          name: nameSurname,
          email: email,
          phone_number: phoneNumber,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      Alert.alert("Ortam Sensiz Olmazdı... Hemen Giriş Yap!");
      navigation.navigate("Login");
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const DismissKeyboard = ({ children }) => (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
  return (
    //<DismissKeyboard>
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
                value={numberOrMail}
                onChangeText={(numberOrMail) => setNumberOrMail(numberOrMail)}
                type="text"
                fontSize={15}
                width={"100%"}
                placeholder="Cep Telefonu Numarası veya E-Posta"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={nameSurname}
                onChangeText={(nameSurname) => setNameSurname(nameSurname)}
                type="text"
                fontSize={15}
                width={"100%"}
                placeholder="Adı Soyadı"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={username}
                onChangeText={(username) => setUsername(username)}
                type="text"
                fontSize={15}
                width={"100%"}
                placeholder="Kullanıcı Adı"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
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
            <View style={styles.info}>
              <Text style={styles.infoText}>
                Kaydolarak,{" "}
                <TouchableOpacity raised activeOpacity={0.8}>
                  <Text style={styles.principles}>Koşullarımızı,</Text>
                </TouchableOpacity>
                <TouchableOpacity raised activeOpacity={0.8}>
                  <Text style={styles.principles}> Gizlilik İlkemizi</Text>
                </TouchableOpacity>{" "}
                ve
                <TouchableOpacity raised activeOpacity={0.8}>
                  <Text style={styles.principles}>Çerezler İlkemizi</Text>
                </TouchableOpacity>{" "}
                kabul etmiş olursun.
              </Text>
            </View>
            <TouchableOpacity
              raised
              activeOpacity={0.8}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Kaydol</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sign}>
          <Text style={styles.text}>Zaten bir hesabın var mı? </Text>
          <TouchableOpacity
            raised
            activeOpacity={0.6}
            onPress={Login}
            hitSlop={{ top: 25, bottom: 25, left: 40, right: 40 }}
          >
            <Text style={{ fontSize: "14", fontWeight: "bold" }}>
              Giriş yap
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
    //</DismissKeyboard>
  );
}
