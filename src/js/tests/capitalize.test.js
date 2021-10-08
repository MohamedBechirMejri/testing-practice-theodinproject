import capitalize from '../capitalize'


it(`should return "Hello World!"`, () => {
  expect(capitalize('hello world!')).toBe('Hello world!');
});

it(`should return "something"`, () => {
  expect(capitalize('theodinproject')).toBe('Theodinproject');
});
