import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    activities: [Activity!]
    comments: [Comment!]
    commentAnswers: [CommentAnswer!]
    participate: [Participant!]
  }

  type Participant {
    id: ID!
    user: User!
    activity: Activity!
  }

  type Activity {
    id: ID!
    name: String!
    description: String
    date: String!
    place: String!
    user: User!
    participants: [Participant!]
    comments: [Comment!]
  }

  type Comment {
    id: ID!
    text: String!
    user: User!
    activity: Activity!
    answers: [CommentAnswer!]
  }

  type CommentAnswer {
    id: ID!
    text: String!
    user: User!
    comment: Comment!
  }

  input UserInput {
    name: String!
  }

  input ParticipantInput {
    userId: ID!
    activityId: ID!
  }

  input ActivityInput {
    name: String!
    description: String
    date: String!
    place: String!
    userId: ID!
  }

  input CommentInput {
    text: String!
    userId: ID!
    activityId: ID!
  }

  input CommentAnswerInput {
    text: String!
    userId: ID!
    commentId: ID!
  }

  input UserFilter {
    id: ID
    name: String
  }

  input ParticipantFilter {
    id: ID
    userId: ID
    activityId: ID
  }

  input ActivityFilter {
    id: ID
    name: String
    description: String
    date: String
    place: String
    userId: ID
  }

  input CommentFilter {
    id: ID
    text: String
    userId: ID
    activityId: ID
  }

  input CommentAnswerFilter {
    id: ID
    text: String
    userId: ID
    commentId: ID
  }

  type Query {
    findUsers(fields: UserFilter!): [User!]!
    findActivitys(fields: ActivityFilter!): [Activity!]!
    findComments(fields: CommentFilter!): [Comment!]!
    findCommentAnswers(fields: CommentAnswerFilter!): [CommentAnswer!]!
    findAllUsers: [User!]!
    findAllActivitys: [Activity!]!
    findAllComments: [Comment!]!
    findAllCommentAnswers: [CommentAnswer!]!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    createActivity(input: ActivityInput!): Activity!
    createComment(input: CommentInput!): Comment!
    createCommentAnswer(input: CommentAnswerInput!): CommentAnswer!
    updateUser(id: ID!, input: UserInput!): User!
    updateActivity(id: ID!, input: ActivityInput!): Activity!
    updateComment(id: ID!, input: CommentInput!): Comment!
    updateCommentAnswer(id: ID!, input: CommentAnswerInput!): CommentAnswer!
    ## Custom mutations
    participateToActivity(activityId: ID!, userId: ID!): Activity!
  }
`;
