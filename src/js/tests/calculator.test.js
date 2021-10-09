import calculator from '../calculator';

it(`should return "true"`, () => {
  expect(typeof calculator === 'object').toBe(true);
});

it(`should return "5"`, () => {
  expect(calculator.add(2, 3)).toBe(5);
});

it(`should return "6"`, () => {
  expect(calculator.add(3, 3)).toBe(6);
});

it(`should return "1"`, () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

it(`should return "0"`, () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

it(`should return "1"`, () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

it(`should return ""`, () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

it(`should return "10"`, () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

it(`should return "0"`, () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});
