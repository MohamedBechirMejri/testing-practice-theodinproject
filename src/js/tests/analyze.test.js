import analyze from '../analyze';

describe('analyze', () => {
  it(`should return an object`, () => {
    expect(typeof analyze()).toBe('object');
  });
});
