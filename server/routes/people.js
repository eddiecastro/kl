const express = require("express");
const router = express.Router();

const peopleService = require("../services/people/people-service");

router.get("/", function (req, res, next) {
  const page = req.query.page;
  peopleService.get(page).then(function (response) {
    res.send(response);
  });
});

module.exports = router;
