const fetch = require("node-fetch");

const endpoints = require("../endpoints");
const person = require("../../models/person");
const response = require("../../models/response");
const authentication = require("../../utils/authentication");
const errorFormatter = require("../../utils/error-formatter");

/**
 * Retrieve people from `/people` api
 */
module.exports.get = async (page = 1, perPage = 25) => {
  try {
    const res = await fetch(
      `${endpoints.GET_PEOPLE}?page=${page}&per_page=${perPage}`,
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
