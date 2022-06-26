import { AuthenticationError } from 'apollo-server-express';
import { validateUser } from './../../../../../middleware/middleware';
import { Task } from "../../../../../database/Sequelize-Models/models/Task";


const TaskStatusType : any = {
    INCOMPLETE : "Incomplete", 
    COMPLETED : "Completed"
}
export const addNewTask = async (parent: any, { data }: any , {user}:any) => {
    //console.log(data.username);
    // const user = validateUser(token);
    if(!user) throw new AuthenticationError("User Must Login First.");
    let temp = data; 
    temp.status = TaskStatusType.INCOMPLETE;
    let createNewAccount = Task.build({...data , userID : user.userID})
    //console.log(data);
    return await createNewAccount.save();
}