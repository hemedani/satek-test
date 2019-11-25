import { ApolloServer } from "apollo-server-express";
import Express from "express";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
// import { createTypeormConnection } from "./utils/createTypeormConnection";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  // const conn = await createTypeormConnection();
  // await conn.runMigrations();

  // await createData();

  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [__dirname + "/modules/**/*.resolver.ts"]
    // resolvers: [RegisterResolver, MeResolver],
    // authChecker: customAuthChecker
  });

  // Create the GraphQL server
  const apolloServer = new ApolloServer({
    context: ({ req }: any) => ({ req }),
    schema
    // introspection: true,
  });

  const app = Express();

  app.use("/files", Express.static(path.join(__dirname, "/../files")));

  apolloServer.applyMiddleware({
    app,
    cors: { credentials: true, origin: "http://localhost:3000" }
  });

  // Start the server
  app.listen(PORT);
  console.log(`GraphQL Playground available at http://localhost:${PORT}`);
}

bootstrap();
