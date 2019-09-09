import gql from "graphql-tag";
import { ParticipateInputFragment } from "../fragments/ParticipateInput";

export const findAllParticipateInputs = gql`
  query findAllParticipateInputs {
    findAllParticipateInputs {
      ...ParticipateInputFields
    }
  }

  ${ParticipateInputFragment}
`;
