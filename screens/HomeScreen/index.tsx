import * as React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import styles from "./styles.ts";

import { Text } from "../../components/Themed";
import { PostFeed, NewPostButton, StoryFeed } from "../../components";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
