/* eslint-disable no-bitwise */

import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";

import * as ExpoDevice from "expo-device";

interface BluetoothLowEnergyApi {
    requestPermissions(): Promise<boolean>;
    scanForPeripherals(): void;
    allDevices: Device[];
}

function useBLE(): BluetoothLowEnergyApi {

    const bleManager = useMemo(() => new BleManager(), []);
    const [allDevices, setAllDevices] = useState<Device[]>([]);

    const requestAndroidPermissions = async () => {
        
        const bluetoothScanPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            {
                title: "Scan Permission",
                message: "App requires Bluetooth Scanning",
                buttonPositive: "OK",
            }
        );

        const bluetoothFineLocationPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Fine Location",
                message: "App requires Fine Location",
                buttonPositive: "OK",
            }
        );

        return (
            bluetoothScanPermission === "granted" &&  
            bluetoothFineLocationPermission === "granted"
        )
    };
    
        const requestPermissions = async () => {
            if(Platform.OS === "android"){
                if((ExpoDevice.platformApiLevel ?? -1) < 31){
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: "Location Permission",
                            message: "Bluetooth requires Location",
                            buttonPositive: "OK",
                        }
                    );

                return granted === PermissionsAndroid.RESULTS.GRANTED;
                } else {
                    const isAndroid31PermissionGranted = 
                        await requestAndroidPermissions();
                    return isAndroid31PermissionGranted;
                }
            } else {
                return true;
            }
        };

        const isDuplicateDevice = (devices: Device[], nextDevice: Device) => 
            devices.findIndex((device) => nextDevice.id === device.id) > -1;

        const scanForPeripherals = () => {
            bleManager.startDeviceScan(null, null, (error, device) => {
                if (error) {
                    console.log(error, "location");
                }
                console.log(device, "bbb");
                if(device){
                    console.log("yyy");
                    setAllDevices((prevState) => {
                        if(!isDuplicateDevice(prevState, device)){
                            return [...prevState, device];
                        }
                        return prevState;
                    });
                }
            });
        };

        return {
            scanForPeripherals,
            requestPermissions,
            allDevices,
        };
}

export default useBLE;