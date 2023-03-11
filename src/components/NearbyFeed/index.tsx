import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles.ts";

import NearbyProfile from "../NearbyProfile";
import NearbyTopInfo from "../NearbyTopInfo";
import { useSelector } from "react-redux";

const NearbyFeed = () => {
  const profiles = useSelector((state: any) => state.profile.profiles);

  return (
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
};

export default NearbyFeed;
