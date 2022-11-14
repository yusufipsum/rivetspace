import * as React from "react";
import { StyleSheet } from "react-native";

import styles from "./styles.ts";

import { Text, View } from "../../components/Themed";
import { PostFeed, NewPostButton } from "../../components";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PostFeed />
      <NewPostButton />
    </View>
  );
}
