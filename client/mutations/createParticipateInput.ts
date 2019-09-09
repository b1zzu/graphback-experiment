import gql from "graphql-tag";
import { ParticipateInputFragment } from "../fragments/ParticipateInput";

export const createParticipateInput = gql`
  mutation createParticipateInput(activityId: undefined!, userId: undefined!) {
    createParticipateInput(input: {activityId: $activityId, userId: $userId}) {
      ...ParticipateInputFields
    }
  }

  ${ParticipateInputFragment}
`;
