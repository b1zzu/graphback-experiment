import gql from "graphql-tag";
import { ParticipateInputFragment } from "../fragments/ParticipateInput";

export const findParticipateInput = gql`
  query findParticipateInput(activityId: undefined!, userId: undefined!) {
    findParticipateInput(fields: {activityId: $activityId, userId: $userId}) {
      ...ParticipateInputFields
    }
  }

  ${ParticipateInputFragment}
`;
