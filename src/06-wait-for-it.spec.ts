import { waitForIt, input } from "./06-wait-for-it";

describe("Day 6: Wait for it", () => {
  it("small input", () => {
    const expected = 288;
    const result = waitForIt([
      "Time:      7  15   30",
      "Distance:  9  40  200",
    ]);

    expect(result).toBe(expected);
  });

  it("large input", () => {
    const expected = 781200;
    const result = waitForIt(input);

    expect(result).toBe(expected);
  });
});
