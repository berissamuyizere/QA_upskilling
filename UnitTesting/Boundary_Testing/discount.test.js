const {qualifiesForDiscount} = require('./discount');

describe('qualifiesForDiscount', () => {
  test('999 does not qualify (just below threshold)', () => {
    expect(qualifiesForDiscount(999)).toBe(false);
  });

  test('1000 qualifies (boundary)', () => {
    expect(qualifiesForDiscount(1000)).toBe(true);
  });

  test('1001 qualifies (above threshold)', () => {
    expect(qualifiesForDiscount(1001)).toBe(true);
  });
});