import { User } from "../../../../../database/Sequelize-Models/models/User";

export const getUsers  = async(parent : any, args: any) => {
    return await User.findAll();

}