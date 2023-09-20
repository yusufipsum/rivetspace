import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ForgotPassword: undefined;
  ConfirmSignIn: undefined;
  Login: undefined;
  Modal: undefined;
  NewMessage: undefined;
  NewPost: undefined;
  NotFound: undefined;
  Profile: undefined;
  ProfileEdit: undefined;
  SignIn: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Nearby: undefined;
  NewPostButton: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type UserType = {
  id: string;
  name: string;
  username: string;
  userName: string;
  socialScore?: number;
  profilePhoto?: string;
  photos?: object;
  biography?: string;
  color?: string;
};

export type ProfileType = {
  id: string;
  user: UserType;
};

export type PostType = {
  id: string;
  createdAt: string;
  user: UserType;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfLikes?: number;
  numberOfDislikes?: number;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
