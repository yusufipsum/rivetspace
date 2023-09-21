import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

import styles from "./styles";

import ProfilePicture from "../ProfilePicture";
import { useSelector } from "react-redux";

const StoryFeed = () => {
  const currentUser = useSelector((state: any) => state.profile.currentUser);

  const data = useSelector((state: any) => state.profile.allProfiles);
  const MACsData = useSelector((state: any) => state.profile.allMACs);

  const allProfiles = data.reduce((acc, inner) => {
    return acc.concat(inner);
  },[]);
  const allMACs = MACsData.reduce((acc, inner) => {
    return acc.concat(inner);
  },[]);
 
  function filter(allProfiles: any) {
    const profiles = new Set();

    return allProfiles.filter((item: any) => {
      if (profiles.has(item.id)) {
        return false; 
      }
      profiles.add(item.id);
      return true; 
    });
  }

  const profiles = filter(allProfiles);

  const matches = profiles.filter(profile => {
    const matched = allMACs.filter(device => device.mac === profile.id);
    return matched.length > 0;
  });
  console.log("Eşleşenler: ", matches);

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
              <ProfilePicture
                size={67}
                borderRadius={67}
                borderWidth={2}
                borderColor={"white"}
                image={currentUser.profilePhoto}
              />
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
