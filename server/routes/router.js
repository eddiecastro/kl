const peopleRouter = require("./people");
const fallbackRouter = require("./fallback");

module.exports.applyRoutes = (app) => {
  app.use("/people", peopleRouter);
  app.use("/", fallbackRouter);
};
