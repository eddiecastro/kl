const config = require("../config/config");

module.exports = {
  SL_AUTH_HEADER: {
    headers: {
      Authorization: "Bearer " + config.SL_API_KEY,
    },
  },
};
