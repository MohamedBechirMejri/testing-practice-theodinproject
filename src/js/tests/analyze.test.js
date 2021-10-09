import analyze from '../analyze';

describe('analyze', () => {
  it(`should return an object`, () => {
    expect(typeof analyze([1, 8, 3, 4, 2, 6])).toBe('object');
  });
  it(`should return length of given array`, () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
});
