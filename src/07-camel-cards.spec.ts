import { camelCards, input } from "./07-camel-cards";

describe("Day 7: Camel cards", () => {
  it("small input", () => {
    const expected = 6440;
    const result = camelCards([
      "32T3K 765",
      "T55J5 684",
      "KK677 28",
      "KTJJT 220",
      "QQQJA 483",
    ]);

    expect(result).toBe(expected);
  });

  it("large input", () => {
    const expected = 247815719;
    const result = camelCards(input);

    expect(result).toBe(expected);
  });
});
