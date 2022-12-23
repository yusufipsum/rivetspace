import React from "react";
import { Image } from "react-native";

export type ProfilePictureProps = {
  image?: string;
  size?: number;
  position?: any;
  marginLeft?: number;
  marginRight?: number;
  borderWidth?: number;
  borderColor?: string;
  //blurRadius?: undefined;
  backgroundColor?: string; 
};

const ProfilePicture = ({
  position,
  marginLeft,
  marginRight,
  borderWidth,
  borderColor,
  //blurRadius,
  image,
  backgroundColor,
  size = 50,
}: ProfilePictureProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: size,
        height: size,
        borderRadius: size,
        //blurRadius,
        position,
        marginLeft,
        marginRight,
        borderWidth,
        borderColor,
        backgroundColor,
      }}
    />
  );
};

export default ProfilePicture;
