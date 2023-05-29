const mongoose = require("mongoose");
const { logInfo } = require("../../utils/beutify");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex:true
    })
    .then((con) => {
      logInfo(`server is connected on ${con.connection.host} `);
    });
};
module.exports = connectDatabase;
