import caesar from '../caesar';

describe('caesar', () => {
  it(`should replace every letter with next letter in alphabet`, () => {
    expect(caesar('abc')).toBe('bcd');
  });
  it(`should replace z  with a`, () => {
    expect(caesar('xyz')).toBe('yza');
  });
  it(`should keep the same case`, () => {
    expect(caesar('Hi')).toBe('Ij');
  });
  it(`should preserve punctuation!`, () => {
    expect(caesar('hello!')).toBe('ifmmp!');
  });
    it(`should preserve numbers`, () => {
      expect(caesar('Ab5')).toBe('Bc5');
    });

});
