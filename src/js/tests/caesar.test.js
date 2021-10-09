import caesar from '../caesar';

describe('caesar', () => {
  it(`should replace every letter with next letter in alphabet`, () => {
    expect(caesar('abc')).toBe('bcd');
  });
  it(`should replace z  with a`, () => {
    expect(caesar('xyz')).toBe('yza');
  });
});
