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
        image={
          "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/322471732_1277548349458457_1573710981679399978_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fMv8qzpJFpoAX9yB7W3&_nc_ht=scontent.fist13-1.fna&oh=00_AfCkiTxrul4qEohnGFU9u1-fjYnATgHsFHDR12U2LqnhlQ&oe=63D2FC76"
        }
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;
