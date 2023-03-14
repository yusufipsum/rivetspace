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
  borderRadius?: number;
  //blurRadius?: undefined;
  backgroundColor?: string;
  alignSelf?: any;
  resizeMode?: any;
  width?: number;
  height?: number;
};

const ProfilePicture = ({
  position,
  marginLeft,
  marginRight,
  borderWidth,
  borderRadius,
  borderColor,
  //blurRadius,
  image,
  backgroundColor,
  size,
  alignSelf,
  resizeMode,
}: ProfilePictureProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: size,
        height: size,
        borderRadius,
        //blurRadius,
        position,
        marginLeft,
        marginRight,
        borderWidth,
        borderColor,
        backgroundColor,
        alignSelf,
        resizeMode,
      }}
    />
  );
};

export default ProfilePicture;
