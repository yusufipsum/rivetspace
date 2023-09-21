import React from "react";
import { View } from "react-native";

import styles from "./styles";

import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { ProfileType } from "../../types";
import Background from "../Backgrounds";

export type ProfileProps = {
  profiles: ProfileType;
};

const Profile = ({ profiles }: ProfileProps) => (
  <View style={styles.cards}>
    <View style={styles.container}>
    <Background color={profiles.user.color} />
      <LeftContainer user={profiles.user} />
      <MainContainer profiles={profiles} />
    </View>
  </View>
);

export default Profile;
