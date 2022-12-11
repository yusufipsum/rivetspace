import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  FontAwesome,
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { ProfileButton, NewMessageButton, NewPostButton } from "../components";

import {
  FriendsScreen,
  HomeScreen,
  LoginScreen,
  MessagesScreen,
  NearbyScreen,
  NewPostScreen,
  NotificationsScreen,
  ProfileScreen,
  ProfileEditScreen,
  SignInScreen,
} from "../screens";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewMessage"
        component={FriendsScreen}
        options={{ headerTitle: "Yeni Mesaj", headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "pageSheet",
        }}
      >
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Ana Sayfa",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={25} />
          ),
          /*{ headerRight: () => (
           <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>}
          ),*/
        })}
      />
      <Tab.Screen
        name="Nearby"
        component={NearbyScreen}
        options={{
          title: "Ortam",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewPostButton"
        component={NewPostScreen}
        options={{
          title: "Yeni",
          headerShown: false,
          tabBarIcon: ({ color }) => <NewPostButton />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: "Bildirimler",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bell" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: "Mesajlar",
          tabBarIcon: ({ color }) => (
            <Feather name="mail" color={color} size={25} />
          ),
          headerRight: ({ color }) => <NewMessageButton />,
        }}
      />
    </Tab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
