import React from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./styles";

import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { ProfileType } from "../../types";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { profileSlice } from "../../store/profileSlice";

export type ProfileProps = {
  profiles: ProfileType;
  refresh: () => void;
};

const Profile = ({ profiles, refresh }: ProfileProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = () => {
    dispatch(
      profileSlice.actions.userProfile({
        isCurrentUser: false,
        id: profiles.user.id,
        name: profiles.user.name,
        username: profiles.user.userName,
        profilePhoto: profiles.user.profilePhoto,
        biography: profiles.user.biography,
        color: profiles.user.color,
      })
    );
    navigation.navigate("Profile");
  };

  return(
  <View style={styles.friends}>
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <LeftContainer user={profiles.user} />
        <MainContainer profiles={profiles} refresh={refresh} />
      </View>
    </TouchableOpacity>
  </View>
)};

export default Profile;
