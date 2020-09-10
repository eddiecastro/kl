const errorFormatter = require("../error-formatter");
const response = require("../../models/response");

describe("error formatter", () => {
  it("should create responseModel from statuscode", () => {
    const statusCode = 404;
    const expectedResponse = new response(
      { error: `Request failed - status code: ${statusCode}` },
      {}
    );

    expect(errorFormatter.status(statusCode)).toEqual(expectedResponse);
  });

  it("should create responseModel from error", () => {
    const error =
      "Request failed - reason: TypeError: Cannot read property 'map' of undefined";
    const expectedResponse = new response(
      { error: `Request failed - reason: ${error}` },
      {}
    );

    expect(errorFormatter.error(error)).toEqual(expectedResponse);
  });
});
