import { AuthenticationError } from 'apollo-server-express';
import { Task } from "../../../../../database/Sequelize-Models/models/Task";
import { argsToArgsConfig } from 'graphql/type/definition';


const TaskStatusType : any = {
    INCOMPLETE : "Incomplete", 
    COMPLETED : "Completed"
}
export const deleteTask = async (parent: any, args: any , {user}:any) => {
    //console.log(data.username);
    // const user = validateUser(token);
    if(!user) throw new AuthenticationError("User Must Login First.");
    const detetedTask = Task.destroy({where : {id : args.id}})
    return 
}