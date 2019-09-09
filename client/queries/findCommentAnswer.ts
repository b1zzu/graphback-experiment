import gql from "graphql-tag";
import { CommentAnswerFragment } from "../fragments/CommentAnswer";

export const findCommentAnswer = gql`
  query findCommentAnswer(id: ID!, text: String!) {
    findCommentAnswer(fields: {id: $id, text: $text}) {
      ...CommentAnswerFields
    }
  }

  ${CommentAnswerFragment}
`;
