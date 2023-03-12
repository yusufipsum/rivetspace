import * as React from "react";
import { Text, View } from "../../components/Themed";

import styles from "./styles";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Henüz hiç bildirim yok!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>
        Bir bildirim geldiğinde burada göreceksin.
      </Text>
    </View>
  );
}
