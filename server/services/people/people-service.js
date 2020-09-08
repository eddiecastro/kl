var api = require("../api");
var endpoints = require("../endpoints");
var personModel = require("../../models/person-model");
var responseModel = require("../../models/response-model");

/**
 * Service to retrieve people from Salesloft `/people` api
 * This functions as a pass through mirroring needed parameters and using the same response structure
 */
function get() {
  return api
    .get(endpoints.GET_PEOPLE)
    .then(function (response) {
      var data = response.data.data.map(
        (x) =>
          new personModel(
            x.first_name + " " + x.last_name,
            x.email_address,
            x.title
          )
      );
      var metadata = response.data.metadata;
      return new responseModel(metadata, data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = get;
