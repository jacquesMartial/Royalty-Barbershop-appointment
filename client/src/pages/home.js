import React from "react";
import { useQuery } from "@apollo/client";

// import BookingList from "../components/BookingList";
// import BookingForm from "../components/BookingForm";

// import { QUERY_BOOKINGS } from "../utils/queries";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_BOOKINGS);
  // const bookings = data?.bookings || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          {/* <BookingForm /> */}
        </div>

        <div className="col-12 col-md-10 my-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            // <BookingList
            //   bookings={bookings}
            //   title="Here's the current roster of friends..."
            // />
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Home;
