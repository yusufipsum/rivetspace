import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  macAddress: object;
}

const initialState: UserState = {
  macAddress: {},
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setMACAddress: (state, action) => {
        const macAddress = action.payload;
        state.macAddress = macAddress;
    },
  },
});
