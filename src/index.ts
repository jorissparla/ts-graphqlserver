import { GraphQLServer } from "graphql-yoga";
import * as dotenv from "dotenv";
import { createConnections } from "typeorm";
import { getConnectionManager } from "typeorm";
import "reflect-metadata";
import { importSchema } from "graphql-import";
import * as path from "path";
dotenv.config();
import { resolvers } from "./resolvers";

const typeDefs = importSchema(path.join(__dirname, "/schema.graphql"));

const PORT = process.env.PORT || 4000;

createConnections()
  .then(async connections => {
    const def = getConnectionManager().get("default");
    const app = getConnectionManager().get("app");
    const db = { default: def, app };
    const server = new GraphQLServer({
      typeDefs,
      resolvers,
      context: {
        db
      }
    });
    server.start({ port: PORT }, () =>
      console.log(`Server is running on localhost:${PORT}`)
    );
  })
  .catch(error => console.log(error));
