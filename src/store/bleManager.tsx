import { BleManager, Device, ScanCallbackType, ScanMode } from "react-native-ble-plx";

export interface DeviceReference {
    name?: string | null;
    id?: string;
    mac?: string | undefined | null;
}

class BluetoothLeManager {
    bleManager: BleManager;
    device: Device | null;
    isListening= false;

    constructor() {
        this.bleManager = new BleManager();
        this.device = null;
    }

    scanForPeripherals = (onDeviceFound: (deviceSummary: DeviceReference) => void) => {
        this.bleManager.startDeviceScan(null, { callbackType: ScanCallbackType.AllMatches, allowDuplicates: true }, (_, scannedDevice) => {
            onDeviceFound({
                id: scannedDevice?.id,
                name: scannedDevice?.localName ?? scannedDevice?.name,
            });
        });
    };

    stopScanningForPeripherals = () => {
        this.bleManager.stopDeviceScan();
    }
}

const manager = new BluetoothLeManager();

export default manager;