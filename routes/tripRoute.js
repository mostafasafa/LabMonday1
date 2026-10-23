const express = require("express");
const {
    createTrip,
    retrieveAllTrips,
    retrieveTripById,
} = require('../controller/TripController.js');

const tripRouter = express.Router();

tripRouter.post("/", createTrip);
tripRouter.get("/", retrieveAllTrips);
tripRouter.get("/:id", retrieveTripById);

module.exports = tripRouter;
