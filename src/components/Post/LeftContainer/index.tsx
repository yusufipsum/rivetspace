import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { profileSlice } from "../../../store/profileSlice";

export type ProfileContainerProps = {
  user: UserType;
};

const ProfileContainer = ({ user }: ProfileContainerProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const currentUser = useSelector((state: any) => state.profile.currentUser);

  const [currUser, setCurrUser] = useState(false);
  
  const onPress = () => {
    console.log(user.id)
    console.log(currentUser.sub)
    try {
      if(currentUser.sub === user.id){
        setCurrUser(true);
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(
        profileSlice.actions.userProfile({
          isCurrentUser: currUser,
          id: user.id,
          name: user.name,
          username: user.userName,
          profilePhoto: user.profilePhoto,
          biography: user.biography,
          color: user.color,
        })
      );
      navigation.navigate("Profile");
    }
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <ProfilePicture
          borderWidth={0.2}
          borderColor="black"
          borderRadius={100}
          image={user.profilePhoto}
          size={50}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileContainer;
