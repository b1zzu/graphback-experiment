import { activityResolvers } from "./generated/activity";
import { commentResolvers } from "./generated/comment";
import { commentanswerResolvers } from "./generated/commentanswer";
import { participantResolvers } from "./generated/participant";
import { userResolvers } from "./generated/user";

import { customResolvers } from "./custom";

export const resolvers = [
  activityResolvers,
  commentResolvers,
  commentanswerResolvers,
  participantResolvers,
  userResolvers,
  ...customResolvers
];
