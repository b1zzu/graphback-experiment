import gql from "graphql-tag";
import { UserFragment } from "../fragments/User";

export const findUser = gql`
  query findUser(name: String!) {
    findUser(fields: {name: $name}) {
      ...UserFields
    }
  }

  ${UserFragment}
`;
