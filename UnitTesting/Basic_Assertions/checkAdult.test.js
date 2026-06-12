const {isAdult} = require('./checkAdult');

describe('isAdult', () => {
  test('age 18 is an adult (boundary)', () => {
    expect(isAdult(18)).toBe(true);
  });

  test('age 25 is an adult', () => {
    expect(isAdult(25)).toBe(true);
  });

  test('age 17 is not an adult', () => {
    expect(isAdult(17)).toBe(false);
  });

  test('age 0 is not an adult', () => {
    expect(isAdult(0)).toBe(false);
  });
});