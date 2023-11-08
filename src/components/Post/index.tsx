import React from "react";
import { View } from "react-native";

import styles from "./styles";

import ProfileContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import TopContainer from "./TopContainer";

import { PostType } from "../../types";

export type PostProps = {
  post: PostType;
  isHome: boolean;
  refresh: () => void;
};

const Post = ({ post, isHome, refresh }: PostProps) => (
  <View style={styles.container}>
    <View style={styles.posts}>
      <View style={{ flexDirection: "row" }}>
        <ProfileContainer user={post.user} />
        <TopContainer post={post} isHome={isHome} refresh={refresh} />
      </View>
      <MainContainer post={post} />
    </View>
  </View>
);

export default Post;
