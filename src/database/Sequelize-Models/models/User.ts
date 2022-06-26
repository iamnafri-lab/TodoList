import sequelize from '../../connection';

import { Sequelize, Model, DataTypes } from "sequelize";

export class User extends Model {
  public id: number;
  public name : string;
  public username : string;
  public password : string; 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
        type: new DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(50),
        allowNull: false
    },
    username: {
        type: new DataTypes.STRING(35),
        allowNull: false,
        unique: true
    },
    password: {
        type: new DataTypes.STRING(70),
        allowNull: false
    },
  },
  {
    tableName: "users",
    sequelize,
  }
);

// async function doStuffWithUserModel() {
//   const newUser = await User.create({
//     name: "Johnny",
//     preferredName: "John",
//   });
//   console.log(newUser.id, newUser.name, newUser.preferredName);

//   const foundUser = await User.findOne({ where: { name: "Johnny" } });
//   if (foundUser === null) return;
//   console.log(foundUser.name);
// }



