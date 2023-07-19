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
export const ADD_USER = gql`
  mutation Mutation($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        email
        name
        password
      }
    }
  }
`;
