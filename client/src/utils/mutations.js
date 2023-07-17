import { gql } from "@apollo/client";

export const ADD_BOOKING = gql`
  mutation addBooking($name: String!) {
    addBooking(name: $name) {
      _id
      name
      date
      time
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
