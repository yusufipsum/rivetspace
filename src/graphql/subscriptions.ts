/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      userName
      name
      email
      uuid
      biography
      profilePhoto
      color
      roomID
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      userName
      name
      email
      uuid
      biography
      profilePhoto
      color
      roomID
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      userName
      name
      email
      uuid
      biography
      profilePhoto
      color
      roomID
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
