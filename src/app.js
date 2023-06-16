const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Server } = require("socket.io");
const errorMiddleware = require("./middleware/middleware");
const { getHourlyProgressByUser } = require("./service/hourly.service");
const { getAllTodosByUser } = require("./service/todo.service");

// Import Socket.IO and initialize server
const serverMain = require("http").createServer(app);
const io = new Server(serverMain, {
  cors: {
    origin: "*",
    methods: "*",
    // origin: ["*"],
    // origin: ["http://localhost:5173", "http://192.168.100.3:5173/"],
    // methods: ["*"],
    // ["GET", "POST", "PUT", "DELETE"],
  },
});

// Import route files
const userRoutes = require("./routes/user.routes");
const noteRoutes = require("./routes/note.routes");
const todoRoutes = require("./routes/todo.routes");
const hourlyRoutes = require("./routes/hourly.routes");
const testingRoutes = require("./routes/test.routes");

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
app.use("/api/todo", todoRoutes);
app.use("/", testingRoutes);

// Socket.IO event handling
io.on("connection", (socket) => {
  // console.log("A client connected");

  socket.on("todo-user-update", async (userData) => {
    const { userId } = userData;
    const data = await getAllTodosByUser(userId);

    io.emit("get-todo-user", data);
  });

  socket.on("hourly-user-update", async (userData) => {
    const { userId } = userData;
    const data = await getHourlyProgressByUser(userId);
    // console.log(userData,  );

    io.emit("get-hourly-user", data);
  });

  socket.on("todo-data-update", async (userData) => {
    const { userId } = userData;
    const data = await getAllTodosByUser(userId);
    io.emit("get-todo-user", data);
  });
  socket.on("data-update", async (userData) => {
    const { userId, date } = userData;
    const data = await getHourlyProgressByUser(userId);
    io.emit("get-hourly-user", data);
  });

  socket.on("disconnect", () => {
    // console.log("A client disconnected");
  });
});
// Error middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
module.exports = serverMain;
