import { fibonacci } from "./fibonacci";

const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

describe("fibonacci", () => {
  test("regular", () => {
    sequence.forEach((number, index) => {
      expect(fibonacci.regular(index)).toBe(number);
    });
  });
  test("memoization", () => {
    sequence.forEach((number, index) => {
      expect(fibonacci.memoization(index)).toBe(number);
    });
  });
});
