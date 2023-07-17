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
  return (
    <div>
      <h2 className="card-header">
        {/* {booking.name}'s friends have endorsed these skills... */}
      </h2>

      {/* {booking.skills?.length > 0 && <SkillsList skills={booking.skills} />} */}

      <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        {/* <SkillForm bookingId={booking._id} /> */}
      </div>
    </div>
  );
};

export default Booking;
