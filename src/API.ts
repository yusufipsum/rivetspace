/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userName: string,
  name: string,
  email: string,
  uuid?: string | null,
  biography?: string | null,
  profilePhoto?: string | null,
  color?: string | null,
  roomID?: string | null,
  pushNToken?: string | null,
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  profilePhoto?: ModelStringInput | null,
  color?: ModelStringInput | null,
  roomID?: ModelStringInput | null,
  pushNToken?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  userName: string,
  name: string,
  email: string,
  uuid?: string | null,
  biography?: string | null,
  profilePhoto?: string | null,
  color?: string | null,
  roomID?: string | null,
  pushNToken?: string | null,
  friends?: ModelFriendConnection | null,
  posts?: ModelPostConnection | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFriendConnection = {
  __typename: "ModelFriendConnection",
  items:  Array<Friend | null >,
  nextToken?: string | null,
};

export type Friend = {
  __typename: "Friend",
  id: string,
  userID: string,
  friendID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  content: string,
  image?: string | null,
  userID: string,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  userID: string,
  user: User,
  postID: string,
  post: Post,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  userName?: string | null,
  name?: string | null,
  email?: string | null,
  uuid?: string | null,
  biography?: string | null,
  profilePhoto?: string | null,
  color?: string | null,
  roomID?: string | null,
  pushNToken?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  userID: string,
};

export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  userID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  postID: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateFriendInput = {
  id?: string | null,
  userID: string,
  friendID: string,
};

export type ModelFriendConditionInput = {
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  and?: Array< ModelFriendConditionInput | null > | null,
  or?: Array< ModelFriendConditionInput | null > | null,
  not?: ModelFriendConditionInput | null,
};

export type UpdateFriendInput = {
  id: string,
  userID?: string | null,
  friendID?: string | null,
};

export type DeleteFriendInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  profilePhoto?: ModelStringInput | null,
  color?: ModelStringInput | null,
  roomID?: ModelStringInput | null,
  pushNToken?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLikeByPostCompositeKeyConditionInput = {
  eq?: ModelLikeByPostCompositeKeyInput | null,
  le?: ModelLikeByPostCompositeKeyInput | null,
  lt?: ModelLikeByPostCompositeKeyInput | null,
  ge?: ModelLikeByPostCompositeKeyInput | null,
  gt?: ModelLikeByPostCompositeKeyInput | null,
  between?: Array< ModelLikeByPostCompositeKeyInput | null > | null,
  beginsWith?: ModelLikeByPostCompositeKeyInput | null,
};

export type ModelLikeByPostCompositeKeyInput = {
  postID?: string | null,
  userID?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelLikeByUserCompositeKeyConditionInput = {
  eq?: ModelLikeByUserCompositeKeyInput | null,
  le?: ModelLikeByUserCompositeKeyInput | null,
  lt?: ModelLikeByUserCompositeKeyInput | null,
  ge?: ModelLikeByUserCompositeKeyInput | null,
  gt?: ModelLikeByUserCompositeKeyInput | null,
  between?: Array< ModelLikeByUserCompositeKeyInput | null > | null,
  beginsWith?: ModelLikeByUserCompositeKeyInput | null,
};

export type ModelLikeByUserCompositeKeyInput = {
  userID?: string | null,
  postID?: string | null,
};

export type ModelFriendFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  friendID?: ModelIDInput | null,
  and?: Array< ModelFriendFilterInput | null > | null,
  or?: Array< ModelFriendFilterInput | null > | null,
  not?: ModelFriendFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userName?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  uuid?: ModelSubscriptionStringInput | null,
  biography?: ModelSubscriptionStringInput | null,
  profilePhoto?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  roomID?: ModelSubscriptionStringInput | null,
  pushNToken?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
};

export type ModelSubscriptionFriendFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  friendID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFriendFilterInput | null > | null,
  or?: Array< ModelSubscriptionFriendFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    email: string,
    uuid?: string | null,
    biography?: string | null,
    profilePhoto?: string | null,
    color?: string | null,
    roomID?: string | null,
    pushNToken?: string | null,
    friends?:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        userID: string,
        friendID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    email: string,
    uuid?: string | null,
    biography?: string | null,
    profilePhoto?: string | null,
    color?: string | null,
    roomID?: string | null,
    pushNToken?: string | null,
    friends?:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        userID: string,
        friendID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    email: string,
    uuid?: string | null,
    biography?: string | null,
    profilePhoto?: string | null,
    color?: string | null,
    roomID?: string | null,
    pushNToken?: string | null,
    friends?:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        userID: string,
        friendID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFriendMutationVariables = {
  input: CreateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type CreateFriendMutation = {
  createFriend?:  {
    __typename: "Friend",
    id: string,
    userID: string,
    friendID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFriendMutationVariables = {
  input: UpdateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type UpdateFriendMutation = {
  updateFriend?:  {
    __typename: "Friend",
    id: string,
    userID: string,
    friendID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFriendMutationVariables = {
  input: DeleteFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type DeleteFriendMutation = {
  deleteFriend?:  {
    __typename: "Friend",
    id: string,
    userID: string,
    friendID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    email: string,
    uuid?: string | null,
    biography?: string | null,
    profilePhoto?: string | null,
    color?: string | null,
    roomID?: string | null,
    pushNToken?: string | null,
    friends?:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        userID: string,
        friendID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByIdAndUserIDQueryVariables = {
  id: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByIdAndUserIDQuery = {
  postsByIdAndUserID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByIdAndPostIDAndUserIDQueryVariables = {
  id: string,
  postIDUserID?: ModelLikeByPostCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByIdAndPostIDAndUserIDQuery = {
  likesByIdAndPostIDAndUserID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByIdAndUserIDAndPostIDQueryVariables = {
  id: string,
  userIDPostID?: ModelLikeByUserCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByIdAndUserIDAndPostIDQuery = {
  likesByIdAndUserIDAndPostID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFriendQueryVariables = {
  id: string,
};

export type GetFriendQuery = {
  getFriend?:  {
    __typename: "Friend",
    id: string,
    userID: string,
    friendID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFriendsQueryVariables = {
  filter?: ModelFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendsQuery = {
  listFriends?:  {
    __typename: "ModelFriendConnection",
    items:  Array< {
      __typename: "Friend",
      id: string,
      userID: string,
      friendID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FriendsByIdAndFriendIDQueryVariables = {
  id: string,
  friendID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FriendsByIdAndFriendIDQuery = {
  friendsByIdAndFriendID?:  {
    __typename: "ModelFriendConnection",
    items:  Array< {
      __typename: "Friend",
      id: string,
      userID: string,
      friendID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    email: string,
    uuid?: string | null,
    biography?: string | null,
    profilePhoto?: string | null,
    color?: string | null,
    roomID?: string | null,
    pushNToken?: string | null,
    friends?:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        userID: string,
        friendID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    email: string,
    uuid?: string | null,
    biography?: string | null,
    profilePhoto?: string | null,
    color?: string | null,
    roomID?: string | null,
    pushNToken?: string | null,
    friends?:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        userID: string,
        friendID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userName: string,
    name: string,
    email: string,
    uuid?: string | null,
    biography?: string | null,
    profilePhoto?: string | null,
    color?: string | null,
    roomID?: string | null,
    pushNToken?: string | null,
    friends?:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        userID: string,
        friendID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        userName: string,
        name: string,
        email: string,
        uuid?: string | null,
        biography?: string | null,
        profilePhoto?: string | null,
        color?: string | null,
        roomID?: string | null,
        pushNToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFriendSubscriptionVariables = {
  filter?: ModelSubscriptionFriendFilterInput | null,
};

export type OnCreateFriendSubscription = {
  onCreateFriend?:  {
    __typename: "Friend",
    id: string,
    userID: string,
    friendID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFriendSubscriptionVariables = {
  filter?: ModelSubscriptionFriendFilterInput | null,
};

export type OnUpdateFriendSubscription = {
  onUpdateFriend?:  {
    __typename: "Friend",
    id: string,
    userID: string,
    friendID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFriendSubscriptionVariables = {
  filter?: ModelSubscriptionFriendFilterInput | null,
};

export type OnDeleteFriendSubscription = {
  onDeleteFriend?:  {
    __typename: "Friend",
    id: string,
    userID: string,
    friendID: string,
    user?:  {
      __typename: "User",
      id: string,
      userName: string,
      name: string,
      email: string,
      uuid?: string | null,
      biography?: string | null,
      profilePhoto?: string | null,
      color?: string | null,
      roomID?: string | null,
      pushNToken?: string | null,
      friends?:  {
        __typename: "ModelFriendConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
