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
      biography
      profilePhoto
      color
      posts {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
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
      biography
      profilePhoto
      color
      posts {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
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
      biography
      profilePhoto
      color
      posts {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
          userPostsId
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
        biography
        profilePhoto
        color
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
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
        biography
        profilePhoto
        color
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
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
        biography
        profilePhoto
        color
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
