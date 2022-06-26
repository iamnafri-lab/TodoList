'use strict';
const Sequelize = require("sequelize");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING(50),
      username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("users");
  }
};