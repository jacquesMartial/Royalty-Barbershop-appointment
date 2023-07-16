import { gql } from "@apollo/client";

export const CREATE_BOOKING = gql`
  mutation createBooking($date: String!, $time: String!) {
    createBooking(date: $date, time: $time) {
      _id
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
