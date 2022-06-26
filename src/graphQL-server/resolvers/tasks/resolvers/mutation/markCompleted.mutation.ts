import { AuthenticationError } from 'apollo-server-express';
import { Task } from "../../../../../database/Sequelize-Models/models/Task";
import { argsToArgsConfig } from 'graphql/type/definition';


const TaskStatusType : any = {
    INCOMPLETE : "Incomplete", 
    COMPLETED : "Completed"
}
export const markCompleted = async (parent: any, args: any , {user}:any) => {
    //console.log(data.username);
    //const user = validateUser(token);
    if(!user) throw new AuthenticationError("User Must Login First.");
    const updated = await Task.update({status : TaskStatusType.COMPLETED}, {where : {id : args.id}});
 //s   console.log(updated);
    return true;
}