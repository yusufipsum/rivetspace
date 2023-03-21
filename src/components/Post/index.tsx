import React from "react";
import { View } from "react-native";

import styles from "./styles.ts";

import ProfileContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import TopContainer from "./TopContainer";

import { PostType } from "../../types";

export type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => (
  //<View style={styles.posts}>
  <View style={styles.container}>
    <View style={{ flexDirection: "row" }}>
      <ProfileContainer user={post.user} />
      <TopContainer post={post} />
    </View>
    <MainContainer post={post} />
  </View>
  //</View>
);

export default Post;
