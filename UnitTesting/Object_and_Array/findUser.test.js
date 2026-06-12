const {findUser} = require('./findUser')

const users = [
  { id: 1, name: 'Benat' },
  { id: 2, name: 'Abel' },
  { id: 3, name: 'Semhal' },
];

describe('findUser', () => {
  test('returns the user when found', () => {
    expect(findUser(users, 1)).toEqual({ id: 1, name: 'Benat' });
  });

   test('returns the user when found', () => {
    expect(findUser(users, 3)).toEqual({ id: 3, name: 'Semhal' });
  });

  test('returns undefined when user does not exist', () => {
    expect(findUser(users, 50)).toBeUndefined();
  });
});