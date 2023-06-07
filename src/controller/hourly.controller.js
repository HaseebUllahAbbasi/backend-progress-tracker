const hourlyProgressService = require("../service/hourly.service");
const catchAsyncError = require("../middleware/catchAsyncError");

// Controller function to create a new hourly progress entry
const createHourlyProgress = catchAsyncError(async (req, res) => {
  const { userId, timestamp, date, description } = req.body;
  console.log(req.body, "req.body");
  const newHourlyProgress = await hourlyProgressService.createHourlyProgress({
    userId,
    timestamp,
    date,
    description,
  });
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

const deleteHourlyProgress = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  await hourlyProgressService.deleteHourlyProgress(id);
  res.json({
    message: "All hourly progress  has been deleted.",
  });
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
  deleteHourlyProgress,
  deleteHourlyProgressAll,
};
