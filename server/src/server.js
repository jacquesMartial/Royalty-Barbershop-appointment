const express = require("express");
const { createServer } = require("http");
const { ApolloServer, gql } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");

(async function () {
  // creating express app
  const app = express();

  //   creating the basic required typedefs for an apollo-gql server
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  //   create the http server using express
  const httpServer = createServer(app);

  //   gql schema
  const schema = makeExecutableSchema({
    typeDefs,
  });

  //   create and start the apollo server. we need to pass in the schema containgning the typedfs and resolvers
  const server = new ApolloServer({ schema });
  await server.start();

  //   wrap the express server inside the apollo-gql server
  server.applyMiddleware({ app });

  const PORT = 4444;

  //   we start the server
  httpServer.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/graphql`);
  });
})();
