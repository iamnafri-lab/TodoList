import sequelize from '../../connection';

import { Sequelize, Model, DataTypes } from "sequelize";

export class Task extends Model {
  public id: number; // Note that the `null assertion` `!` is required in strict mode.
  public status: string;
  public text : string;
  public userID : number; 
  public tasklistID : number; 
  public dueTime : Date; 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tasklistID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dueTime: {
        type: DataTypes.DATE
    },
  },
  {
    tableName: "tasks",
    sequelize,
  }
);