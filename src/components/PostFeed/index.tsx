import React from "react";
import { View, FlatList, Pressable } from "react-native";

import Post from "../Post";

import { useSelector } from "react-redux";

const Feed = () => {
  const posts = useSelector((state: any) => state.posts.posts);

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => 
          <Pressable style={{flex: 1}}>
            <Post post={item} />
          </Pressable>
        }
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;
