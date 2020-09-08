const config = require("../config/config");

const BASE_URLS = {
  SL_BASE: config.SL_BASE_URL,
};

module.exports = {
  GET_PEOPLE: BASE_URLS.SL_BASE + "/people",
};
