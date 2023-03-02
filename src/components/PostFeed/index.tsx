import React from "react";
import { View, FlatList } from "react-native";

import Post from "../Post";

import { useSelector } from "react-redux";

const Feed = () => {
  const posts = useSelector((state: any) => state.posts.posts);

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;
