const testUtils = require("../../../utils/test-utils");
var endpoints = require("../../endpoints");
var authentication = require("../../../utils/authentication");
var errorFormatter = require("../../../utils/error-formatter");

const peopleService = require("../people-service");
describe("people service", () => {
  beforeEach(() => {
    fetchMock.resetMocks();

    // set values for vars that rely on process.env
    authentication.SL_AUTH_HEADER = {
      headers: {
        Authorization: "Bearer apikey",
      },
    };
    endpoints.GET_PEOPLE = "https://test.com/people";
  });

  it("Should fetch with the right args and return the correct response", async () => {
    fetchMock.mockResolvedValue(Promise.resolve(testUtils.goodResponse));

    const res = await peopleService.get(1);

    expect(res).toEqual(testUtils.goodData);
    expect(fetch).toBeCalledWith(
      `${endpoints.GET_PEOPLE}?page=1&per_page=25`,
      authentication.SL_AUTH_HEADER
    );
  });

  it("Should return status error when statuscode is not ok", async () => {
    fetchMock.mockResolvedValue(Promise.resolve(testUtils.badStatusResponse));

    const res = await peopleService.get(1);

    expect(res).toEqual(testUtils.badStatus);
  });

  it("Should return error when parsing throws exception because data is empty", async () => {
    fetchMock.mockResolvedValue(Promise.resolve(testUtils.emptyResponse));

    const res = await peopleService.get(1);

    expect(res).toEqual(
      errorFormatter.error("TypeError: Cannot read property 'map' of undefined")
    );
  });
});
