const frequencyCalculator = require("../frequency-calculator");

describe("frequency calculator", () => {
  const string1 = "abcbcc";
  const string2 = "bcd";

  it("should return letter frequency for a single string in the array", () => {
    const frequency = { c: 3, b: 2, a: 1 };
    const res = frequencyCalculator.multiple([string1]);
    expect(res).toEqual(frequency);
  });

  it("should return letter frequency for an array of strings", () => {
    const frequency = { c: 4, b: 3, a: 1, d: 1 };
    const res = frequencyCalculator.multiple([string1, string2]);
    expect(res).toEqual(frequency);
  });
});
