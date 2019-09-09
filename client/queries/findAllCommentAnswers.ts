import gql from "graphql-tag";
import { CommentAnswerFragment } from "../fragments/CommentAnswer";

export const findAllCommentAnswers = gql`
  query findAllCommentAnswers {
    findAllCommentAnswers {
      ...CommentAnswerFields
    }
  }

  ${CommentAnswerFragment}
`;
