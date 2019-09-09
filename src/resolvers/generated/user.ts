import { GraphQLContext } from "../../context";

export const userResolvers = {
  User: {
    activities: (parent: any, _: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("activity")
        .where("userId", "=", parent.id);
    },
    comments: (parent: any, _: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("comment")
        .where("userId", "=", parent.id);
    },
    commentAnswers: (parent: any, _: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("commentanswer")
        .where("userId", "=", parent.id);
    },
    participate: (parent: any, _: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("participant")
        .where("userId", "=", parent.id);
    }
  },

  Query: {
    findUsers: (_: any, args: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("user")
        .where(args.fields);
    },
    findAllUsers: (_: any, __: any, context: GraphQLContext) => {
      return context.db.select().from("user");
    }
  },

  Mutation: {
    createUser: async (_: any, args: any, context: GraphQLContext) => {
      const result = await context
        .db("user")
        .insert(args.input)
        .returning("*");
      return result[0];
    },
    updateUser: (_: any, args: any, context: GraphQLContext) => {
      return context
        .db("user")
        .where("id", "=", args.id)
        .update(args.input)
        .then(async () => {
          const result = await context.db
            .select()
            .from("user")
            .where("id", "=", args.id);
          return result[0];
        });
    }
  }
};
