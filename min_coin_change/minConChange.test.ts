import { minCoinChange } from "./minCoinChange";

describe("min coin change", () => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];

  test("should the minimum change", () => {
    const expected: {
      args: Parameters<typeof minCoinChange>[0];
      expected: number[];
    }[] = [
      { args: { coins, amount: 7 }, expected: [2, 7] },
      { args: { coins, amount: 8 }, expected: [1, 2, 5] },
      { args: { coins, amount: 10 }, expected: [10] },
      { args: { coins, amount: 25 }, expected: [5, 20] },
      { args: { coins, amount: 57 }, expected: [2, 5, 50] },
    ];

    expected.forEach(({ args, expected }) => {
      expect(minCoinChange(args)).toEqual(expected);
    });
  });
});
