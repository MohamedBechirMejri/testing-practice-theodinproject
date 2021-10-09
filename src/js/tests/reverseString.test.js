import reverseString from '../reverseString';

it(`should return "!olleH"`, () => {
    expect(reverseString('Hello!')).toBe('!olleH');
});

it(`should return "tset"`, () => {
  expect(reverseString('test')).toBe('tset');
});
