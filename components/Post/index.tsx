import React from "react";
import { View, Text } from "react-native";

import styles from "./styles.ts";

import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { PostType } from "../../types";

export type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => (
  <View style={styles.container}>
    <LeftContainer user={post.user} />
    <MainContainer post={post} />
  </View>
);

export default Post;
