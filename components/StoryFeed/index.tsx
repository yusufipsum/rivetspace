import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

import styles from "./styles.ts";

import profiles from "../../data/profiles";
import ProfilePicture from "../ProfilePicture";

const StoryFeed = () => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <FlatList
        contentContainerStyle={styles.topFlatList}
        horizontal
        data={profiles}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8}>
            <View style={{ alignItems: "center", marginLeft: 15 }}>
              <ProfilePicture
                size={67}
                borderWidth={3}
                borderColor={"#26a9e1"}
                image={item.user.image}
              />
              <Text style={{ marginTop: 3 }}>{item.user.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
);

export default StoryFeed;
