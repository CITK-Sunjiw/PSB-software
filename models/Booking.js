const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  movieId: String,
  movieTitle: String,
  time: String,
  seats: [String],
  price: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
