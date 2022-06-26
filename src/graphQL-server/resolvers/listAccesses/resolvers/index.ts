// import { Mutation } from "./mutation";
import { Query } from "./query";
import { Mutation } from "./mutation";
import {TypeResolvers } from "./types"
import { Subscription } from "./subscription";
export const resolvers = {
    Mutation,
    Query,
    ...TypeResolvers,
    Subscription,

    // Mutation,
}