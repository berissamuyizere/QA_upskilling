const divide = require('./division');

describe('divide', () => {
  test('successful division', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('division by zero', () => {
    expect(() => divide(10, 0))
      .toThrow('Cannot divide by zero');
  });
});