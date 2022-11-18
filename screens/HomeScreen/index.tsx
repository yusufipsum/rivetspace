import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import styles from "./styles.ts";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import { PostFeed, NewPostButton, StoryFeed, Header } from "../../components";

import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          {/*<Logo size={50} />*/}
          <Text style={styles.title}>GossipCats</Text>
        </View>
        {/*<TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="paw" size={25} color="#26a9e1" />
        </TouchableOpacity>*/}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <StoryFeed />}
        ListFooterComponent={() => <PostFeed />}
      />
      <NewPostButton />
    </SafeAreaView>
  );
}
