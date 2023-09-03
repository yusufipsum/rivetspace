import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setDevice, startScanning, stopScanning } from "./bleSlice";

import bluetoothLeManager from "./bleManager";

export const bleMiddleware = createListenerMiddleware();

bleMiddleware.startListening({
    actionCreator: startScanning,
    effect: (_, listenerApi) => {
        bluetoothLeManager.scanForPeripherals((device) => {
            listenerApi.dispatch(setDevice(device))
        });
    }
});

bleMiddleware.stopListening({
    actionCreator: stopScanning,
    effect: (_, listenerApi) => {
        bluetoothLeManager.stopScanningForPeripherals();
    }
})