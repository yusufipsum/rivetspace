import React, { useEffect } from "react";
import { View, FlatList, Pressable } from "react-native";

import styles from "./styles";

import NearbyProfile from "../NearbyProfile";
import NearbyTopInfo from "../NearbyTopInfo";
import { useSelector } from "react-redux";
import Background from "../Backgrounds";

const NearbyFeed = () => {
  const profilesData = useSelector((state: any) => state.profile.allProfiles);
  const MACsData = useSelector((state: any) => state.profile.allMACs);
  const allProfiles = profilesData.reduce((acc, inner) => {
    return acc.concat(inner);
  },[]);
  console.log("BUNLAR BOYLE: ", allProfiles)
  const allMACs = MACsData.reduce((acc, inner) => {
    return acc.concat(inner);
  },[]);
  console.log("MACLAR BOYLE: ", MACsData)

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

  const matches = profiles.filter(profile => {
    const matched = allMACs.filter(device => device.mac === profile.id);
    return matched.length > 0;
  });
  console.log("Eşleşenler: ", matches);

  console.log(profiles);
 
  return (
    <View style={styles.container}>
      <NearbyTopInfo />
      <Background color="#def2fa" />
      <FlatList
        data={matches}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable style={{flex: 1}}>
            <NearbyProfile key={item.id} profiles={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NearbyFeed;
