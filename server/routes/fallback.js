const express = require("express");
const router = express.Router();

const responseModel = require("../models/response-model");

router.get("/*", function (req, res, next) {
  res.status(400).send(new responseModel("Not found", {}));
});

module.exports = router;
