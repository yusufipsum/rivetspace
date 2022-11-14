import * as React from "react";

import styles from "./styles.ts";

import { Text, View } from "../../components/Themed";

import { NearbyFeed } from "../../components";

export default function NearbyScreen() {
  return (
    <View style={styles.container}>
      <NearbyFeed />
    </View>
  );
}
