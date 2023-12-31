const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Booking {
    _id: ID!
    date: String!
    time: String!
    name: String!
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    booking: Booking
    allBookings: [Booking]
  }

  type Mutation {
    createBooking(date: String!, time: String!, name: String!): Booking
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    removeBooking: Booking
  }
`;

module.exports = typeDefs;
