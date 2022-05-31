//top down approach

export const minNumberOfNotesChange = ({
  coins = [2, 5, 10, 20, 50, 100],
  amount,
  minimum = -1,
  depth = 1,
}: {
  coins: number[];
  amount: number;
  minimum?: number;
  depth?: number;
}): number => {
  let newMinimum = minimum;
  coins.forEach((coin) => {
    const rest = amount - coin;
    if (rest === 0 && minimum === -1) newMinimum = depth;
    if (rest === 0 && minimum !== -1 && depth < minimum) newMinimum = depth;
    if (rest > 0) {
      newMinimum = minNumberOfNotesChange({
        amount: rest,
        coins,
        depth: depth + 1,
        minimum: newMinimum,
      });
    }
  });
  return newMinimum;
};
