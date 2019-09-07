import gql from "graphql-tag";
import { UserFragment } from "../fragments/User";

export const findAllUsers = gql`
  query findAllUsers {
    findAllUsers {
      ...UserFields
    }
  }

  ${UserFragment}
`;
