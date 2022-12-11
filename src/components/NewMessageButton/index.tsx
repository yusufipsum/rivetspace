import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

const NewMessage = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewMessage");
  };

  return (
    <TouchableOpacity>
      <Entypo
        name="new-message"
        color={"black"}
        onPress={onPress}
        size={20}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      />
    </TouchableOpacity>
  );
};

export default NewMessage;
