const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const Booking = require('./models/Booking'); // Import Booking model

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes); // Use a specific path for auth routes
app.use('/api/bookings', bookingRoutes); // Use a specific path for booking routes

// Root route (landing page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Booking route (if needed directly in this file)
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking saved' });
  } catch (err) {
    res.status(500).json({ error: 'Could not save booking' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
