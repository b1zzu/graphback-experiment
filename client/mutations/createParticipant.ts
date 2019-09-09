import gql from "graphql-tag";
import { ParticipantFragment } from "../fragments/Participant";

export const createParticipant = gql`
  mutation createParticipant(id: ID!) {
    createParticipant(input: {}) {
      ...ParticipantFields
    }
  }

  ${ParticipantFragment}
`;
