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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Logo } from "../../assets/svg";

export default function LoginScreen() {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate("Home");
  };

  const Sign = () => {
    navigation.navigate("SignIn");
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
    <DismissKeyboard>
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
                  type="text"
                  fontSize={15}
                  width={"100%"}
                  placeholder="Kullanıcı adı"
                  placeholderFontWeight="bold"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  secureTextEntry={true}
                  fontSize={15}
                  width={"100%"}
                  placeholder="Şifre"
                  placeholderFontWeight="bold"
                />
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.forgotPassword}>
                <TouchableOpacity raised activeOpacity={0.8}>
                  <Text
                    style={{
                      color: "grey",
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
                onPress={Login}
              >
                <Text style={styles.buttonText}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sign}>
            <Text style={styles.text}>Henüz bir hesabın yok mu? </Text>
            <TouchableOpacity raised activeOpacity={0.6} onPress={Sign}>
              <Text style={{ fontSize: "14", fontWeight: "bold" }}>Kaydol</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </SafeAreaView>
    </DismissKeyboard>
  );
}
