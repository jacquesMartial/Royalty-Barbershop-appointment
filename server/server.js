const express = require("express");
//const { createServer } = require("http");
const { ApolloServer, gql } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const connection = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas/index");

(async function () {
  // creating express app
  const app = express();

  //   create the http server using express
  // const httpServer = createServer(app);

  //   gql schema
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  //   create and start the apollo server. we need to pass in the schema containgning the typedfs and resolvers
  const server = new ApolloServer({ schema });
  await server.start();

  //   wrap the express server inside the apollo-gql server
  server.applyMiddleware({ app });

  const PORT = 3001;

  //   we start the server when connected to db
  connection.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}/graphql`);
    });
  });
})();
