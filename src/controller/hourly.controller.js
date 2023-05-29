const hourlyProgressService = require("../services/hourlyprogress.service");
const catchAsyncError = require("../middleware/middleware");

// Controller function to create a new hourly progress entry
const createHourlyProgress = catchAsyncError(async (req, res) => {
  const { userId, timestamp, date, description } = req.body;
  const newHourlyProgress = await hourlyProgressService.createHourlyProgress(
    userId,
    timestamp,
    date,
    description
  );
  res.status(201).json(newHourlyProgress);
});

// Controller function to get hourly progress entries for a user
const getHourlyProgressByUser = catchAsyncError(async (req, res) => {
  const { userId } = req.params;
  const hourlyProgressEntries =
    await hourlyProgressService.getHourlyProgressByUser(userId);
  res.json(hourlyProgressEntries);
});

// Controller function to get hourly progress entries for a user and specific date
const getHourlyProgressByUserAndDate = catchAsyncError(async (req, res) => {
  const { userId, date } = req.params;
  const hourlyProgressEntries =
    await hourlyProgressService.getHourlyProgressByUserAndDate(userId, date);
  res.json(hourlyProgressEntries);
});

// Controller function to delete all hourly progress entries for a user
const deleteHourlyProgressByUser = catchAsyncError(async (req, res) => {
  const { userId } = req.params;
  await hourlyProgressService.deleteHourlyProgressByUser(userId);
  res.json({
    message: "All hourly progress entries for the user have been deleted.",
  });
});

// Controller function to delete all hourly progress entries
const deleteHourlyProgressAll = catchAsyncError(async (req, res) => {
  await hourlyProgressService.deleteHourlyProgressAll();
  res.json({ message: "All hourly progress entries have been deleted." });
});

// Export the hourlyProgressController module
module.exports = {
  createHourlyProgress,
  getHourlyProgressByUser,
  getHourlyProgressByUserAndDate,
  deleteHourlyProgressByUser,
  deleteHourlyProgressAll,
};
