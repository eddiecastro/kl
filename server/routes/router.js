const peopleRouter = require("./people");
const fallbackRouter = require("./fallback");
const frequencyRouter = require("./frequency");

module.exports.applyRoutes = (app) => {
  app.use("/people", peopleRouter);
  app.use("/frequency", frequencyRouter);
  app.use("/", fallbackRouter);
};
