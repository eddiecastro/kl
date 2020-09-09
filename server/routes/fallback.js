const express = require("express");
const router = express.Router();

const errorFormatter = require("../utils/error-formatter");
const response = require("../models/response");

router.get("/", function (req, res, next) {
  res.status(200).send(new response({ status: "Running" }, {}));
});

// Catch all for unregistered routes
router.get("/*", function (req, res, next) {
  res.status(404).send(errorFormatter.error("Not found"));
});

module.exports = router;
