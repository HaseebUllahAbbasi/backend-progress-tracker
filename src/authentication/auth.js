const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const AuthorModel = require("../models/Author.model");
const AdministrationModel = require("../models/Administration.model");
exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Login First To Access Page", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await AuthorModel.findById(decoded.id);
  next();
});

exports.isAuthenticatedAdmin = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Login as Admin First To Access Page", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await AdministrationModel.findById(decoded.id);
  next();
});
