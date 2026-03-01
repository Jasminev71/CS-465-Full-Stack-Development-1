const express = require('express');   // Express app
const router = express.Router();      // Router logic

// Import the controller
const tripsController = require('../controllers/trips');

// Define route for /trips endpoint
router
  .route('/trips')
  .get(tripsController.tripsList)   // GET - list all trips
  .post(tripsController.tripsAddTrip); // POST - add a new trip

// GET route with parameter
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip);
module.exports = router;