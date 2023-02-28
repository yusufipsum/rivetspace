import { createSlice } from "@reduxjs/toolkit";
import posts from "../data/posts";

const initialState = { posts: posts };

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    up: (state, action) => {
      const { postId, numberOfLikes } = action.payload;
      const post = state.posts.find((currentPost) => currentPost.id === postId);

      if (post) {
        post.numberOfLikes += numberOfLikes;
      }
    },
    down: (state, action) => {
      const { postId, numberOfUnlikes } = action.payload;
      const post = state.posts.find((currentPost) => currentPost.id === postId);

      if (post) {
        post.numberOfUnlikes += numberOfUnlikes;
      }
    },
  },
});
