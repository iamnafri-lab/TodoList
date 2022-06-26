//const sequelize = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("Task", {
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
    userID: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    tasklistID: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    dueTime: {
        type: Sequelize.DATE
    },
});