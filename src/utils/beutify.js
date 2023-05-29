const chalk = require("chalk");
const logger = require("./logger");
exports.logInfo = (message) => {
  logger.info(chalk.greenBright(message));
};
exports.logWarning = (message) => {
  logger.warn(chalk.yellowBright(message));
};

exports.logError = (message) => {
  logger.error(chalk.redBright(message));
};
