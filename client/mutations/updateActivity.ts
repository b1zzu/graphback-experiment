import gql from "graphql-tag";
import { ActivityFragment } from "../fragments/Activity";

export const updateActivity = gql`
  mutation updateActivity($id: ID!, name: String!, description: String, date: String!, place: String!) {
    updateActivity(id: $id, input: {name: $name, description: $description, date: $date, place: $place}) {4
      ...ActivityFields
    }
  }

  ${ActivityFragment}
`;
