//DB connection and Trip Schema

const Mongoose = require('./db');
const Trip = require('./travlr');

//Reads seed data from Json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

//delete any exisiting recors, then inserts seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

//close then MongoDB connection and exit 
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});