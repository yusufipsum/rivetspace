import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

import { PostType } from "../../../types";
/*import moment from 'moment';*/

import Footer from "./Footer";

export type MainContainerProps = {
  post: PostType;
};

const MainContainer = ({ post }: MainContainerProps) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.content}>{post.content}</Text>
      {!!post.image && (
        <Image style={styles.image} source={{ uri: post.image }} />
      )}
    </View>
    <Footer post={post} />
  </View>
);

export default MainContainer;
