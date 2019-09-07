import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  input UserInput {
    name: String!
  }

  input UserFilter {
    id: ID
    name: String
  }

  type Query {
    findUsers(fields: UserFilter!): [User!]!
    findAllUsers: [User!]!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID!, input: UserInput!): User!
  }
`;
