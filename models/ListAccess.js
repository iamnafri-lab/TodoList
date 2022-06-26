//const sequelize = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("ListAccess", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userID : {
        type : Sequelize.INTEGER(11), 
        allowNull : false, 
    }, 
    tasklistID : {
        type : Sequelize.INTEGER(11),
        allowNull : false, 
    }
});