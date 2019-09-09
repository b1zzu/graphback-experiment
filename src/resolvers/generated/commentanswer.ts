import { GraphQLContext } from "../../context";

export const commentanswerResolvers = {
  CommentAnswer: {
    user: async (parent: any, _: any, context: GraphQLContext) => {
      const result = await context.db
        .select()
        .from("user")
        .where("id", "=", parent.userId);
      return result[0];
    },
    comment: async (parent: any, _: any, context: GraphQLContext) => {
      const result = await context.db
        .select()
        .from("comment")
        .where("id", "=", parent.commentId);
      return result[0];
    }
  },

  Query: {
    findCommentAnswers: (_: any, args: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("commentanswer")
        .where(args.fields);
    },
    findAllCommentAnswers: (_: any, __: any, context: GraphQLContext) => {
      return context.db.select().from("commentanswer");
    }
  },

  Mutation: {
    createCommentAnswer: async (_: any, args: any, context: GraphQLContext) => {
      const result = await context
        .db("commentanswer")
        .insert(args.input)
        .returning("*");
      return result[0];
    },
    updateCommentAnswer: (_: any, args: any, context: GraphQLContext) => {
      return context
        .db("commentanswer")
        .where("id", "=", args.id)
        .update(args.input)
        .then(async () => {
          const result = await context.db
            .select()
            .from("commentanswer")
            .where("id", "=", args.id);
          return result[0];
        });
    }
  }
};
