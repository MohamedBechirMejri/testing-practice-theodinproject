import capitalize from '../capitalize';

describe('capitalize', () => {
  it(`should return "Hello World!"`, () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
  });

  it(`should capitalize different strings`, () => {
    expect(capitalize('theodinproject')).toBe('Theodinproject');
  });
});
