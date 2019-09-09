import gql from "graphql-tag";
import { ActivityFragment } from "../fragments/Activity";

export const findAllActivitys = gql`
  query findAllActivitys {
    findAllActivitys {
      ...ActivityFields
    }
  }

  ${ActivityFragment}
`;
