export const addition = (...numbers: number[]): number => {
  const numbersAsExpression = numbers.join(`+`);
  const resultExpression = eval(numbersAsExpression);
  return resultExpression;
};
