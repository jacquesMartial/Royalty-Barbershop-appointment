import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_BOOKING } from "../../utils/mutations";
import { QUERY_BOOKINGS } from "../../utils/queries";

const BookingForm = () => {
  const [name, setName] = useState("");

  const [addBooking, { error }] = useMutation(ADD_BOOKING, {
    // The update method allows us to access and update the local cache
    update(cache, { data: { addBooking } }) {
      try {
        // First we retrieve existing booking data that is stored in the cache under the `QUERY_BOOKINGS` query
        // Could potentially not exist yet, so wrap in a try/catch
        const { bookings } = cache.readQuery({ query: QUERY_BOOKINGS });

        // Then we update the cache by combining existing booking data with the newly created data returned from the mutation
        cache.writeQuery({
          query: QUERY_BOOKINGS,
          // If we want new data to show up before or after existing data, adjust the order of this array
          data: { bookings: [...bookings, addBooking] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addBooking({
        variables: { name },
      });

      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Book an appointment</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your booking name..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add booking
          </button>
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
