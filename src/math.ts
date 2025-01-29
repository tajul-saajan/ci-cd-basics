export const sum = (arr: number[]): number => {
  return arr.reduce((sum: number, num: number) => {
    return sum + num;
  }, 0);
};
