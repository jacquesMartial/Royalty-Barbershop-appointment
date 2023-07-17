import { gql } from "@apollo/client";

export const ADD_BOOKING = gql`
  mutation Mutation($date: String!, $time: String!, $name: String!) {
    createBooking(date: $date, time: $time, name: $name) {
      date
      name
      time
      _id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;
