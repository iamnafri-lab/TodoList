import { AuthenticationError } from 'apollo-server-express';
// import { User } from "../../../../../database/Sequelize-Models/models/User";
import { ListAccess } from "../../../../../database/Sequelize-Models/models/ListAccess";

export const getListsWithAccessUsingUserID = async (parent:any, args:any, {user}:any) => {
    // console.log(token);
    // const user = validateUser(token);
    //console.log({user});
    if(!user) throw new AuthenticationError("User Must Login First.");
    let ListAccesses = await ListAccess.findAll({where : {userID: user.userID}});
    if(!ListAccesses)
        throw new Error("User doesn't have access to any TaskList"); 
    return ListAccesses;
}