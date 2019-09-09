import gql from "graphql-tag";
import { ParticipantFragment } from "../fragments/Participant";

export const findParticipant = gql`
  query findParticipant(id: ID!) {
    findParticipant(fields: {id: $id}) {
      ...ParticipantFields
    }
  }

  ${ParticipantFragment}
`;
