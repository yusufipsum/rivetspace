import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import NotificationFeed from "../../components";

import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";

export default function NotificationsScreen() {
  /*const navigation = useNavigation();
  const onPostCancel = () => {
    navigation.goBack();
  };*/
  return (
    <SafeAreaView style={styles.container}>
      {/*<View style={styles.header}>
        <TouchableOpacity onPress={onPostCancel}>
          <Feather name="chevron-left" size={30} style={styles.goBackIcon} />
  </TouchableOpacity>
        <Text style={styles.title}>Bildirimler</Text>
        <View style={styles.input}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            status="info"
            placeholder="Ara"
            textStyle={{ color: "#000" }}
          />
          <SimpleLineIcons name="bell" size={20} style={styles.searchIcon} />
        </View>
      </View>*/}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Hiç bildirim yok!</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Bir bildirim geldiğinde</Text>
        <Text style={styles.title}>burada göreceksin</Text>
        {/* <NotificationFeed /> */}
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </SafeAreaView>
  );
}
