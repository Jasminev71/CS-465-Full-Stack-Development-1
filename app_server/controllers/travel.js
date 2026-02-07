const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

// Get traveler view
const travel = async (req, res, next) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    const json = await response.json();

    res.render('travel', {
      title: 'Travlr Getaways',
      trips: json
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  travel
};
