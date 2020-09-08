var express = require("express");
var router = express.Router();

var peopleService = require("../services/people/people-service");

router.get("/", function (req, res, next) {
  peopleService.get().then(function (response) {
    res.send(response);
  });
});

module.exports = router;
