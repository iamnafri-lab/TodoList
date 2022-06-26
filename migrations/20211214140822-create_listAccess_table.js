'use strict';
const Sequelize = require("sequelize");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("listAccesses", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      tasklistID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("listAccesses");
  }
};