function validatePassword(password) {
  if (password.length < 8) {
    throw new Error('Password too short');
  }

  return true;
}

module.exports = validatePassword;