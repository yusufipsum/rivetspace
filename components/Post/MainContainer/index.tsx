import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { PostType } from "../../../types";
/*import moment from 'moment';*/

import Footer from "./Footer";

export type MainContainerProps = {
  post: PostType;
};

const MainContainer = ({ post }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.user}>
          <Text style={styles.name}>{post.user.name}</Text>
          <Text style={styles.username}>{post.user.username}</Text>
          {/*<Text style={styles.createdAt}>{moment(post.createdAt).startOf('hour').fromNow()}7s</Text>*/}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ paddingLeft: 5, paddingRight: 5 }}
        activeOpacity={0.3}
      >
        <Ionicons name={"ellipsis-horizontal-outline"} />
      </TouchableOpacity>
    </View>
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
