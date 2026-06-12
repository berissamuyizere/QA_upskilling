const getUsers = require('./getUser');

describe('getUsers', () => {
  test('returns mocked users', async () => {
    const users = [
      { id: 1, name: 'John' }
    ];

    const api = {
      fetchUsers: jest.fn().mockResolvedValue(users)
    };

    const result = await getUsers(api);

    expect(result).toEqual(users);
    expect(api.fetchUsers)
      .toHaveBeenCalledTimes(1);
  });
});