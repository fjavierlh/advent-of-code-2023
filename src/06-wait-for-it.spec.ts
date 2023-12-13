import { waitForIt, input } from "./06-wait-for-it";

describe("Day 6: Wait for it", () => {
  it("small input", () => {
    const expected = 288;
    const result = waitForIt([
      "Time:        63     78     94     68",
      "Distance:   411   1274   2047   1035",
    ]);

    expect(result).toBe(expected);
  });

  it("large input", () => {
    const expected = null;
    const result = waitForIt(input);

    expect(result).toBe(expected);
  });
});
