import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ProfilePicture from "../../components/ProfilePicture";

const ProfileButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Profile");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <ProfilePicture
        size={30}
        image={
          "https://instagram.fist13-1.fna.fbcdn.net/v/t51.2885-19/317881261_514954124010496_344328476115875096_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SFswZBGNhzAAX8bc908&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDT_IiZLLSqKq_gDlbhsen9BBlAFchs3lRdWRrtJJDxpg&oe=639A14AF&_nc_sid=1527a3"
        }
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;
