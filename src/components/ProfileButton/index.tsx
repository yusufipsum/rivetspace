import React from "react";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import ProfilePicture from "../../components/ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../../store/profileSlice";

const ProfileButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useSelector((state: any) => state.profile.currentUser);
  
  const onPress = () => {
    dispatch(profileSlice.actions.userProfile({ isCurrentUser: true }));
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
        image={currentUser.profilePhoto}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;
