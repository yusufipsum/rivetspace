import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => (
  <View>
    <TouchableOpacity activeOpacity={0.7}>
      <ProfilePicture image={user.image} size={50} />
    </TouchableOpacity>
  </View>
);

export default LeftContainer;
