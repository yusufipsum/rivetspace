import React from "react";
import { View } from "react-native";

import styles from "./styles";

import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { ProfileType } from "../../types";

export type ProfileProps = {
  profiles: ProfileType;
};

const Profile = ({ profiles }: ProfileProps) => (
  <View style={styles.cards}>
    <View style={styles.container}>
      <LeftContainer user={profiles.user} />
      <MainContainer profiles={profiles} />
    </View>
  </View>
);

export default Profile;
