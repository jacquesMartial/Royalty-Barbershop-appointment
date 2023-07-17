import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_BOOKING } from "../../utils/mutations";
import { QUERY_BOOKINGS } from "../../utils/queries";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [name, setName] = useState("");

  const [createBooking, { error }] = useMutation(ADD_BOOKING
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = createBooking({
        variables: { name },
      });

      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Link className="btn btn-info btn-block py-3" type="submit" to="/book">
        <button>Book an appointment</button>
      </Link>
      <h3>Reservation queue</h3>
      <div>
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          {" "}
        </div>
      </div>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholdercreate your booking name..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
           <label for="booking">
          Enter a date and time for your appointment booking :
        </label>
        <input id="booking" type="datetime-local" name="bookingdate" />
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
