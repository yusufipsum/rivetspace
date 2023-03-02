import { configureStore } from "@reduxjs/toolkit";

import { postsSlice } from "./postsSlice";
import { profileSlice } from "./profileSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    profile: profileSlice.reducer,
  },
});
