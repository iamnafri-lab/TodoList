'use strict';
const Sequelize = require("sequelize");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("tasks", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      dueTime: {
        type: Sequelize.DATE
      },
      userID: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      tasklistID: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("tasks");
  }
};