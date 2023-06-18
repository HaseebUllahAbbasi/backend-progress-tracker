const catchAsyncError = require("../middleware/catchAsyncError");
const { storeNotificationData } = require("../service/user.service");
const addNotificationData = catchAsyncError(async (req, res) => {
  const { userId, expoPushToken } = req.body;
  const result = await storeNotificationData(expoPushToken, userId);
  res.json(result);
});

module.exports = {
  addNotificationData,
};
