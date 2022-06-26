import { User } from "../../../../../database/Sequelize-Models/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const login = async (parent: any, { data }: any) => {
    const found = await User.findOne({ where: { username: data.username } });
    if (found) {
        //console.log(found);
        const valid = await bcrypt.compare(data.password, found.password);
        if (!valid) {
            throw new Error("Incorrect UserName or Password");
        }
        const token = jwt.sign({ userID: found.id, username: found.username }, "MySecretKEY", { algorithm: "HS256", subject: `${found.id}`, expiresIn: "1d" }).toString();
       //console.log(token);
        return {
            token,
            ...found.dataValues
        }
    }
    throw new Error("Username doesn't Exist.");
}