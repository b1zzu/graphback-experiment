import gql from "graphql-tag";
import { UserFragment } from "../fragments/User";

export const createUser = gql`
  mutation createUser(name: String!) {
    createUser(input: {name: $name}) {
      ...UserFields
    }
  }

  ${UserFragment}
`;
