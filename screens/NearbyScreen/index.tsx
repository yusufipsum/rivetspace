import * as React from "react";

import styles from "./styles.ts";

import { SafeAreaView } from "react-native";

import { Text } from "../../components/Themed";

import { NearbyFeed } from "../../components";

export default function NearbyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NearbyFeed />
    </SafeAreaView>
  );
}
