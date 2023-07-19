import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      name
    }
  }
`;

export const QUERY_BOOKINGS = gql`
  query bookings($_id: String) {
    bookings(_id: $_id) {
      _id
      date
      time
    }
  }
`;
export const QUERY_ALLBOOKINGS = gql`
  query AllBookings {
    allBookings {
      _id
      date
      name
      time
    }
  }
`;
