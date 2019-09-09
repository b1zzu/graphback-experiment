import gql from "graphql-tag";
import { CommentAnswerFragment } from "../fragments/CommentAnswer";

export const createCommentAnswer = gql`
  mutation createCommentAnswer(id: ID!, text: String!) {
    createCommentAnswer(input: {text: $text}) {
      ...CommentAnswerFields
    }
  }

  ${CommentAnswerFragment}
`;
