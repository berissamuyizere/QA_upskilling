const validatePassword = require('./passwordValidation');

describe('validatePassword', () => {
  test('valid password', () => {
    expect(validatePassword('password123'))
      .toBe(true);
  });

  test('invalid password', () => {
    expect(() => validatePassword('short'))
      .toThrow('Password too short');
  });
});