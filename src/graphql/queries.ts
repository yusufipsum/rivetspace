/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      name
      email
      uuid
      biography
      profilePhoto
      color
      roomID
      pushNToken
      friends {
        items {
          id
          userID
          friendID
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        name
        email
        uuid
        biography
        profilePhoto
        color
        roomID
        pushNToken
        friends {
          nextToken
        }
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      image
      userID
      user {
        id
        userName
        name
        email
        uuid
        biography
        profilePhoto
        color
        roomID
        pushNToken
        friends {
          nextToken
        }
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        image
        userID
        user {
          id
          userName
          name
          email
          uuid
          biography
          profilePhoto
          color
          roomID
          pushNToken
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postsByIdAndUserID = /* GraphQL */ `
  query PostsByIdAndUserID(
    $id: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByIdAndUserID(
      id: $id
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        image
        userID
        user {
          id
          userName
          name
          email
          uuid
          biography
          profilePhoto
          color
          roomID
          pushNToken
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likesByIdAndPostIDAndUserID = /* GraphQL */ `
  query LikesByIdAndPostIDAndUserID(
    $id: ID!
    $postIDUserID: ModelLikeByPostCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByIdAndPostIDAndUserID(
      id: $id
      postIDUserID: $postIDUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        user {
          id
          userName
          name
          email
          uuid
          biography
          profilePhoto
          color
          roomID
          pushNToken
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likesByIdAndUserIDAndPostID = /* GraphQL */ `
  query LikesByIdAndUserIDAndPostID(
    $id: ID!
    $userIDPostID: ModelLikeByUserCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByIdAndUserIDAndPostID(
      id: $id
      userIDPostID: $userIDPostID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        user {
          id
          userName
          name
          email
          uuid
          biography
          profilePhoto
          color
          roomID
          pushNToken
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriend = /* GraphQL */ `
  query GetFriend($id: ID!) {
    getFriend(id: $id) {
      id
      userID
      friendID
      user {
        id
        userName
        name
        email
        uuid
        biography
        profilePhoto
        color
        roomID
        pushNToken
        friends {
          nextToken
        }
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        friendID
        user {
          id
          userName
          name
          email
          uuid
          biography
          profilePhoto
          color
          roomID
          pushNToken
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const friendsByIdAndFriendID = /* GraphQL */ `
  query FriendsByIdAndFriendID(
    $id: ID!
    $friendID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendsByIdAndFriendID(
      id: $id
      friendID: $friendID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        friendID
        user {
          id
          userName
          name
          email
          uuid
          biography
          profilePhoto
          color
          roomID
          pushNToken
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
