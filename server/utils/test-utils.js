const { Response } = require("node-fetch");
const errorFormatter = require("./error-formatter");

const goodData = {
  metadata: {
    paging: {
      next_page: 2,
    },
  },
  data: [
    {
      id: 1,
      first_name: "first",
      last_name: "last",
      email_address: "email@email.com",
      title: "job title",
    },
  ],
};

const badStatus = errorFormatter.status(500);

const goodInit = {
  status: 200,
};
const badInit = {
  status: 500,
};

const badStatusResponse = new Response("", badInit);
const goodResponse = new Response(JSON.stringify(goodData), goodInit);
const emptyResponse = new Response(JSON.stringify({}), goodInit);

module.exports = {
  goodResponse: goodResponse,
  goodData: goodData,
  badStatusResponse: badStatusResponse,
  badStatus: badStatus,
  emptyResponse: emptyResponse,
};
