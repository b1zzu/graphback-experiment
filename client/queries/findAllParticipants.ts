import gql from "graphql-tag";
import { ParticipantFragment } from "../fragments/Participant";

export const findAllParticipants = gql`
  query findAllParticipants {
    findAllParticipants {
      ...ParticipantFields
    }
  }

  ${ParticipantFragment}
`;
