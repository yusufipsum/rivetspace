import React from "react";
import { View, FlatList } from "react-native";

import profiles from "../../data/profiles";
import NearbyProfile from "../NearbyProfile";

const NearbyFeed = () => (
  <View style={{ width: "100%", flex: 1 }}>
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
