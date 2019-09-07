import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    name: String!
  }

  input UserInput {
    name: String!
  }

  input UserFilter {
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
