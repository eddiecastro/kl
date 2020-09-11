const peopleRouter = require("./people");
const fallbackRouter = require("./fallback");
const frequencyRouter = require("./frequency");
const duplicatesRouter = require("./duplicates");

module.exports.applyRoutes = (app) => {
  app.use("/people", peopleRouter);
  app.use("/frequency", frequencyRouter);
  app.use("/duplicates", duplicatesRouter);
  app.use("/", fallbackRouter);
};
