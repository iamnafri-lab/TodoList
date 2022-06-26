import dotenv from "dotenv";
dotenv.config();
import { GraphQLUpload, graphqlUploadExpress } from "graphql-upload";
const { gql, ApolloServer } = require("apollo-server-express");
import { PubSub } from "apollo-server";
export const pubsub = new PubSub();
import http from "http";
import express from "./../../node_modules/express";
import { users } from "./resolvers/users";

import cors from 'cors';

const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");

const dateAndTimeResolver = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
};
const upload={ 
  Upload:GraphQLUpload
}
const app = express();
const port = 3002;
console.log("port:", port);

const typeDef = gql`
  scalar Date
  scalar DateTime
  type Query
  # type Mutation
  # type Subscription
  # type SuccessResponse {
    # success: Boolean
  # }
`;

const resolvers = [
  // upload,
  // dateAndTimeResolver,
  users.resolvers,
];

const typeDefs: any = [
  typeDef,
  users.typeDef,
];

const server = new ApolloServer({
  introspection: true, // enables introspection of the schema in production
  playground: {
    settings: {
      "schema.polling.enable": false,
    },
  }, // enables the actual playground in production
  typeDefs,
  resolvers,
  uploads: false,
  subscriptions: {
    onConnect: (connectionParams, webSocket) => {
    },
  },
  async context({ req, connection }) {
  },
});

app.use(graphqlUploadExpress());
server.applyMiddleware({ app, path: "/",
  bodyParserConfig: {
    limit:"4096mb"
  }
});

app.use(cors());

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions  ready at http://localhost:${port}${server.subscriptionsPath}`
  );
}).setTimeout(600000);
