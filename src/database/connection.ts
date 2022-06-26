// const Sequelize = require('sequelize');
import { Sequelize } from "sequelize";
// const Sequelize = require('sequelize');

const sequelize = new Sequelize("Butterfly", "SA", "MyPassword123", {
    host: '127.0.0.1',
    dialect: "mssql",
    logging: false,
});

export {sequelize as default};
