import React from "react";
import { View, TouchableOpacity } from "react-native";

import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { profileSlice } from "../../../store/profileSlice";

export type ProfileContainerProps = {
  user: UserType;
};

const ProfileContainer = ({ user }: ProfileContainerProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = () => {
    dispatch(profileSlice.actions.userProfile({ isUser: false }));
    dispatch(
      profileSlice.actions.userProfile({
        name: user.name,
        username: user.username,
        image: user.image,
        biography: user.biography,
      })
    );
    navigation.navigate("Profile");
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <ProfilePicture image={user.image} size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileContainer;
