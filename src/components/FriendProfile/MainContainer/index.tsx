import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Ionicons, Octicons } from "@expo/vector-icons";
/*import moment from 'moment';*/

import { ProfileType } from "../../../types";

export type MainContainerProps = {
  profiles: ProfileType;
};

const MainContainer = ({ profiles }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.profilesHeaderContainer}>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.profilesHeaderNames}>
          <Text style={styles.name}>{profiles.user.name}</Text>
          <Text style={styles.username}>{profiles.user.username}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>{profiles.user.biography}</Text>
      </View>
    </View>
  </View>
);

export default MainContainer;
