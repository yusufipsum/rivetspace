import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";

import Background from "../Backgrounds";
import FriendProfile from "../FriendProfile";
import profiles from "../../data/profiles";
import { useSelector } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { listFriends, listUsers } from "../../graphql/queries";
import { useAppDispatch } from "../../store";
import { profileSlice } from "../../store/profileSlice";

const FriendsFeed = () => {
  const currentUser = useSelector((state: any) => state.profile.currentUser);
  const matches = useSelector((state: any) => state.profile.matches);
  const [data, setData] = useState([]);
  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback( async () => {
    const friends = await API.graphql(graphqlOperation(listFriends, { filter: { userID: { eq: currentUser.sub } } }));
    setData(friends.data.listFriends.items);
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
  }, []);

  useEffect(() => {
    onRefresh();
  }, [matches]);
  
  return (
  <View style={{ width: "100%", flex: 1 }}>
    <Background color="#def2fa" />
    <FlatList
      contentContainerStyle={{gap: -10}}
      data={data}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => <FriendProfile profiles={item} refresh={onRefresh} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  </View>
)};

export default FriendsFeed;
