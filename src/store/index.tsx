import { configureStore } from "@reduxjs/toolkit";

import { postsSlice } from "./postsSlice";
import { profileSlice } from "./profileSlice";
import { bleState } from "./bleSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bleMiddleware } from "./bleListener";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    profile: profileSlice.reducer,
    ble: bleState.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bleMiddleware.middleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;