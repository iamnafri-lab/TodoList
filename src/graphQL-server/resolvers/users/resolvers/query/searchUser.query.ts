import { Op } from 'sequelize';
import { User } from "../../../../../database/Sequelize-Models/models/User";
//const OP = Sequelize.Op;


export const searchUser = async(parent : any, args: any) => {
    return await User.findAll({where : {name : {[Op.like]: `%${args.req}%`}}});
}