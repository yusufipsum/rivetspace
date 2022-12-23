import React from "react";
import { View, TouchableOpacity } from "react-native";

import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

export type ProfileContainerProps = {
  user: UserType;
};

const ProfileContainer = ({ user }: ProfileContainerProps) => (
  <View>
    <TouchableOpacity activeOpacity={0.7}>
      <ProfilePicture image={user.image} size={50} />
    </TouchableOpacity>
  </View>
);

export default ProfileContainer;
