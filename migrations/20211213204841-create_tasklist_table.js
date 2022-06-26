'use strict';
const Sequelize = require("sequelize");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("taskLists", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      userID: {
        type: Sequelize.INTEGER(20),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("taskLists");
  }
};