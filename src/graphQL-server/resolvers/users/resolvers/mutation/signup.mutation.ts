import { User } from './../../../../../database/Sequelize-Models/models/User';
// import { User } from "../../../../../database/Sequelize-Models/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-express";

export const signup = async (parent: any, { data }: any) => {
  const found = await User.findOne({ where: { username: data.username } });
  if (found) {
    throw new AuthenticationError("Username Already Exist, Can't SignUP");
  }

  data.password = await bcrypt.hash(data.password, 10);
  let createNewAccount = User.build(data);
  let acc = await createNewAccount.save();
  console.log(acc.dataValues);
  //console.log(createNewAccount); 
  //console.log(createNewAccount.id);
  const token = jwt
    .sign(
      {
        userID: acc.dataValues.id,
        username: acc.dataValues.username,
      },
      "MySecretKEY",
      { algorithm: "HS256", subject: `${acc.dataValues.id}`, expiresIn: "1d" }
    );
    //console.log(returndat);
  return {
    token, 
    ...acc.dataValues,
  };
};
