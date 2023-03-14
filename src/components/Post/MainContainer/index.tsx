import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

import { PostType } from "../../../types";
/*import moment from 'moment';*/

import Footer from "./Footer";

import Lightbox from "react-native-lightbox";

export type MainContainerProps = {
  post: PostType;
};

const MainContainer = ({ post }: MainContainerProps) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.content}>{post.content}</Text>
      {!!post.image && (
        <Lightbox resizeMode="contain" underlayColor="white">
          <Image style={styles.image} source={{ uri: post.image }} />
        </Lightbox>
      )}
    </View>
    <Footer post={post} />
  </View>
);

export default MainContainer;
