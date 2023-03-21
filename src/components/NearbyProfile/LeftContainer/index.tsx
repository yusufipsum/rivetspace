import React from "react";
import { View, TouchableOpacity } from "react-native";

import ProfilePicture from "../../ProfilePicture";

import { UserType } from "../../../types";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { profileSlice } from "../../../store/profileSlice";

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = () => {
    dispatch(
      profileSlice.actions.userProfile({
        isUser: false,
        name: user.name,
        username: user.username,
        image: user.image,
        biography: user.biography,
        color: user.color,
      })
    );
    navigation.navigate("Profile");
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View>
        <ProfilePicture image={user.image} borderRadius={100} size={120} />
      </View>
    </TouchableOpacity>
  );
};

export default LeftContainer;
