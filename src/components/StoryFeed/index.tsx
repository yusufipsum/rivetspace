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
                  "https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/322471732_1277548349458457_1573710981679399978_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fMv8qzpJFpoAX9yB7W3&_nc_ht=scontent.fist13-1.fna&oh=00_AfCkiTxrul4qEohnGFU9u1-fjYnATgHsFHDR12U2LqnhlQ&oe=63D2FC76"
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
