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
    <View style={styles.leftIcons}>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.upIcon}>
          <EvilIcons size={30} name={"chevron-up"} />
          <Text style={styles.info}>{post.numberOfLikes}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.downIcon}>
          <EvilIcons size={30} name={"chevron-down"} />
          <Text style={styles.info}>{post.numberOfUnlikes}</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.rightIcons}>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.commentIcon}>
          <EvilIcons size={24} name={"comment"} />
          <Text style={styles.info}>{post.numberOfComments}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default Footer;
