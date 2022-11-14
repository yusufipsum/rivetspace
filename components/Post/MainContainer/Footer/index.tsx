import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import {
  Ionicons,
  Feather,
  Entypo,
  FontAwesome,
  EvilIcons,
  Fontisto,
} from "@expo/vector-icons";

import { PostType } from "../../../../types";

export type FooterContainerProps = {
  post: PostType;
};

const Footer = ({ post }: FooterContainerProps) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.upIcon}>
        <Feather size={20} color="green" name={"chevron-up"} />
        <Text style={styles.info}>{post.numberOfLikes}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.downIcon}>
        <Feather size={20} name={"chevron-down"} />
        <Text style={styles.info}>{post.numberOfUnlikes}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.commentIcon}>
        <Feather size={20} name={"message-circle"} />
        <Text style={styles.info}>{post.numberOfComments}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Footer;
