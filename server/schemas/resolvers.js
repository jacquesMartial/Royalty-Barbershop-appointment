const { User, Booking } = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    bookings: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Booking.find(params);
    },
  },
  Mutation: {
    createBooking: async (parent, args) => {
      const booking = await Booking.create(args);
      return booking;
    },
  },
};

module.exports = resolvers;
