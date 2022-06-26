import { User } from "../../../../../database/Sequelize-Models/models/User";

export const getUserByID = async (parent:any, args:any) => {
    let acc = await User.findByPk(args.id);
    if(!acc)
        throw new Error('No User Found with ID'); 
    return acc;
}