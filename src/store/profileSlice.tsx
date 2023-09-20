import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import profiles from "../data/profiles";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';

import { listUsers } from "../graphql/queries";

interface UserState {
  allProfiles: object[];
  isCurrentUser: boolean;
  profiles: object;
  user: object;
  currentUser: object;
}

const initialState: UserState = {
  isCurrentUser: false,
  profiles: profiles,
  user: {},
  currentUser: {},
  allProfiles: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userProfile: (state, action) => {
      const { 
        id,
        name, 
        username, 
        profilePhoto, 
        biography, 
        color, 
        isCurrentUser, 
      } 
      = action.payload;
      state.isCurrentUser = isCurrentUser;
      if (!isCurrentUser && username) {
        const photos = profiles.slice(0, 5);
        state.profiles.find((user) => {
          user.user.name === name,
            user.user.username === username,
            user.user.profilePhoto === profilePhoto,
            user.user.biography === biography,
            user.user.photos === photos,
            user.user.color === color,
            (state.user = {
              sub: id,
              name: name,
              username: username,
              profilePhoto: profilePhoto,
              bio: biography,
              photos: photos,
              color: color,
            });
        });
      } else if(isCurrentUser && username){
        (state.currentUser = {
          sub: id,
          name: name,
          username: username,
          profilePhoto: profilePhoto,
          bio: biography,
          color: color,  
        });
        console.log("state curr", state.currentUser);
      }
    },
    setProfiles: (state, action) => {
      try{
        state.allProfiles = [];
      }catch (e){
        console.log(e);
      }finally{
        state.allProfiles = [...state.allProfiles, action.payload];
        console.log("proFİLESS::: ", state.allProfiles);
      }    
    },
  },
});
