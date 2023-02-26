import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

import styles from "./styles";

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
            <View style={styles.stories}>
              <ProfilePicture
                size={67}
                borderRadius={67}
                borderWidth={2}
                borderColor={"white"}
                image={item.user.image}
              />
            </View>
            <Text style={styles.nameText}>{item.user.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.stories}>
              <ProfilePicture
                size={67}
                borderRadius={67}
                borderWidth={2}
                borderColor={"white"}
                image={"https://cdn-icons-png.flaticon.com/512/666/666201.png"}
              />
            </View>
            <Text style={styles.nameText}>{"Hikayen"}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
);

export default StoryFeed;
