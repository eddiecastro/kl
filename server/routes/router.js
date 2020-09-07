var peopleRouter = require("./people");

module.exports.applyRoutes = (app) => {
  app.use("/people", peopleRouter);
};
