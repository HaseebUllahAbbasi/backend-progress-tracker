const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

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

// Error middleware
const errorMiddleware = require("./middleware/middleware");
app.use(errorMiddleware);

module.exports = app;
