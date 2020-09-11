const peopleService = require("../../people/people-service");
const duplicatesCalculator = require("../duplicates-calculator");
const duplicatesService = require("../duplicates-service");
const { goodData } = require("../../../utils/test-utils");

describe("duplicates service", () => {
  beforeAll(() => {
    peopleService.get = jest.fn(async () => goodData);
    duplicatesCalculator.localPartEmail = jest.fn(() => {
      return ["local part matches"];
    });
    duplicatesCalculator.frequency = jest.fn(() => {
      return ["frequency matches"];
    });
  });

  it("Should return mocked duplicates data", async () => {
    const res = await duplicatesService.get(1);

    expect(res).toEqual({
      localPartMatches: ["local part matches"],
      frequencyMatches: ["frequency matches"],
    });
  });
});
