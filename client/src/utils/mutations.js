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
