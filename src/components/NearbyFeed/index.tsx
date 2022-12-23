import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles.ts";

import profiles from "../../data/profiles";
import NearbyProfile from "../NearbyProfile";
import NearbyTopInfo from "../NearbyTopInfo";

const NearbyFeed = () => (
  <View style={styles.container}>
    <NearbyTopInfo />
    <FlatList
      data={profiles}
      renderItem={({ item }) => <NearbyProfile profiles={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default NearbyFeed;
