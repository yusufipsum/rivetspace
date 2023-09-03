import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { DeviceReference } from './bleManager';

interface BluetoothState {
    allDevices: DeviceReference[];
}

const initialState: BluetoothState = {
    allDevices: [],
}

const isDuplicateDevice = (
    devices: DeviceReference[],
    nextDevice: DeviceReference
) => devices.findIndex((device) => nextDevice.id === device.id) > -1;

export type DevicesAction = PayloadAction<DeviceReference>;

export const startScanning = createAction("bleState/startScanning"); 
export const stopScanning = createAction("bleState/stopScanning"); 

export const bleState = createSlice({
    name: "bleState",
    initialState,
    reducers: {
        setDevice: (state, action: DevicesAction) => {
            if(!isDuplicateDevice(state.allDevices, action.payload)) {
                state.allDevices = [...state.allDevices, action.payload];
            }
        },
    },
});

export const { setDevice } = bleState.actions;