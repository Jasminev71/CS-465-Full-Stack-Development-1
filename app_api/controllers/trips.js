const mongoose = require('mongoose');
require('../models/travlr'); // registers schema(s) in this file
const Trip = mongoose.model('trips');

// GET: /trips - Returns all trips
const tripsList = async (req, res) => {
  try {
    const q = await Trip.find({}).exec();

    if (!q || q.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// GET: /trips/:tripCode - Returns a trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Trip.find({ code: req.params.tripCode }).exec();

    if (!q || q.length === 0) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = new Trip({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    const q = await newTrip.save();

    if (!q) {
      return res.status(400).json({ message: 'Trip not created' });
    }

    return res.status(201).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// PUT: /trips/:tripCode - Updates a Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
  // Debugging (optional)
  console.log(req.params);
  console.log(req.body);

  try {
    const q = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true } // return updated trip
    ).exec();

    if (!q) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};