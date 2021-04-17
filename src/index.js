const { User } = require('./db/models');
const bcrypt = require('bcrypt');
/* createUser, getUserById, updateUser, deleteUser */
const fun_hash_passw = async (password) => {
  try {
    return bcrypt.hash(password, 10);
  } catch (e) {
    throw e;
  }
};

const createUser = async (data) => {
  try {
    data.passwordHash = await fun_hash_passw(data.password);
    const createsUser = await User.create(data);
    if (createUser) {
      return createUser.length();
    }
    throw new Error();
  } catch (e) {
    throw e;
  }
};

createUser({
  firstName: 'Test102',
  lastName: 'Surname102',
  email: 'test102@mail.com',
  login: 'testlogin102',
  password: 'qwerty123',
})
  .then(console.log)
  .catch(console.err);
