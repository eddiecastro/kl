const express = require("express");
const router = express.Router();

const frequencyService = require("../services/frequency/frequency-service");

router.get("/", function (req, res, next) {
  frequencyService.get().then(function (response) {
    res.send(response);
  });
});

module.exports = router;
