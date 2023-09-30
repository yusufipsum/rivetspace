import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./styles";

import ProfilePicture from "../ProfilePicture";
import { useSelector } from "react-redux";

const NearbyTopInfo = () => {
  const matches = useSelector((state: any) => state.profile.matches);

  const rest = matches.length;
  const lastProfile = matches.slice(0, 1); //4,5

  if(rest < 1){
    return (
      <View style={styles.topContainer}>
        <Text style={styles.text}>
          Etrafında hiç RivetSpace kullanıcısı yok, taramaya devam ediyoruz...
        </Text>
        <Text style={{ fontWeight: "bold", color: "#016894" }}>
          (Yaklaşık 30 saniye sürebilir.)
        </Text>
      </View>
    )
  } else if(rest < 5){
    return (
      <View style={styles.topContainer}>
        <FlatList
          contentContainerStyle={styles.topFlatList}
          horizontal
          scrollEnabled={false}
          data={matches}
          renderItem={({ item }) => (
            <ProfilePicture
              marginRight={-10}
              marginLeft={-10}
              borderRadius={50}
              size={50}
              image={item.user.profilePhoto}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.text}>
          Ortamında <Text style={{ fontWeight: "bold" }}>{matches.length}</Text>{" "}
          aktif kullanıcı bulunuyor
        </Text>
      </View>
    )
  } else {
    return (
      <View style={styles.topContainer}>
        <FlatList
          contentContainerStyle={styles.topFlatList}
          horizontal
          scrollEnabled={false}
          data={matches.slice(0, 4)}
          renderItem={({ item }) => (
            <ProfilePicture
              marginRight={-10}
              marginLeft={-10}
              borderRadius={50}
              size={50}
              image={item.user.profilePhoto}
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
                  uri: `${lastProfile[0].user.profilePhoto}`,
                }}
              />
              <Text style={styles.restText}>+{rest}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.text}>
          Ortamında <Text style={{ fontWeight: "bold" }}>{matches.length}</Text>{" "}
          aktif kullanıcı bulunuyor
        </Text>
      </View>
    )
  }
};

export default NearbyTopInfo;
