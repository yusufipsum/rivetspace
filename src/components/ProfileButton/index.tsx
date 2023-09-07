import React, { useEffect, useState} from "react";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import ProfilePicture from "../../components/ProfilePicture";
import { useDispatch } from "react-redux";
import { profileSlice } from "../../store/profileSlice";

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from "../../graphql/queries";

const ProfileButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
        image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"} // {user?.image}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;
