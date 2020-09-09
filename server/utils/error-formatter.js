const responseModel = require("../models/response-model");

function status(statusCode) {
  var metadata = { error: `Request failed - status code: ${statusCode}` };
  return new responseModel(metadata, {});
}

function error(error) {
  var metadata = { error: `Request failed - reason: ${error}` };
  return new responseModel(metadata, {});
}

module.exports = {
  status: status,
  error: error,
};
