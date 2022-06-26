import { AuthenticationError } from 'apollo-server-express';
// import { User } from "../../../../../database/Sequelize-Models/models/User";
import { ListAccess } from "../../../../../database/Sequelize-Models/models/ListAccess";
import { User } from "../../../../../database/Sequelize-Models/models/User";

export const getUsersWithAccesstoThisTaskList = async (parent:any, args:any, {user}: any) => {
    //const user = validateUser(token);
    //console.log(user);
    if(!user) throw new AuthenticationError("User Must Login First.");
    let ListAccesses = await ListAccess.findAll({where : {tasklistID: args.id}});
    return ListAccesses;
}