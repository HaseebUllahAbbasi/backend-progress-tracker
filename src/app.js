const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Server } = require("socket.io");

// Import Socket.IO and initialize server
const serverMain = require("http").createServer(app);
const io = new Server(serverMain, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// Import route files
const userRoutes = require("./routes/user.routes");
const noteRoutes = require("./routes/note.routes");
const hourlyRoutes = require("./routes/hourly.routes");

app.use(express.static("public"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Mount the routes
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/hourly", hourlyRoutes);

// Socket.IO event handling
io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("login", (data) => {
    // console.log("data on login", data);
  });

  socket.on("hourly-user-update", async (userData) => {
    const { userId } = userData;
    const data = await getHourlyProgressByUser(userId);
    // console.log(userData,  );

    io.emit("get-hourly-user", data);
  });
  // Handle events here...
  socket.on("data-update", async (userData) => {
    // Send the updated data to all connected clients
    const { userId } = userData;

    const data = await getHourlyProgressByUser(userId);
    // console.log(userData,  );

    io.emit("get-hourly-user", data);
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});
// Error middleware
const errorMiddleware = require("./middleware/middleware");
const { getHourlyProgressByUser } = require("./service/hourly.service");
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
module.exports = serverMain;
