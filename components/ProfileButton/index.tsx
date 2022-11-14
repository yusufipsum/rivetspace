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
          "https://instagram.fada1-14.fna.fbcdn.net/v/t51.2885-19/302715394_590710095862488_8705732755495836892_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-14.fna.fbcdn.net&_nc_cat=100&_nc_ohc=j2fW7PUZHzwAX_cBg7H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDGDPnaIkYNew1IXIf74t-ZltQxOB36Uq4TZT9XRo_Vyw&oe=636E8ADC&_nc_sid=1527a3"
        }
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;
