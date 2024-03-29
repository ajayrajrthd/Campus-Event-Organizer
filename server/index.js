const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const axios = require('axios'); // Import axios for making HTTP requests

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const url = 'mongodb+srv://disha:dishadisha@cluster0.0fuuedz.mongodb.net/Event';
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  organizer: String,
  eventName: String,
  eventDescription: String,
  eventVenue: String,
  eventDate: String,
  eventTime: String,
  seatsAvailable: Number,
  bookingLink: String
});
const Data = mongoose.model('organizer', dataSchema);

app.post('/add', (req, res) => {
  const newData = new Data(req.body);
  newData.save()
    .then(() => res.json('Data added successfully'))
    .catch((err) => res.status(400).json('Error adding data:', err));
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
