import { GraphQLContext } from "../../context";

export const activityResolvers = {
  Activity: {
    user: async (parent: any, _: any, context: GraphQLContext) => {
      const result = await context.db
        .select()
        .from("user")
        .where("id", "=", parent.userId);
      return result[0];
    },
    participants: (parent: any, _: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("participant")
        .where("activityId", "=", parent.id);
    },
    comments: (parent: any, _: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("comment")
        .where("activityId", "=", parent.id);
    }
  },

  Query: {
    findActivitys: (_: any, args: any, context: GraphQLContext) => {
      return context.db
        .select()
        .from("activity")
        .where(args.fields);
    },
    findAllActivitys: (_: any, __: any, context: GraphQLContext) => {
      return context.db.select().from("activity");
    }
  },

  Mutation: {
    createActivity: async (_: any, args: any, context: GraphQLContext) => {
      const result = await context
        .db("activity")
        .insert(args.input)
        .returning("*");
      return result[0];
    },
    updateActivity: (_: any, args: any, context: GraphQLContext) => {
      return context
        .db("activity")
        .where("id", "=", args.id)
        .update(args.input)
        .then(async () => {
          const result = await context.db
            .select()
            .from("activity")
            .where("id", "=", args.id);
          return result[0];
        });
    }
  }
};
