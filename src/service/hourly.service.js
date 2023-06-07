const HourlyProgress = require("../model/hour.model");
const catchAsyncError = require("../middleware/catchAsyncError");

// Function to create a new hourly progress entry
const createHourlyProgress = catchAsyncError(
  async ({ userId, timestamp, date, description }) => {
    const data = await HourlyProgress.create({
      user: userId,
      timestamp,
      date,
      description,
    });
    return data;
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
const deleteHourlyProgress = catchAsyncError(async (id) => {
  return await HourlyProgress.findByIdAndDelete(id);
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
  deleteHourlyProgress,
};
