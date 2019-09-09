import gql from "graphql-tag";

export const CommentAnswerFragment = gql`
  fragment CommentAnswerFields on CommentAnswer {
    id
    text
  }
`;
