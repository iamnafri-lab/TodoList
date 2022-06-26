import sequelize from '../../connection';

import { Sequelize, Model, DataTypes } from "sequelize";

export class ListAccess extends Model {
  public id: number; // Note that the `null assertion` `!` is required in strict mode
  public userID: number;
  public tasklistID : number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ListAccess.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userID : {
        type : DataTypes.INTEGER, 
        allowNull : false, 
    }, 
    tasklistID : {
        type : DataTypes.INTEGER,
        allowNull : false, 
    }
  },
  {
    tableName: "listAccesses",
    sequelize,
  }
);