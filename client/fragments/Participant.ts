import gql from "graphql-tag";

export const ParticipantFragment = gql`
  fragment ParticipantFields on Participant {
    id
  }
`;
