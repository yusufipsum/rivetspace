import { createSlice } from "@reduxjs/toolkit";
import posts from "../data/posts";

const initialState = { posts: posts, likedPosts: [], unlikedPosts: [] };

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    up: (state, action) => {
      const { postId, like, style } = action.payload;
      const post = state.posts.find((currentPost) => currentPost.id === postId);
      const likedPost = state.likedPosts;
      const unlikedPost = state.unlikedPosts;
      const checkLikedPost = likedPost.includes(postId);
      const checkUnlikedPost = unlikedPost.includes(postId);

      if (post && !checkLikedPost && !checkUnlikedPost) {
        post.numberOfLikes += like;
        state.likedPosts.push(postId);
      } else if (post && !checkLikedPost && checkUnlikedPost) {
        post.numberOfLikes += like;
        post.numberOfUnlikes += like;
        state.likedPosts.push(postId);
        let index = state.unlikedPosts.indexOf(postId);
        delete state.unlikedPosts[index];
      } else if (post && checkLikedPost) {
        post.numberOfLikes -= like;
        let index = state.likedPosts.indexOf(postId);
        delete state.likedPosts[index];
      }
    },

    down: (state, action) => {
      const { postId, unlike, style } = action.payload;
      const post = state.posts.find((currentPost) => currentPost.id === postId);
      const unlikedPost = state.unlikedPosts;
      const likedPost = state.likedPosts;
      const checkUnlikedPost = unlikedPost.includes(postId);
      const checkLikedPost = likedPost.includes(postId);

      if (post && !checkUnlikedPost && !checkLikedPost) {
        post.numberOfUnlikes += unlike;
        state.unlikedPosts.push(postId);
      } else if (post && !checkUnlikedPost && checkLikedPost) {
        post.numberOfUnlikes += unlike;
        post.numberOfLikes += unlike;
        state.unlikedPosts.push(postId);
        let index = state.likedPosts.indexOf(postId);
        delete state.likedPosts[index];
      } else if (post && checkUnlikedPost) {
        post.numberOfUnlikes -= unlike;
        let index = state.unlikedPosts.indexOf(postId);
        delete state.unlikedPosts[index];
      }
    },
  },
});
