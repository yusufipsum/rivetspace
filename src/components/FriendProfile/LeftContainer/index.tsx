import React from "react";
import { View, TouchableOpacity } from "react-native";

import ProfilePicture from "../../ProfilePicture";

import { UserType } from "../../../types";

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => (
  <TouchableOpacity activeOpacity={0.7}>
    <View>
      <ProfilePicture image={user.image} borderRadius={50} size={50} />
    </View>
  </TouchableOpacity>
);

export default LeftContainer;
