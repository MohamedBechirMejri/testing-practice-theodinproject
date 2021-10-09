import calculator from '../calculator';

it(`should return "true"`, () => {
  expect(typeof calculator === 'object').toBe(true);
});

it(`should return "5"`, () => {
  expect(calculator.add(2, 3)).toBe(5);
});

it(`should return "6"`, () => {
  expect(calculator.add(3,3)).toBe(6);
});
