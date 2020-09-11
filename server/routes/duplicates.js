const express = require("express");
const router = express.Router();

const duplicatesService = require("../services/duplicates/duplicates-service");

router.get("/", function (req, res, next) {
  duplicatesService.get().then(function (response) {
    res.send(response);
  });
});

module.exports = router;
