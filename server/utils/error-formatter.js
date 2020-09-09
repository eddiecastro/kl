const responseModel = require("../models/response-model");

module.exports = (statusCode) => {
  var error = { error: "Request failed - status code: " + statusCode };
  return new responseModel(error, {});
};
