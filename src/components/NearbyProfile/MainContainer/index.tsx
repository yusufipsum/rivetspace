import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
          <Text style={styles.username}>@{profiles.user.userName}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.content} numberOfLines={2}>
        {profiles.user.biography}
      </Text>
    </View>
    <View style={styles.icons}>
      <TouchableOpacity style={styles.icon} activeOpacity={0.3}>
        <Octicons size={25} name={"person-add"} style={{ color: "#26a9e1" }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} activeOpacity={0.3}>
        <Ionicons
          size={25}
          name={"game-controller"}
          /*style={{ color: "#26a9e1" }}*/
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default MainContainer;
