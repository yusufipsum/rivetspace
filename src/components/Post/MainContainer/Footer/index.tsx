import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { EvilIcons } from "@expo/vector-icons";

import { PostType } from "../../../../types";

import { useDispatch } from "react-redux";
import { postsSlice } from "../../../../store/postsSlice";

export type FooterContainerProps = {
  post: PostType;
};

const Footer = ({ post }: FooterContainerProps) => {
  const dispatch = useDispatch();
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [upColor, setUpColor] = useState("grey");
  const [downColor, setDownColor] = useState("grey");

  useEffect(() => {
    if (isUp) {
      if (downColor === "red") {
        setDownColor("grey");
        setIsDown(!isUp);
      }
      setUpColor("green");
    } else {
      setUpColor("grey");
    }
    if (isDown) {
      if (upColor === "green") {
        setUpColor("grey");
        setIsUp(!isDown);
      }
      setDownColor("red");
    } else {
      setDownColor("grey");
    }
  });

  const up = () => {
    dispatch(postsSlice.actions.up({ postId: post.id, like: 1 }));
    setIsUp(!isUp);
  };

  const down = () => {
    dispatch(postsSlice.actions.down({ postId: post.id, dislike: -1 }));
    setIsDown(!isDown);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftIcons}>
        <TouchableOpacity
          onPress={up}
          activeOpacity={0.5}
          hitSlop={{ top: 20, bottom: 30, left: 10, right: 20 }}
        >
          <View style={styles.upIcon}>
            <EvilIcons size={30} color={upColor} name={"chevron-up"} />
            <Text style={[styles.info, { color: upColor }]}>
              {post.numberOfLikes}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={down}
          activeOpacity={0.5}
          hitSlop={{ top: 10, bottom: 30 }}
        >
          <View style={styles.downIcon}>
            <EvilIcons size={30} color={downColor} name={"chevron-down"} />
            {/* <Text style={[styles.info, { color: downColor }]}>
              {post.numberOfDislikes}
            </Text> */}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rightIcons}>
        {/* <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 25, bottom: 25 }}>
          <View style={styles.commentIcon}>
            <EvilIcons size={24} name={"comment"} />
            <Text style={styles.info}>{post.numberOfComments}</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Footer;
