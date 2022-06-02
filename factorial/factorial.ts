export const factorial = {
  regular: (number: number): number =>
    new Array(number)
      .fill(null)
      .reduce((cur, acc, index) => cur * (index + 1), 1),
  recursive: (number: number): number =>
    number === 1 || number === 0 ? 1 : number * factorial.recursive(number - 1),
};
