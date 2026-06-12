const createUser = require('./userCreation');

describe('createUser', () => {
  test('returns correct object', () => {
    expect(createUser('John', 25))
      .toEqual({
        name: 'John',
        age: 25
      });
  });
});