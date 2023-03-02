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
      const { isUser } = action.payload;
      state.isUser = isUser;
    },
  },
});
