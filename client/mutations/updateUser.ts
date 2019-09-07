import gql from "graphql-tag";
import { UserFragment } from "../fragments/User";

export const updateUser = gql`
  mutation updateUser($id: ID!, name: String!) {
    updateUser(id: $id, input: {name: $name}) {4
      ...UserFields
    }
  }

  ${UserFragment}
`;
