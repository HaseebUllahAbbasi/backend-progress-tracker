const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

exports.sendToken = (user, statusCode, role, res) => {
  console.log("Port", process.env.COOKIE_EXPIRES_TIME);
  const token = user.getJwtToken();
  const options = {
    expires: new Date(
      Date.now() + 24 * 60 * 60 * 1000 * process.env.COOKIE_EXPIRES_TIME
    ),
    httpOnly: true,
  };
  console.log(options);
  const { blocked, active, verified, createAt, password, cnic, __v, ...rest } =
    user._doc;
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user: rest,
    role,
  });
};
