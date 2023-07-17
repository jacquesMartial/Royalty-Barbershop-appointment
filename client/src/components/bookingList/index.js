import React from "react";
import { Link } from "react-router-dom";

const BookingList = ({ booking, title }) => {
  if (!bookings.length) {
    return <h3>No Booking Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {bookings &&
          bookings.map((booking) => (
            <div key={booking._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {booking.name} <br />
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/bookings/${booking._id}`}
                >
                  View and endorse their skills.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookingList;
