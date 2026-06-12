const {withdraw} = require('./bank')

describe('withdraw', () => {

  // Positive Test
  test('should withdraw 100 from 500', () => {
    expect(withdraw(500, 100)).toBe(400);
  });

  // Negative Tests
  test('should throw an error when amount exceeds balance', () => {
    expect(() => withdraw(500, 600))
      .toThrow('Insufficient funds');
  });

  test('should throw an error when amount is 0', () => {
    expect(() => withdraw(500, 0))
      .toThrow('Invalid amount');
  });

  test('should throw an error when amount is negative', () => {
    expect(() => withdraw(500, -50))
      .toThrow('Invalid amount');
  });

  // Boundary Tests
  test('should allow withdrawing the full balance', () => {
    expect(withdraw(500, 500)).toBe(0);
  });

  test('should allow withdrawing 1', () => {
    expect(withdraw(500, 1)).toBe(499);
  });

  test('should allow withdrawing balance minus 1', () => {
    expect(withdraw(500, 499)).toBe(1);
  });

});