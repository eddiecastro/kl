const response = require("../models/response");

function status(statusCode) {
  var metadata = { error: `Request failed - status code: ${statusCode}` };
  return new response(metadata, {});
}

function error(error) {
  var metadata = { error: `Request failed - reason: ${error}` };
  return new response(metadata, {});
}

module.exports = {
  status: status,
  error: error,
};
