const {transfer} = require('./mobileMoneyTransfer')


describe('transfer', () => {

  // Positive Tests
  test('should transfer 100 from a balance of 500', () => {
    expect(transfer(500, 100)).toBe(400);
  });

  test('should transfer 250 from a balance of 1000', () => {
    expect(transfer(1000, 250)).toBe(750);
  });

  // Negative Tests
  test('should throw an error when amount is less than 10', () => {
    expect(() => transfer(500, 5))
      .toThrow('Minimum transfer is 10');
  });

  test('should throw an error when amount is 0', () => {
    expect(() => transfer(500, 0))
      .toThrow('Minimum transfer is 10');
  });

  test('should throw an error when amount is negative', () => {
    expect(() => transfer(500, -20))
      .toThrow('Minimum transfer is 10');
  });

  test('should throw an error when amount exceeds balance', () => {
    expect(() => transfer(500, 600))
      .toThrow('Insufficient balance');
  });

  // Boundary Tests
  test('should allow transfer of exactly 10', () => {
    expect(transfer(500, 10)).toBe(490);
  });

  test('should reject transfer of 9', () => {
    expect(() => transfer(500, 9))
      .toThrow('Minimum transfer is 10');
  });

  test('should allow transfer of full balance', () => {
    expect(transfer(500, 500)).toBe(0);
  });

  test('should reject transfer of balance + 1', () => {
    expect(() => transfer(500, 501))
      .toThrow('Insufficient balance');
  });

  // Edge Cases
  test('should transfer when balance equals minimum transfer amount', () => {
    expect(transfer(10, 10)).toBe(0);
  });

  test('should reject transfer when balance is less than minimum transfer amount', () => {
    expect(() => transfer(5, 10))
      .toThrow('Insufficient balance');
  });

  test('should handle very large balances and transfers', () => {
    expect(transfer(100000, 99999)).toBe(1);
  });

});