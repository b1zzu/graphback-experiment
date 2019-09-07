import gql from "graphql-tag";
import { UserFragment } from "../fragments/User";

export const createUser = gql`
  mutation createUser(id: ID!, name: String!) {
    createUser(input: {name: $name}) {
      ...UserFields
    }
  }

  ${UserFragment}
`;
