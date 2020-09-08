const config = require("../config/config");

module.exports = {
  SL_AUTH_HEADER: {
    Authorization: "Bearer " + config.SL_API_KEY,
  },
};
