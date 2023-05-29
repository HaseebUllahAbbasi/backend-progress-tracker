const express = require("express");
const hourlyProgressController = require("../controller/hourly.controller");

const router = express.Router();

// Route to create a new hourly progress entry
router.post("/", hourlyProgressController.createHourlyProgress);

// Route to get hourly progress entries for a user
router.get("/user/:userId", hourlyProgressController.getHourlyProgressByUser);

// Route to get hourly progress entries for a user and specific date
router.get(
  "/user/:userId/date/:date",
  hourlyProgressController.getHourlyProgressByUserAndDate
);

// Route to delete all hourly progress entries for a user
router.delete(
  "/user/:userId",
  hourlyProgressController.deleteHourlyProgressByUser
);

// Route to delete all hourly progress entries
router.delete("/", hourlyProgressController.deleteHourlyProgressAll);

module.exports = router;
