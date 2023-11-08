import React, { useEffect, useState } from "react";
import { View, FlatList, Pressable, Dimensions } from "react-native";

import Post from "../Post";

import { useSelector } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { getUser, listPosts } from '../../graphql/queries';

const windowWidth = Dimensions.get("window").width;

export type FeedProps = {
  isHome: boolean,
};

const Feed = ({ isHome }: FeedProps) => {
  const posts = useSelector((state: any) => state.posts.posts);

  const [data, setData] = useState([]);
  const user = useSelector((state: any) => state.profile.user);
  const currentUser = useSelector((state: any) => state.profile.currentUser);
  const isCurrentUser = useSelector((state: any) => state.profile.isCurrentUser);
  const matches = useSelector((state: any) => state.profile.matches);
  const fetchPosts = async () => {
    console.log("Evde ", isHome);
    if(isHome){
      try {
        const currentUserPostData = await API.graphql(graphqlOperation(listPosts, { filter: { userID: { eq: currentUser.sub } } }));
        let allPostData = [...currentUserPostData.data.listPosts.items]; 
        if(matches.length > 0){
          for (let i = 0; i < matches.length; i++) {
            const filter = {
                userID: {
                  eq: matches[i].user.id
                }
            };
            const postData = await API.graphql(graphqlOperation(listPosts, { filter: filter }));
            allPostData = [...allPostData, ...postData.data.listPosts.items];
            console.log("FİLTERR ", filter)
          }
        }
        allPostData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(allPostData);
      } catch (er) {
        console.log(er);
      }
    } else {
      console.log("değil misin amq");
      if(isCurrentUser){
        try {
          const currentUserPostData = await API.graphql(graphqlOperation(listPosts, { filter: { userID: { eq: currentUser.sub } } }));
          currentUserPostData.data.listPosts.items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setData(currentUserPostData.data.listPosts.items);
        } catch (er) {
          console.log(er);
        }
      } else {
        try {
          const userPostData = await API.graphql(graphqlOperation(listPosts, { filter: { userID: { eq: user.sub } } }));
          userPostData.data.listPosts.items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setData(userPostData.data.listPosts.items);
        } catch (er) {
          console.log(er);
        }
      }
    }
  }

  // const firstFetchPosts = async () => {
  //     try {
  //       const currentUserPostData = await API.graphql(graphqlOperation(listPosts, { filter: { userID: { eq: currentUser.sub } } }));
  //       currentUserPostData.data.listPosts.items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  //       setData(currentUserPostData.data.listPosts.items);
  //     } catch (er) {
  //       console.log(er);
  //     }
  // }

  useEffect(() => {
    fetchPosts(); //aslında sorunsuz çalışması lazım fakat ilk seferde tüm postları get ediyor?? refreshleyince düzeliyor.
    //firstFetchPosts(); // ayrı olarak first fetchte sadece current user gelsin diye eklemek istedim fakat hala ilk seferde düzgün çalışmıyor
  }, [])

  const refresh = () => {
    fetchPosts(); 
  };

  return (
    <View style={{ width: windowWidth, flex: 1}}>
      <FlatList
        data={data}
        renderItem={({ item }) => 
          <Pressable style={{flex: 1}}>
            <Post post={item} isHome={isHome} refresh={refresh} />
          </Pressable>
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
