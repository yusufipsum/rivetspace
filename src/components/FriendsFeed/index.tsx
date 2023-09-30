import React from "react";
import { View, FlatList } from "react-native";

import Background from "../Backgrounds";
import FriendProfile from "../FriendProfile";
import profiles from "../../data/profiles";

const NearbyFeed = () => (
  <View style={{ width: "100%", flex: 1 }}>
    <Background color="black" />
    <FlatList
      contentContainerStyle={{gap: -10}}
      data={profiles.slice(1, 6)}
      renderItem={({ item }) => <FriendProfile profiles={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default NearbyFeed;
