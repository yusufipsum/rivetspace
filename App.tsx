import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation/index";
import Login from "./src/navigation/login";

import { Amplify, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";

Amplify.configure(awsconfig);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Hub.listen("auth", (e) => {
      if (e.payload.event == "signIn") {
        console.log("auth event", e.payload.event);
        setCurrentUser(e.payload.data);
      } else {
        setCurrentUser(undefined);
      }
    });
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
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
      </>
    );
  }
}

export default App;
