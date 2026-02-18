const express = require('express');
const cors = require('cors');

const bookingsRoute = require('./routes/bookings.cjs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/bookings', bookingsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
