import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./styles.ts";

import profiles from "../../data/profiles";
import NearbyProfile from "../NearbyProfile";
import ProfilePicture from "../ProfilePicture";

const rest = profiles.length - 4;

const NearbyTopInfo = () => (
  <View style={styles.topContainer}>
    <FlatList
      contentContainerStyle={styles.topFlatList}
      horizontal
      scrollEnabled={false}
      data={profiles.slice(0, 4)}
      renderItem={({ item }) => (
        <ProfilePicture
          marginRight={-10}
          marginLeft={-10}
          image={item.user.image}
        />
      )}
      keyExtractor={(item) => item.id}
      ListFooterComponent={() => (
        <View
          style={{
            width: 50,
            height: 50,
            marginLeft: -10,
            marginRight: -10,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              justifyContent: "center",
              position: "absolute",
            }}
            blurRadius={7}
            source={{
              uri: "https://i.pinimg.com/736x/bf/f1/1d/bff11de83086515bdf280818ec8c3458.jpg",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            +{rest}
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
    <Text style={styles.text}>
      Ortamında <Text style={{ fontWeight: "bold" }}>{profiles.length}</Text>{" "}
      aktif kullanıcı bulunuyor
    </Text>
  </View>
);

export default NearbyTopInfo;
