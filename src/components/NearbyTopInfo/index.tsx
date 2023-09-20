import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./styles";

import ProfilePicture from "../ProfilePicture";
import { useSelector } from "react-redux";

const NearbyTopInfo = () => {
  const data = useSelector((state: any) => state.profile.allProfiles);
  const allProfiles = data.reduce((acc, inner) => {
    return acc.concat(inner);
  },[]);

  function filter(allProfiles: any) {
    const profiles = new Set();

    return allProfiles.filter((item: any) => {
      if (profiles.has(item.id)) {
        return false; // Aynı objeyi daha önce ekledik, bu objeyi filtrele
      }
      profiles.add(item.id);
      return true; // Objeyi benzersiz olarak kabul et ve yeni dizide sakla
    });
  }

  const profiles = filter(allProfiles);

  const rest = profiles.length;
  const lastProfile = profiles.slice(0, 1); //4,5

  if(rest < 5){
    return (
      <View style={styles.topContainer}>
        <FlatList
          contentContainerStyle={styles.topFlatList}
          horizontal
          scrollEnabled={false}
          data={profiles}
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
          Ortamında <Text style={{ fontWeight: "bold" }}>{profiles.length}</Text>{" "}
          aktif kullanıcı bulunuyor
        </Text>
      </View>
    )
  } else if(rest < 1){
    return (
      <View style={styles.topContainer}>
        <Text style={styles.text}>
          Ortamında uygulamayı kullanan kimse yok, büyümemiz için bize yardım et!
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
          data={profiles.slice(0, 4)}
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
          Ortamında <Text style={{ fontWeight: "bold" }}>{profiles.length}</Text>{" "}
          aktif kullanıcı bulunuyor
        </Text>
      </View>
    )
  }
};

export default NearbyTopInfo;
