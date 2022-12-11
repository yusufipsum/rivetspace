import * as React from "react";
import { SafeAreaView } from "react-native";

import styles from "./styles.ts";

import { Text } from "../../components/Themed";
import { NearbyFeed } from "../../components";

export default function NearbyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NearbyFeed />  
    </SafeAreaView>
  );
}
