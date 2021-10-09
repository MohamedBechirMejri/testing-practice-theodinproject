import calculator from '../calculator';

describe('calculator', () => {
  it(`should be an object"`, () => {
    expect(typeof calculator === 'object').toBe(true);
  });

  it(`should add`, () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it(`should add`, () => {
    expect(calculator.add(3, 3)).toBe(6);
  });

  it(`should subtract`, () => {
    expect(calculator.subtract(5, 4)).toBe(1);
  });

  it(`should subtract`, () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });

  it(`should divide`, () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  it(`should divide`, () => {
    expect(calculator.divide(8, 4)).toBe(2);
  });

  it(`should multiply`, () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });

  it(`should multiply`, () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });
});
