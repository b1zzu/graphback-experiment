import gql from "graphql-tag";

export const ActivityFragment = gql`
  fragment ActivityFields on Activity {
    id
    name
    description
    date
    place
  }
`;
