import React from "react";
import { View, FlatList } from "react-native";

import FriendProfile from "../FriendProfile";
import profiles from "../../data/profiles";

const NearbyFeed = () => (
  <View style={{ width: "100%", flex: 1 }}>
    <FlatList
      data={profiles}
      renderItem={({ item }) => <FriendProfile profiles={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default NearbyFeed;
