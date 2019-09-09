import gql from "graphql-tag";
import { ParticipantFragment } from "../fragments/Participant";

export const updateParticipant = gql`
  mutation updateParticipant($id: ID!, ) {
    updateParticipant(id: $id, input: {}) {4
      ...ParticipantFields
    }
  }

  ${ParticipantFragment}
`;
