import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import ProfilePicture from "../../components/ProfilePicture";

const ProfileButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Profile");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <ProfilePicture
        size={30}
        image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;
