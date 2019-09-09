import gql from "graphql-tag";
import { CommentAnswerFragment } from "../fragments/CommentAnswer";

export const updateCommentAnswer = gql`
  mutation updateCommentAnswer($id: ID!, text: String!) {
    updateCommentAnswer(id: $id, input: {text: $text}) {4
      ...CommentAnswerFields
    }
  }

  ${CommentAnswerFragment}
`;
