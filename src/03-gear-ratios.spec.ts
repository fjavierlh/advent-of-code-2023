import { gearRatios, input } from "./03-gear-ratios";

describe("Day 3: Gear Ratios", () => {
  it("should return the sum of all numbers adjacents to a symbol for small given input", () => {
    const expected = 4361;
    const result = gearRatios([
      "467..114..",
      "...*......",
      "..35..633.",
      "......#...",
      "617*......",
      ".....+.58.",
      "..592.....",
      "......755.",
      "...$.*....",
      ".664.598..",
    ]);

    expect(result).toBe(expected);
  });

  it("should return the sum of all numbers adjacents to a symbol for large given input", () => {
    const expected = null;
    const result = gearRatios(input);

    expect(result).toBe(expected);
  });
});
