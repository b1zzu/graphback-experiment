import gql from "graphql-tag";
import { ActivityFragment } from "../fragments/Activity";

export const createActivity = gql`
  mutation createActivity(id: ID!, name: String!, description: String, date: String!, place: String!) {
    createActivity(input: {name: $name, description: $description, date: $date, place: $place}) {
      ...ActivityFields
    }
  }

  ${ActivityFragment}
`;
