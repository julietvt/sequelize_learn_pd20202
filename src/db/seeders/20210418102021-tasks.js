'use strict';
const moment = require('moment');

function generate_tasks(users) {
  const tasks = [];
  for (let i = 0; i < users.length; i++) {
    const x = Math.round(Math.random() * 10);
    for (let j = 0; j < x; j++) {
      tasks.push({
        userId: users[i].id,
        isDone: Math.random() < 0.5,
        value: `The user ${users[i].id} do task ${j + 1}`,
        deadline: moment('2021-03-01')
          .set('day', Math.round(Math.random() * 10))
          .toDate(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }
  return tasks;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('SELECT id FROM "Users"')
      .then(([results, metadata]) => {
        return queryInterface.bulkInsert('Tasks', generate_tasks(results), {});
      });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
