import gql from "graphql-tag";
import { CommentFragment } from "../fragments/Comment";

export const updateComment = gql`
  mutation updateComment($id: ID!, text: String!) {
    updateComment(id: $id, input: {text: $text}) {4
      ...CommentFields
    }
  }

  ${CommentFragment}
`;
