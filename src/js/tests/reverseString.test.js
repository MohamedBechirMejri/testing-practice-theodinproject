import reverseString from '../reverseString';

describe('reverseString', () => {
  it(`should return "!olleH"`, () => {
    expect(reverseString('Hello!')).toBe('!olleH');
  });

  it(`should reverse different strings`, () => {
    expect(reverseString('test')).toBe('tset');
  });
});
