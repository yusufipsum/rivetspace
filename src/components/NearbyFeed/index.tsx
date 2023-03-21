import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles.ts";

import NearbyProfile from "../NearbyProfile";
import NearbyTopInfo from "../NearbyTopInfo";
import { useSelector } from "react-redux";
import Background from "../Backgrounds";

const NearbyFeed = () => {
  const profiles = useSelector((state: any) => state.profile.profiles);

  return (
    <View style={styles.container}>
      <NearbyTopInfo />
      <Background color="#def2fa" />
      <FlatList
        data={profiles}
        numColumns={2}
        renderItem={({ item }) => (
          <NearbyProfile key={item.id} profiles={item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NearbyFeed;
