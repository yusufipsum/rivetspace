import React, { useEffect, useState } from "react";
import { View, FlatList, Pressable } from "react-native";

import styles from "./styles";

import NearbyProfile from "../NearbyProfile";
import NearbyTopInfo from "../NearbyTopInfo";
import { useSelector } from "react-redux";
import Background from "../Backgrounds";
import { API, graphqlOperation } from "aws-amplify";
import { createFriend } from "../../graphql/mutations";
import { getFriend, listFriends } from "../../graphql/queries";
import { useAppDispatch } from "../../store";
import { profileSlice } from "../../store/profileSlice";

const NearbyFeed = () => {
  const matches = useSelector((state: any) => state.profile.matches);
  const currentUser = useSelector((state: any) => state.profile.currentUser);
  console.log("DATA CHECK:: ", matches);

  const addToFriends = async () => {
    try {
      console.log("asdasd" ,currentUser.sub);
      if (matches.length > 0) {
        for (let i = 0; i < matches.length; i++) {
          const user = matches[i].user.id;
          
          try {
            const existingFriendResponse = await API.graphql(graphqlOperation(listFriends, {
              filter: {
                and: [
                  { userID: { eq: currentUser.sub } },
                  { friendID: { eq: user } }
                ]
              }
            }));
            const existingFriend = existingFriendResponse.data.listFriends.items;
            console.log("existingFriend: ", existingFriend);
            if (existingFriend.length === 0) {
              const currentUserFriend = {
                userID: currentUser.sub,
                friendID: user
              };
              const userFriend = {
                userID: user,
                friendID: currentUser.sub
              };
              await API.graphql(graphqlOperation(createFriend, {input: currentUserFriend}));
              await API.graphql(graphqlOperation(createFriend, {input: userFriend}));
              console.log("FİLTERR ", friend);
            }
          } catch (error) {
            console.log("Error fetching friend: ", error);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };  

  useEffect(() => {
    addToFriends();
  }, [matches]);

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
