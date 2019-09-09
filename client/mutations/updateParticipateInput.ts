import gql from "graphql-tag";
import { ParticipateInputFragment } from "../fragments/ParticipateInput";

export const updateParticipateInput = gql`
  mutation updateParticipateInput($id: ID!, activityId: undefined!, userId: undefined!) {
    updateParticipateInput(id: $id, input: {activityId: $activityId, userId: $userId}) {4
      ...ParticipateInputFields
    }
  }

  ${ParticipateInputFragment}
`;
