import sequelize from '../../connection';

import { Sequelize, Model, DataTypes } from "sequelize";

export class TaskList extends Model {
  public id: number; // Note that the `null assertion` `!` is required in strict mode.
  public name : string;
  public userID : number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TaskList.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  },
  {
    tableName: "taskLists",
    sequelize,
  }
);