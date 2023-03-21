import { createSlice } from "@reduxjs/toolkit";
import profiles from "../data/profiles";

const initialState = {
  isUser: false,
  profiles: profiles,
  user: {},
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userProfile: (state, action) => {
      const { name, username, image, biography, color, isUser } =
        action.payload;
      state.isUser = isUser;
      if (!isUser) {
        state.profiles.find((user) => {
          user.user.name === name,
            user.user.username === username,
            user.user.image === image,
            user.user.biography === biography;
          user.user.color === color;
          state.user = {
            name: name,
            username: username,
            image: image,
            bio: biography,
            color: color,
          };
        });
      }
    },
  },
});
