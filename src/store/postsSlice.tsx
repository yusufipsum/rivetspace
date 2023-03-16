import { createSlice } from "@reduxjs/toolkit";
import posts from "../data/posts";

const initialState = { posts: posts, likedPosts: [], dislikedPosts: [] };

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    up: (state, action) => {
      const { postId, like } = action.payload;
      const post = state.posts.find((currentPost) => currentPost.id === postId);
      const likedPost = state.likedPosts;
      const dislikedPost = state.dislikedPosts;
      const checkLikedPost = likedPost.includes(postId);
      const checkDislikedPost = dislikedPost.includes(postId);

      if (post && !checkLikedPost && !checkDislikedPost) {
        post.numberOfLikes += like;
        state.likedPosts.push(postId);
      } else if (post && !checkLikedPost && checkDislikedPost) {
        post.numberOfLikes += like;
        post.numberOfDislikes += like;
        state.likedPosts.push(postId);
        let index = state.dislikedPosts.indexOf(postId);
        delete state.dislikedPosts[index];
      } else if (post && checkLikedPost) {
        post.numberOfLikes -= like;
        let index = state.likedPosts.indexOf(postId);
        delete state.likedPosts[index];
      }
    },

    down: (state, action) => {
      const { postId, dislike } = action.payload;
      const post = state.posts.find((currentPost) => currentPost.id === postId);
      const dislikedPost = state.dislikedPosts;
      const likedPost = state.likedPosts;
      const checkDislikedPost = dislikedPost.includes(postId);
      const checkLikedPost = likedPost.includes(postId);

      if (post && !checkDislikedPost && !checkLikedPost) {
        post.numberOfDislikes += dislike;
        state.dislikedPosts.push(postId);
      } else if (post && !checkDislikedPost && checkLikedPost) {
        post.numberOfDislikes += dislike;
        post.numberOfLikes += dislike;
        state.dislikedPosts.push(postId);
        let index = state.likedPosts.indexOf(postId);
        delete state.likedPosts[index];
      } else if (post && checkDislikedPost) {
        post.numberOfDislikes -= dislike;
        let index = state.dislikedPosts.indexOf(postId);
        delete state.dislikedPosts[index];
      }
    },
  },
});
