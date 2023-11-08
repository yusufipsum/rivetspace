import React, { useEffect, useState } from "react";

import { ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import ProfilePicture from "../../components/ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../../store/profileSlice";

const ProfileButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useSelector((state: any) => state.profile.currentUser);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("curr::", currentUser);
   if(currentUser.profilePhoto != undefined || currentUser.profilePhoto != null){
     setIsLoading(false);
   }
 }, [currentUser.profilePhoto]);
  
  const onPress = () => {
    dispatch(profileSlice.actions.userProfile({ isCurrentUser: true }));
    navigation.navigate("Profile");
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      {isLoading ? (
      <ActivityIndicator size="large" color="black" />
      ) : (
      <ProfilePicture
        borderWidth={0.2}
        borderRadius={100}
        borderColor="grey"
        size={30}
        image={currentUser.profilePhoto}
      />
      )}
    </TouchableOpacity>
  );
};

export default ProfileButton;
