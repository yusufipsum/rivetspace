import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./styles.ts";

import profiles from "../../data/profiles";
import NearbyProfile from "../NearbyProfile";
import ProfilePicture from "../ProfilePicture";

const NearbyFeed = () => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <FlatList
        contentContainerStyle={styles.topFlatList}
        horizontal
        scrollEnabled={false}
        data={profiles.slice(0, 5)}
        renderItem={({ item }) => (
          <ProfilePicture
            marginRight={-10}
            marginLeft={-10}
            image={item.user.image}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.text}>
        Ortamında {profiles.length} aktif kullanıcı bulunuyor
      </Text>
    </View>
    <FlatList
      data={profiles}
      renderItem={({ item }) => <NearbyProfile profiles={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default NearbyFeed;
