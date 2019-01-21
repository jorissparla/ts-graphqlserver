import { GraphQLServer } from "graphql-yoga";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import "reflect-metadata";
import { importSchema } from "graphql-import";
import * as path from "path";
dotenv.config();
import { resolvers } from "./resolvers";

const typeDefs = importSchema(path.join(__dirname, "/schema.graphql"));

const server = new GraphQLServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

createConnection()
  .then(async connection => {
    server.start({ port: PORT }, () =>
      console.log(`Server is running on localhost:${PORT}`)
    );
  })
  .catch(error => console.log(error));
