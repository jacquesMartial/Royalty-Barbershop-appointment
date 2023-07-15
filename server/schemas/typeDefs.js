const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Booking {
    _id: ID!
    date: String!
    time: String!
  }

  type Query {
    user: [User]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createBooking(date: String!, time: String!): Booking
  }
`;

module.exports = typeDefs;
