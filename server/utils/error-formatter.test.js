const errorFormatter = require("./error-formatter");
const responseModel = require("../models/response-model");

describe("verify error formatter", () => {
  test("error formatter accepts argument and produces responseModel", async () => {
    const statusCode = 404;
    const expectedResponse = new responseModel(
      {
        error: `Request failed - status code: ${statusCode}`,
      },
      {}
    );

    expect(errorFormatter(statusCode)).toEqual(expectedResponse);
  });
});
