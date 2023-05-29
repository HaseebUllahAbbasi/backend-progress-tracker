const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./config/database/connection");
const { logInfo, logError } = require("./utils/beutify");
//setting up config file

dotenv.config({ path: "./src/config/config.env" });
//connecting to db
connectDatabse();

const server = app.listen(process.env.PORT, () => {
  logInfo(`Server is port ${process.env.PORT} in ${process.env.NODE_ENV}`);
  logInfo(`Server Link http://localhost:${process.env.PORT} `);
});

process.on("unhandledRejection", (err) => {
  logError(`Error name : ${err.name} , Error msg ${err.message}  `);
  logError("Shutting down Server due to  Rejection Errors");
  server.close(() => {
    process.exit();
  });
});
