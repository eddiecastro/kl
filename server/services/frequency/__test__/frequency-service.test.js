const peopleService = require("../../people/people-service");
const frequencyService = require("../frequency-service");
const { goodData } = require("../../../utils/test-utils");

describe("frequency service", () => {
  beforeAll(() => {
    peopleService.get = jest.fn(async () => goodData);
  });

  it("Should return correct frequency count", async () => {
    const frequencyData = {
      ".": 1,
      "@": 1,
      a: 2,
      c: 1,
      e: 2,
      i: 2,
      l: 2,
      m: 3,
      o: 1,
    };

    const res = await frequencyService.get(1);

    expect(res).toEqual(frequencyData);
  });
});
