import { addition } from '../src/math';

describe('Math Functions', () => {
  describe('Addition of numbers', () => {
    it('1 + 8 = 9', () => {
      return expect(addition(1, 8)).toBe(9);
    });

    it('-1 + 8 -9 + 4 = 2', () => {
      return expect(addition(-1, 8, -9, 4)).toBe(2);
    });
  });
});
