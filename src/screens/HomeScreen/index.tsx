import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles.ts";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import {
  PostFeed,
  NewPostButton,
  StoryFeed,
  Header,
  ProfileButton,
} from "../../components";

import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Notifications");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Logo size={38} />
        </View>
        <View>
          <Text style={styles.title}>rivetspace</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onPress}
        >
          <ProfileButton />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <StoryFeed />}
        ListFooterComponent={() => <PostFeed />}
      />
    </SafeAreaView>
  );
}
