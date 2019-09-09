import { GraphQLContext } from "../../context";

export const commentResolvers = {
  Comment: {
    user: async (parent: any, _: any, context: GraphQLContext) => {
      const result = await context.db
        .select()
        .from("user")
        .where("id", "=", parent.userId);
      return result[0];
    },
    activity: async (parent: any, _: any, context: GraphQLContext) => {
      const result = await context.db
        .select()
        .from("activity")
        .where("id", "=", parent.activityId);
      return result[0];
    },
    answers: (parent: any, _: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("commentanswer")
        .where("commentId", "=", parent.id);
    }
  },

  Query: {
    findComments: (_: any, args: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("comment")
        .where(args.fields);
    },
    findAllComments: (_: any, __: any, context: GraphQLContext) => {
      return context.db.select().from("comment");
    }
  },

  Mutation: {
    createComment: async (_: any, args: any, context: GraphQLContext) => {
      const result = await context
        .db("comment")
        .insert(args.input)
        .returning("*");
      return result[0];
    },
    updateComment: (_: any, args: any, context: GraphQLContext) => {
      return context
        .db("comment")
        .where("id", "=", args.id)
        .update(args.input)
        .then(async () => {
          const result = await context.db
            .select()
            .from("comment")
            .where("id", "=", args.id);
          return result[0];
        });
    }
  }
};
