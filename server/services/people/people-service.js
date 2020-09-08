const api = require("../api");
const endpoints = require("../endpoints");
const personModel = require("../../models/person-model");
const responseModel = require("../../models/response-model");

/**
 * Service to retrieve people from Salesloft `/people` api
 * This essentially functions as a pass through, mirroring needed parameters and using the same response structure
 */
module.exports.get = (page) => {
  const params = {
    params: {
      page: page,
    },
  };
  console.log(params);
  return api
    .get(endpoints.GET_PEOPLE, params)
    .then(function (response) {
      const data = response.data.data.map(
        (x) =>
          new personModel(
            x.id,
            x.first_name + " " + x.last_name,
            x.email_address,
            x.title
          )
      );
      const metadata = response.data.metadata;
      return new responseModel(metadata, data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
