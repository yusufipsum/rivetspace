import React, { useEffect, useState } from "react";
import { View, FlatList, Pressable, Dimensions } from "react-native";

import Post from "../Post";

import { useSelector } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

const windowWidth = Dimensions.get("window").width;

const Feed = () => {
  const posts = useSelector((state: any) => state.posts.posts);

  const [data, setData] = useState([]);

  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      setData(postData.data.listPosts.items);
    } catch (er) {
      console.log(er);
    } finally {
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <View style={{ width: windowWidth, flex: 1}}>
      <FlatList
        data={data}
        renderItem={({ item }) => 
          <Pressable style={{flex: 1}}>
            <Post post={item} />
          </Pressable>
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
