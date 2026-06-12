const {registerUser} = require ('./registerUser')

describe('registerUser', () => {

  // Positive Test
  test('should register a valid user', () => {
    expect(
      registerUser('Sara', 'sara@example.com', 25)
    ).toEqual({
      name: 'Sara',
      email: 'sara@example.com',
      age: 25
    });
  });

  // Negative Tests
  test('should throw error when name is missing', () => {
    expect(() =>
      registerUser('', 'sara@example.com', 25)
    ).toThrow('Name required');
  });

  test('should throw error for invalid email', () => {
    expect(() =>
      registerUser('Sara', 'saraexample.com', 25)
    ).toThrow('Invalid email');
  });

  test('should throw error when age is below 18', () => {
    expect(() =>
      registerUser('Sara', 'sara@example.com', 16)
    ).toThrow('Must be 18 or older');
  });

  // Boundary Tests
  test('should allow age exactly 18', () => {
    expect(
      registerUser('Sara', 'sara@example.com', 18)
    ).toEqual({
      name: 'Sara',
      email: 'sara@example.com',
      age: 18
    });
  });

  test('should reject age 17', () => {
    expect(() =>
      registerUser('Sara', 'sara@example.com', 17)
    ).toThrow('Must be 18 or older');
  });

  test('should allow age 19', () => {
    expect(
      registerUser('Sara', 'sara@example.com', 19)
    ).toEqual({
      name: 'Sara',
      email: 'sara@example.com',
      age: 19
    });
  });

});