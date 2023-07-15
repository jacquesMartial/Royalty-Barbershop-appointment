const { Schema, model } = require("mongoose");
const { Booking } = require(".");

const bookingSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
