const axios = require("axios");

const config = require("../config/config");

module.exports = axios.create({
  baseURL: config.SL_BASE_URL,
  headers: { Authorization: "Bearer " + config.SL_API_KEY },
  responseType: "json",
  timeout: 1000,
});
