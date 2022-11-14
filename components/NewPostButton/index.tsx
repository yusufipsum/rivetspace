import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { AntDesign } from "@expo/vector-icons";

const NewPostButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewPost");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <AntDesign name={"plus"} size={25} color="white" />
    </TouchableOpacity>
  );
};

export default NewPostButton;
