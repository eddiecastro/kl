var peopleRouter = require("./people");

function applyRoutes(app) {
  app.use("/people", peopleRouter);
}
module.exports = applyRoutes;
