import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./styles.ts";

import profiles from "../../data/profiles";
import ProfilePicture from "../ProfilePicture";

const rest = profiles.length - 4;
const lastProfile = profiles.slice(4,5);

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
        <View style={styles.images}>
          <Image
            resizeMode="cover"
            style={styles.lastImage}
            blurRadius={7}
            source={{
              uri: `${lastProfile[0].user.image}`,
            }}
          />
          <Text style={styles.restText}>+{rest}</Text>
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
