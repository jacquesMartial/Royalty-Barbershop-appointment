import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { ADD_BOOKING } from "../../utils/mutations";
import { QUERY_ALLBOOKINGS } from "../../utils/queries";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [name, setName] = useState("");
  const { loading, data } = useQuery(QUERY_ALLBOOKINGS);
  const [createBooking, { error }] = useMutation(ADD_BOOKING);
  const bookingData = data?.allBookings || [];
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      let dateAndTime = document.querySelector("#booking").value;
      console.log(dateAndTime);
      dateAndTime = dateAndTime.split("T");
      console.log(dateAndTime, name);
      let time = dateAndTime[1];
      let date = dateAndTime[0];

      const { data } = createBooking({
        variables: { name, time, date },
      });
      console.log(data);
      setName("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Bellow is our shop's reservation history book accordingly</h3>
      <p>Availabilities 9am ~ 9:30am ~ 10am ~ 10:30am ~ 11am ~ 3pm ~ 4pm </p>
      <ul>
        {bookingData?.map((appointment) => {
          return (
            <li>
              {appointment.name} booked an appointment for the{" "}
              {appointment.date} at {appointment.time}{" "}
            </li>
          );
        })}
      </ul>
      <div>
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          {" "}
        </div>
      </div>
      <form className="flex-row justify-center justify-space-between-md align-center">
        <div className="col-12 col-lg-9">
          <input
            placeholder="Enter your name here"
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
          <br></br>
          <label for="booking">Select your appointment date and time:</label>
          <br></br>
          <input id="booking" type="datetime-local" name="bookingdate" />
          <button onClick={handleFormSubmit}> Book appointment</button>
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
