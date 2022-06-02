import { factorial } from "./factorial";

const expected: [number, number][] = [
  [0, 1],
  [1, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 24],
  [5, 120],
  [6, 720],
  [7, 5040],
  [8, 40320],
  [9, 362880],
  [10, 3628800],
];

describe("factorials", () => {
  test("regular", () => {
    expected.forEach(([number, expected]) => {
      expect(factorial.regular(number)).toBe(expected);
    });
  });

  test("recursive", () => {
    expected.forEach(([number, expected]) => {
      expect(factorial.recursive(number)).toBe(expected);
    });
  });
});
