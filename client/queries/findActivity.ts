import gql from "graphql-tag";
import { ActivityFragment } from "../fragments/Activity";

export const findActivity = gql`
  query findActivity(id: ID!, name: String!, description: String, date: String!, place: String!) {
    findActivity(fields: {id: $id, name: $name, description: $description, date: $date, place: $place}) {
      ...ActivityFields
    }
  }

  ${ActivityFragment}
`;
