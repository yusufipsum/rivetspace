/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
      postID
      post {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
      postID
      post {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
      postID
      post {
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
      createdAt
      updatedAt
    }
  }
`;
export const createFriend = /* GraphQL */ `
  mutation CreateFriend(
    $input: CreateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    createFriend(input: $input, condition: $condition) {
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
export const updateFriend = /* GraphQL */ `
  mutation UpdateFriend(
    $input: UpdateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    updateFriend(input: $input, condition: $condition) {
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
export const deleteFriend = /* GraphQL */ `
  mutation DeleteFriend(
    $input: DeleteFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    deleteFriend(input: $input, condition: $condition) {
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
