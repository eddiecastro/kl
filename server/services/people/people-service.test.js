const testUtils = require("../../utils/test-utils");
const peopleService = require("./people-service");

// set values for vars that rely on process.env
var authentication = require("../../utils/authentication");
authentication.SL_AUTH_HEADER = {
  headers: {
    Authorization: "Bearer apikey",
  },
};
var endpoints = require("../endpoints");
endpoints.GET_PEOPLE = "https://test.com/people";

describe("verify people service can fetch using right params and handle errors", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("get calls fetch with the right args and returns the correct response", async () => {
    fetchMock.mockResolvedValue(Promise.resolve(testUtils.goodResponse));

    const res = await peopleService.get(1);

    expect(res).toEqual(testUtils.goodData);
    expect(fetch).toBeCalledWith(
      `${endpoints.GET_PEOPLE}?page=1`,
      authentication.SL_AUTH_HEADER
    );
  });

  test("get returns error when statuscode is not ok", async () => {
    fetchMock.mockResolvedValue(Promise.resolve(testUtils.badResponse));

    const res = await peopleService.get(1);

    expect(res).toEqual(testUtils.badData);
  });
});
