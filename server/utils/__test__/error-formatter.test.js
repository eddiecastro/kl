const errorFormatter = require("../error-formatter");
const response = require("../../models/response");

describe("verify error formatter", () => {
  test("creates responseModel from statuscode", () => {
    const statusCode = 404;
    const expectedResponse = new response(
      { error: `Request failed - status code: ${statusCode}` },
      {}
    );

    expect(errorFormatter.status(statusCode)).toEqual(expectedResponse);
  });

  test("creates responseModel from error", () => {
    const error =
      "Request failed - reason: TypeError: Cannot read property 'map' of undefined";
    const expectedResponse = new response(
      { error: `Request failed - reason: ${error}` },
      {}
    );

    expect(errorFormatter.error(error)).toEqual(expectedResponse);
  });
});
