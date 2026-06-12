async function getUsers(api) {
  return await api.fetchUsers();
}

module.exports = getUsers;