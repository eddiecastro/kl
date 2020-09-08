const fetch = require("node-fetch");
const { URLSearchParams } = require("url");

const endpoints = require("../endpoints");
const personModel = require("../../models/person-model");
const responseModel = require("../../models/response-model");
const authentication = require("../../utils/authentication");

/**
 * Service to retrieve people from Salesloft `/people` api
 * This essentially functions as a pass through, mirroring needed parameters and using the same response structure
 */
module.exports.get = (page) => {
  const params = {
    page: page,
  };
  const queryParams = new URLSearchParams(params);
  return fetch(endpoints.GET_PEOPLE + "?" + queryParams, {
    headers: authentication.SL_AUTH_HEADER,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(res);
      }
    })
    .then((json) => {
      const data = json.data.map(
        (x) =>
          new personModel(
            x.id,
            x.first_name + " " + x.last_name,
            x.email_address,
            x.title
          )
      );
      const metadata = json.metadata;
      return new responseModel(metadata, data);
    });
};
