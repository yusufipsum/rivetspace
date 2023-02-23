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
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

import styles from "./styles";
import { Logo } from "../../assets/svg";
import { useState } from "react";

import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibilty";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate("Login");
  };

  const [numberOrMail, setNumberOrMail] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubmit = async function name(event: any) {
    const regexPhoneNumber = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{4})$/;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = numberOrMail.match(regexEmail);
    const checkPhoneNumber = numberOrMail.match(regexPhoneNumber);

    if (checkEmail) {
      setEmail(numberOrMail);
      console.log(email);
      setResponse(true);
    } else if (checkPhoneNumber) {
      setPhoneNumber("+90" + numberOrMail.replace(/\s+/g, "").trim());
      console.log(phoneNumber);
      setResponse(true);
    } else {
      Alert.alert(
        "Lütfen Geçerli Bir E-Posta Adresi veya Cep Telefonu Numarası Giriniz!"
      );
    }

    if (
      response &&
      (checkPhoneNumber || checkEmail) &&
      nameSurname.length > 0 &&
      username.length >= 4 &&
      password.length >= 8
    ) {
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
            enabled: true,
          },
        });
        console.log(user);
        navigation.navigate("ConfirmSignIn");
      } catch (error) {
        console.log("error signing up:", error);
        Alert.alert("Bu kullanıcı adı daha önce alınmış!");
      }
    }
    if (numberOrMail.length == 0) {
      Alert.alert("E-Posta veya Cep Telefonu Numarası kısmı boş bırakılamaz!");
    } else if (response && nameSurname.length == 0) {
      Alert.alert("Adı Soyadı kısmı boş bırakılamaz!");
    } else if (response && username.length < 4) {
      Alert.alert("Kullanıcı adı en az 4 haneli olmalıdır!");
    } else if (response && password.length < 8) {
      Alert.alert("Şifre en az 8 haneli olmalıdır!");
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

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

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
                onChangeText={(numberOrMail) =>
                  setNumberOrMail(numberOrMail.toLowerCase())
                }
                type="text"
                fontSize={15}
                width={"100%"}
                placeholder="E-Posta veya Cep Telefonu Numarası (5xx xxx xxxx)"
                placeholderFontWeight="bold"
                hitSlop={{ top: 30, bottom: 30 }}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={nameSurname}
                onChangeText={setNameSurname}
                type="text"
                required
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
                onChangeText={(username) =>
                  setUsername(username.replace(/\s+/g, "").trim().toLowerCase())
                }
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
                onChangeText={(password) =>
                  setPassword(password.replace(/\s+/g, "").trim())
                }
                secureTextEntry={passwordVisibility}
                fontSize={15}
                width={"100%"}
                placeholder="Şifre"
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
