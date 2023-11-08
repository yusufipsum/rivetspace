import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import profiles from "../data/profiles";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';

import { listUsers } from "../graphql/queries";

interface UserState {
  allProfiles: object[];
  matches: object[];
  friends: object[];
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
  matches: [],
  friends: [],
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
        (state.user = {
          sub: id,
          name: name,
          username: username,
          profilePhoto: profilePhoto,
          bio: biography,
          color: color,
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
        state.allProfiles = [...state.allProfiles, ...action.payload];
      }    
    },
    matches: (state, action) => {
      try{
        state.matches = [...state.matches, ...action.payload];
      }catch (e){
        console.log(e);
      }finally{
        const uniqueMatches: any[] = [];
        const map = new Map();
        for (const match of state.matches) {
            if (!map.has(match.id)) {
                map.set(match.id, true);
                uniqueMatches.push(match);
            }
        }
        state.matches = uniqueMatches;
      }       
    },
  },
});
