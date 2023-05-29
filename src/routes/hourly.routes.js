const express = require("express");
const hourlyProgressController = require("../controller/hourly.controller");

const router = express.Router();

// Route to create a new hourly progress entry
router.post("/hourly-progress", hourlyProgressController.createHourlyProgress);

// Route to get hourly progress entries for a user
router.get(
  "/hourly-progress/user/:userId",
  hourlyProgressController.getHourlyProgressByUser
);

// Route to get hourly progress entries for a user and specific date
router.get(
  "/hourly-progress/user/:userId/date/:date",
  hourlyProgressController.getHourlyProgressByUserAndDate
);

// Route to delete all hourly progress entries for a user
router.delete(
  "/hourly-progress/user/:userId",
  hourlyProgressController.deleteHourlyProgressByUser
);

// Route to delete all hourly progress entries
router.delete(
  "/hourly-progress",
  hourlyProgressController.deleteHourlyProgressAll
);

module.exports = router;
