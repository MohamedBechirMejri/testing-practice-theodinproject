import analyze from '../analyze';

describe('analyze', () => {
  it(`should return an object`, () => {
    expect(typeof analyze([1, 8, 3, 4, 2, 6])).toBe('object');
  });
  it(`should return average of given array`, () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
  });
  it(`should return max number in given array`, () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
  });
  it(`should return min number in array`, () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
  });
  it(`should return length of given array`, () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
});
