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
    dispatch(
      profileSlice.actions.userProfile({
        isCurrentUser: false,
        id: user.id,
        name: user.name,
        username: user.username,
        profilePhoto: user.profilePhoto,
        biography: user.biography,
        color: user.color,
      })
    );
    navigation.navigate("Profile");
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <ProfilePicture
          borderWidth={0.2}
          borderColor="black"
          borderRadius={100}
          image={user.profilePhoto}
          size={50}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileContainer;
