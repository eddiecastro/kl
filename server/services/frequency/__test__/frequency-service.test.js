const peopleService = require("../../people/people-service");
const frequencyService = require("../frequency-service");
const { goodData } = require("../../../utils/test-utils");

describe("frequency service", () => {
  beforeAll(() => {
    peopleService.get = jest.fn(async () => goodData);
  });

  it("Should return correct frequency count", async () => {
    const frequencyData = [
      ["m", 3],
      ["e", 2],
      ["a", 2],
      ["i", 2],
      ["l", 2],
      ["@", 1],
      [".", 1],
      ["c", 1],
      ["o", 1],
    ];

    const res = await frequencyService.get(1);

    expect(res).toEqual(frequencyData);
  });
});
