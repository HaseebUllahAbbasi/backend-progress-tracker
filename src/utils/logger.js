const pino = require("pino");
// pino-pretty is also required

// const log = pino({ name: "project" }, logThrough);

const logger = pino({
  name: "News Site",
  transport: {
    target: "pino-pretty",
  },
});
module.exports = logger;
