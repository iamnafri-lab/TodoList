'use strict';
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('users', [{
          name: "Harry Potter",
          username: "harrypotter",
          password: bcrypt.hashSync('potter123', 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Draco Malfoy",
          username: "dracomalfoy",
          password: bcrypt.hashSync('malfoy123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ron Weasley",
          username: "ronweasley",
          password: bcrypt.hashSync('weasley123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {}),
      queryInterface.bulkInsert('taskLists', [{
          name: "Monday List",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tuesday List",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wednesday List",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}),
      queryInterface.bulkInsert('tasks', [{
          userID: 1,
          text: "This is task 1 for tasklist : 1 text from seeder data",
          status: "Incomplete",
          tasklistID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 1,
          text: "This is task 1 for tasklist : 2 text from seeder data",
          status: "Incomplete",
          tasklistID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 1,
          text: "This is task 1 for tasklist : 3 text from seeder data",
          status: "Incomplete",
          tasklistID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}),
      queryInterface.bulkInsert('listAccesses', [{
          userID: 2,
          tasklistID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 2,
          tasklistID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 3,
          tasklistID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 1,
          tasklistID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 2,
          tasklistID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userID: 3,
          tasklistID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {})
    ])
  },

  down: (queryInterface, Sequelize) => {

    Example: return queryInterface.bulkDelete('users', null, {});
  }
};