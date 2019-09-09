import gql from "graphql-tag";

export const ParticipateInputFragment = gql`
  fragment ParticipateInputFields on ParticipateInput {
    activityId
    userId
  }
`;
