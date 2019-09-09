import { GraphQLContext } from "../../context";

export const participantResolvers = {
  Participant: {
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
    }
  }
};
