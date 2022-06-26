//const sequelize = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
});