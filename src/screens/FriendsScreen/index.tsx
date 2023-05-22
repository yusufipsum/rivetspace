import * as React from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Text, View } from "../../components/Themed";
import { FriendsFeed } from "../../components";

import { Feather } from "@expo/vector-icons";

export default function FriendsScreen() {
  const navigation = useNavigation();
  const onPostCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onPostCancel}>
          <Feather name="chevron-left" size={30} style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Yeni Mesaj</Text>
        <View style={styles.input}>
          {/*<TextInput
            autoCapitalize="none"
            autoCorrect={false}
            status="info"
            placeholder="Ara"
            textStyle={{ color: "#000" }}
          />*/}
          <TouchableOpacity>
            <Feather name="search" size={20} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FriendsFeed />
    </SafeAreaView>
  );
}
