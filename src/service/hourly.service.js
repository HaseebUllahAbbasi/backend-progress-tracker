const HourlyProgress = require("../model/hour.model");
const catchAsyncError = require("../middleware/middleware");

// Function to create a new hourly progress entry
const createHourlyProgress = catchAsyncError(
  async (userId, timestamp, description) => {
    const hourlyProgress = new HourlyProgress({
      user: userId,
      timestamp,
      date,
      description,
    });
    const newHourlyProgress = await hourlyProgress.save();
    return newHourlyProgress;
  }
);

// Function to get hourly progress entries for a user
const getHourlyProgressByUser = catchAsyncError(async (userId) => {
  const hourlyProgressEntries = await HourlyProgress.find({ user: userId });
  return hourlyProgressEntries;
});
const getHourlyProgressByUserAndDate = catchAsyncError(async (userId, date) => {
  const hourlyProgressEntries = await HourlyProgress.find({
    user: userId,
    date,
  });
  return hourlyProgressEntries;
});

// Function to delete all hourly progress entries for a user
const deleteHourlyProgressByUser = catchAsyncError(async (userId) => {
  await HourlyProgress.deleteMany({ user: userId });
  return {
    message: "All hourly progress entries for the user have been deleted.",
  };
});
const deleteHourlyProgressAll = catchAsyncError(async () => {
  await HourlyProgress.deleteMany({});
  return {
    message: "All hourly progress entries  have been deleted.",
  };
});

// Export the hourlyProgressService module
module.exports = {
  createHourlyProgress,
  getHourlyProgressByUser,
  deleteHourlyProgressByUser,
  getHourlyProgressByUserAndDate,
  deleteHourlyProgressAll,
};
