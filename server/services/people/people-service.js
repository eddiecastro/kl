const fetch = require("node-fetch");

const endpoints = require("../endpoints");
const person = require("../../models/person");
const response = require("../../models/response");
const authentication = require("../../utils/authentication");
const errorFormatter = require("../../utils/error-formatter");

/**
 * Service to retrieve people from Salesloft `/people` api
 * This essentially functions as a pass through, mirroring needed parameters and using the same response structure
 */
module.exports.get = async (page) => {
  try {
    const res = await fetch(
      `${endpoints.GET_PEOPLE}?page=${page}`,
      authentication.SL_AUTH_HEADER
    );
    if (res.ok) {
      const json = await res.json();
      const data = json.data.map(
        (x) =>
          new person(x.id, x.first_name, x.last_name, x.email_address, x.title)
      );
      const metadata = json.metadata;
      return new response(metadata, data);
    } else {
      return errorFormatter.status(res.status);
    }
  } catch (error) {
    return errorFormatter.error(error);
  }
};
