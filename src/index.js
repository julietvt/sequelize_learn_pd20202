const { User, Task } = require('./db/models');
const bcrypt = require('bcrypt');
/* createUser, getUserById, updateUser, deleteUser */

/*
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
*/

/*getUserById*/
/*
const getUserById = async (id) => {
  try {
    return (await User.findByPk(id)).get();
  } catch (e) {
    throw e;
  }
};

getUserById(101).then(console.log).catch(console.error);
*/
/*
const updateUser = async (update_data, condition) => {
  try {
    await User.update(update_data, {
      where: condition,
    });
  } catch (e) {
    throw e;
  }
};

updateUser({ lastName: 'Peterson' }, { lastName: 'Surname0' })
  .then(console.log)
  .catch(console.err);

const deleteUser = async (condition) => {
  try {
    await User.destroy({
      where: condition,
    });
  } catch (e) {
    throw e;
  }
};

deleteUser({ lastName: 'Peterson' });
*/

/*
В проекте выполнить запросы:
1. получить пользователей users c их заданиями tasks 
2. получить задания tasks с owners
Результаты вывести с помощью map()


PS используйте метод findAll в запросах
в секции options прописывайте критерии:
where - условие, include - табличку с которой связываем ассициацию
например,
выполненные задачи:
where: { isDone: true}
*/

async function getUserWithTasks() {
  try {
    const result = await User.findAll({
      limit: 10,
      attributes: { exclude: ['password'] },
    });
    return result.map((item) => item.get());
  } catch (e) {}
}

getUserWithTasks().then(console.log);

async function getTasksWithOwners() {
  try {
    const result = await Task.findAll({
      limit: 10,
      where: {
        isDone: true,
      },
      include: [
        {
          model: User,
          as: 'owner',
        },
      ],
    });
    return result.map((item) => item.get());
  }
}
