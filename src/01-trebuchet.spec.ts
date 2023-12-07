import { trebuchet, input } from "./01-trebuchet";

describe("Day 1:  Trebuchet?", () => {
  it("should return the sum of the coordinates when calibration codes has two or more numbers", () => {
    const expected = 100;
    const result = trebuchet(["5psdfsa30", "ewr2dew3245", "qe2owerw5"]);

    expect(result).toBe(expected);
  });

  it("should return the sum of the coordinates when calibration codes one or less numbers", () => {
    const expected = 11;
    const result = trebuchet(["qwerty", "wrewr0", "qwerwt1"]);

    expect(result).toBe(expected);
  });

  it("should return zero if not calibration codes given", () => {
    const expected = 0;
    const result = trebuchet([]);

    expect(result).toBe(expected);
  });

  it("should return zero if calibration codes given dont have digits", () => {
    const expected = 0;
    const result = trebuchet(["sfoijdsnfe", "xaqwdaaXsd"]);

    expect(result).toBe(expected);
  });

  it("should return correct result for all given cases of sample input", () => {
    const expected = 52834;
    const result = trebuchet(input);

    expect(result).toBe(expected);
  });
});
