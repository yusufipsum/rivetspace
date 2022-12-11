import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { PostType } from "../../../types";
/*import moment from 'moment';*/

import Footer from "./Footer";

export type TopContainerProps = {
  post: PostType;
};

const TopContainer = ({ post }: TopContainerProps) => (
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
        <Ionicons name={"ellipsis-horizontal"} color={"grey"} size={15} />
      </TouchableOpacity>
    </View>
  </View>
);

export default TopContainer;
