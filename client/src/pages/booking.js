import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import { QUERY_SINGLE_BOOKING } from "../utils/queries";

const Booking = () => {
  const { bookingId } = useParams();

  // const { loading, data } = useQuery(QUERY_SINGLE_BOOKING, {
  //   variables: { bookingId: bookingId },
  // });

  // const booking = data?.booking || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
};

export default Booking;
