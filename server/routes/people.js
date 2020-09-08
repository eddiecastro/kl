const express = require("express");
const router = express.Router();

const peopleService = require("../services/people/people-service");

router.get("/", function (req, res, next) {
  peopleService.get().then(function (response) {
    res.send(response);
  });
});

module.exports = router;
