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
            <View style={styles.stories}>
              <ProfilePicture
                size={67}
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
                borderWidth={2}
                borderColor={"white"}
                image={
                  "https://instagram.fist13-1.fna.fbcdn.net/v/t51.2885-19/317881261_514954124010496_344328476115875096_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SFswZBGNhzAAX8bc908&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDT_IiZLLSqKq_gDlbhsen9BBlAFchs3lRdWRrtJJDxpg&oe=639A14AF&_nc_sid=1527a3"
                }
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
