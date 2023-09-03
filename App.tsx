import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation/index";
import Login from "./src/navigation/login";

import { Amplify, Hub, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";

import DismissKeyboard from "./src/components/DismissKeyboard";

import { createUser } from './src/graphql/mutations';
import { getUser } from "./src/graphql/queries";

import DeviceInfo from "react-native-device-info";
//import BLEAdvertiser from "react-native-ble-advertiser";

Amplify.configure(awsconfig);

function App() {
  // const APPLE_ID = 0x4c;
  // const MANUF_DATA = [1, 0];

  // BLEAdvertiser.setCompanyId(APPLE_ID);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [currentUser, setCurrentUser] = useState();

  const getRandomPhoto = () => {
    return 'https://cdn-icons-png.flaticon.com/512/666/666201.png'
  }

  const saveUserToDB = async (user: any) => {
    
    await API.graphql(graphqlOperation(createUser, { input: user}));
    console.log("sadfsdafsad", user);
  }

  const [mac, setMac] = useState("");
  const [customUUID, setCustomUUID] = useState("");

  const getMac = async () => {
    DeviceInfo.getMacAddress()
    .then(macAddress => {
         console.log("That's my MAC Address:", macAddress)
         setMac(macAddress);
     })
     .catch(error => console.log("error", error))
  }

  // const startAdv = () => { 
  //   BLEAdvertiser.broadcast(customUUID, MANUF_DATA, {
  //   //advertiseMode: 2, (BLEAdvertiser.ADVERTISE_MODE_BALANCED,)
  //   //txPowerLevel: 4, (BLEAdvertiser.ADVERTISE_TX_POWER_MEDIUM,)
  //   connectable: false,
  //   includeDeviceName: false,
  //   includeTxPowerLevel: false,
  // })
  //   .then((sucess) => console.log(customUUID, 'Broadcast Successful', sucess))
  //   .catch((error) => console.log(customUUID, 'Broadcast Error', error));
  // }

  useEffect(() => {
    Hub.listen("auth", (e) => {
      if (e.payload.event == "signIn") {
        setCurrentUser(e.payload.data);
      } else {
        setCurrentUser(undefined);
      }
    });
    
    const updateUser = async () => {
      //get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setCustomUUID(userInfo.attributes['custom:UUID']);
      if (userInfo) {
        //check if user already exist in database
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        //console.log("aa", userInfo);
        if(customUUID !== mac){
          const user = await Auth.currentAuthenticatedUser();
          const response = await Auth.updateUserAttributes(user, {
            'custom:UUID': `${mac}`,
          });
          console.log("update user", response);
        }
        if (!userData.data.getUser){
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.attributes.name,
            email: userInfo.attributes.email,
            profilePhoto: getRandomPhoto(),
          }
          await saveUserToDB(user);
        } else {
          console.log("User already exists")
        }
      }
      //if doesn't, create the user in the database
    }
    getMac();
    updateUser();
    //startAdv();
  }, [customUUID]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <DismissKeyboard>
        <SafeAreaProvider>
          <Provider store={store}>
            {currentUser ? (
              <Navigation colorScheme={colorScheme} />
            ) : (
              <Login colorScheme={colorScheme} />
            )}
            <StatusBar />
          </Provider>
        </SafeAreaProvider>
      </DismissKeyboard>
    );
  }
}

export default App;
