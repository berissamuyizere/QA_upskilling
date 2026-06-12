const isValidUsername = require('./userName');

describe('isValidUsername', () => {
  test('4 characters', () => {
    expect(isValidUsername('john')).toBe(false);
  });

  test('5 characters', () => {
    expect(isValidUsername('john1')).toBe(true);
  });

  test('6 characters', () => {
    expect(isValidUsername('john12')).toBe(true);
  });
});