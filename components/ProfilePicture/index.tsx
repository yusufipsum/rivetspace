import React from "react";
import { Image } from "react-native";

export type ProfilePictureProps = {
  image?: string;
  size?: number;
};

const ProfilePicture = ({
  position,
  marginLeft,
  marginRight,
  borderWidth,
  borderColor,
  image,
  size = 50,
}: ProfilePictureProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: size,
        height: size,
        borderRadius: size,
        position,
        marginLeft,
        marginRight,
        borderWidth,
        borderColor,
      }}
    />
  );
};

export default ProfilePicture;
