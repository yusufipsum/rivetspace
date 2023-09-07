import { createSlice } from "@reduxjs/toolkit";
import profiles from "../data/profiles";

const initialState = {
  isCurrentUser: false,
  profiles: profiles,
  user: {},
  currentUser: {},
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
  },
});
