import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./styles";

import ProfilePicture from "../ProfilePicture";
import { useSelector } from "react-redux";

const StoryFeed = () => {
  const currentUser = useSelector((state: any) => state.profile.currentUser);

  const matches = useSelector((state: any) => state.profile.matches);

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    if(currentUser.profilePhoto != undefined){
      setIsLoading(false);
    }
  }, [currentUser.profilePhoto]);

  return(
    <View style={styles.container}>
    <View style={styles.topContainer}>
      <FlatList
        contentContainerStyle={styles.topFlatList}
        horizontal
        data={matches}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.stories}>
              <ProfilePicture
                size={67}
                borderRadius={67}
                borderWidth={2}
                borderColor={"white"}
                image={item.user.profilePhoto}
              />
            </View>
            <Text style={styles.nameText}>{item.user.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.stories}>
            {isLoading ? (
              <ActivityIndicator size="large" color="black" />
              ) : (
              <ProfilePicture
                size={67}
                borderRadius={67}
                borderWidth={2}
                borderColor={"white"}
                image={currentUser.profilePhoto}
              />
              )}
            </View>
            <Text style={styles.nameText}>{"Sen"}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
  );
};

export default StoryFeed;
