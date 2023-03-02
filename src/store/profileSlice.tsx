import { createSlice } from "@reduxjs/toolkit";
import profiles from "../data/profiles";

const initialState = {
  isUser: false,
  profiles: profiles,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userProfile: (state, action) => {
      const { name, username, image, biography, isUser } = action.payload;
      state.isUser = isUser;
      state.profiles.find((user) => {
        user.user.name === name,
          user.user.username === username,
          user.user.image === image,
          user.user.biography === biography;
      });

      console.log("AD VE KULLANICI ADI: ", name, username, biography);
    },
  },
});
