import React from "react";
import { Image } from "react-native";

export type ImageProps = {
  image?: string;
  borderRadius?: number;
  width?: number;
  height?: number;
  resizeMode?: any;
};

const Images = ({
  resizeMode,
  image,
  width,
  height,
  borderRadius,
}: ImageProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        resizeMode,
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export default Images;
