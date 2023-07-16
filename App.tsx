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

Amplify.configure(awsconfig);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Hub.listen("auth", (e) => {
      if (e.payload.event == "signIn") {
        setCurrentUser(e.payload.data);
      } else {
        setCurrentUser(undefined);
      }
    });
  });

  const getRandomPhoto = () => {
    return 'https://cdn-icons-png.flaticon.com/512/666/666201.png'
  }

  const saveUserToDB = async (user: any) => {
    
    await API.graphql(graphqlOperation(createUser, { input: user}));
    console.log("sadfsdafsad", user);
  }

  useEffect(() => {
    const updateUser = async () => {
      //get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if(userInfo) {
        //check if user already exist in database
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        console.log("aa", userInfo);
        if(!userData.data.getUser){
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
    updateUser();
  }, [])

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
