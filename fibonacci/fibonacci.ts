export const fibonacci = {
  regular: (position: number): number => {
    if (position === 0) return 0;
    if (position === 1 || position === 2) return 1;
    return fibonacci.regular(position - 1) + fibonacci.regular(position - 2);
  },
  memoization: (position: number): number => {
    const memo = [0, 1];
    const fibonacci = (position: number): number => {
      if (memo[position] != null) memo[position];
      if (position === 0) return 0;
      if (position === 1 || position === 2) return 1;
      return fibonacci(position - 1) + fibonacci(position - 2);
    };
    return fibonacci(position);
  },
};
