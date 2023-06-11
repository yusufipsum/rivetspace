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
      const { name, username, profilePhoto, biography, color, isUser } =
        action.payload;
      state.isUser = isUser;
      if (!isUser) {
        const photos = profiles.slice(0, 5);
        state.profiles.find((user) => {
          user.user.name === name,
            user.user.username === username,
            user.user.profilePhoto === profilePhoto,
            user.user.biography === biography,
            user.user.photos === photos,
            user.user.color === color,
            (state.user = {
              name: name,
              username: username,
              profilePhoto: profilePhoto,
              bio: biography,
              photos: photos,
              color: color,
            });
        });
      }
    },
  },
});
