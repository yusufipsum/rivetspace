import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { Text, View } from "../../components/Themed";

import { Entypo } from "@expo/vector-icons";

export default function MessagesScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewMessage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Henüz hiç sohbet yok!</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Arkadaşınla bir sohbet başlat</Text>
      <TouchableOpacity onPress={onPress}>
        <Entypo name="new-message" size={25} style={{ paddingTop: 7 }} />
      </TouchableOpacity>
    </View>
  );
}
