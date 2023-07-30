import React from "react";
import { View, FlatList, Pressable } from "react-native";

import styles from "./styles";

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
          <Pressable style={{flex: 1}}>
            <NearbyProfile key={item.id} profiles={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NearbyFeed;
