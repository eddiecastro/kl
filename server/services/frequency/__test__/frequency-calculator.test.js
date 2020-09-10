const frequencyCalculator = require("../frequency-calculator");

describe("frequency calculator", () => {
  const string1 = "abcbcc";
  const string2 = "bcd";

  it("should return letter frequency for a string", () => {
    const frequency = {
      a: 1,
      b: 2,
      c: 3,
    };
    const res = frequencyCalculator.single(string1);
    expect(res).toEqual(frequency);
  });

  it("should return letter frequency for an array of strings", () => {
    const frequency = {
      a: 1,
      b: 3,
      c: 4,
      d: 1,
    };
    const res = frequencyCalculator.multiple([string1, string2]);
    expect(res).toEqual(frequency);
  });
});
