const express = require("express");
const router = express.Router();

router.all("/", (req, res) => {
  res.status(200).json({
    message: "Server is Running 🚀🚀🚀🚀",
  });
});
const { Expo } = require("expo-server-sdk");
const {
  addNotificationData,
} = require("../controller/notification.controller");

const expo = new Expo();

// POST /notifications
router.post("/notificationApply", addNotificationData);
router.post("/notifications", async (req, res) => {
  const { tokens, title, body, data } = req.body;

  if (!tokens || !title || !body) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }

  const messages = [];

  // Create the push notification message for each token
  for (const token of tokens) {
    if (!Expo.isExpoPushToken(token)) {
      console.log(`Invalid Expo push token: ${token}`);
      continue;
    }

    messages.push({
      to: token,
      sound: "default",
      title,
      body,
      data,
    });
  }

  // Send the push notifications
  try {
    const chunks = expo.chunkPushNotifications(messages);

    for (const chunk of chunks) {
      const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      console.log(ticketChunk);
    }

    res.status(200).json({
      message: "Push notifications sent successfully",
    });
  } catch (error) {
    console.error("Error sending push notification:", error);
    res.status(500).json({
      error: "Failed to send push notifications",
    });
  }
});

module.exports = router;
