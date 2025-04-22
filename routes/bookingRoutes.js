const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get bookings for a user
router.get('/bookings', async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ error: 'Email required' });

  try {
    const bookings = await Booking.find({ userEmail: email }).sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
