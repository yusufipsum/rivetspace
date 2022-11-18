import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { AntDesign, Ionicons } from "@expo/vector-icons";

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
      {/*<Ionicons name="md-paw" size={25} color="#fff" />*/}
      <AntDesign name={"plus"} size={25} color="white" />
    </TouchableOpacity>
  );
};

export default NewPostButton;
