import { minNumberOfNotesChange } from "./minNumberOfNotesChange";

describe("min coin change", () => {
  const coins = [
    2, 5, 10, 20, 50, 100, 200
  ];

  test("should return the minimum number of notes change", () => {
    const expected: {
      args: Parameters<typeof minNumberOfNotesChange>[0];
      expected: number;
    }[] = [
      { args: { coins, amount: 3 }, expected: -1 },
      { args: { coins, amount: 7 }, expected: 2 },
      { args: { coins, amount: 8 }, expected: 4 },
      { args: { coins, amount: 10 }, expected: 1 },
      { args: { coins, amount: 25 }, expected: 2 },
      { args: { coins, amount: 57 }, expected: 3 },
    ];

    expected.forEach(({ args, expected }) => {
      expect(minNumberOfNotesChange(args)).toEqual(expected);
    });
  });
});
