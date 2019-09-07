import gql from "graphql-tag";
import { UserFragment } from "../fragments/User";

export const findUser = gql`
  query findUser(id: ID!, name: String!) {
    findUser(fields: {id: $id, name: $name}) {
      ...UserFields
    }
  }

  ${UserFragment}
`;
