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
        allowNull: false,
        unique: true,
    },
    userID: {
        type: Sequelize.INTEGER(20),
        allowNull: false
    },
});