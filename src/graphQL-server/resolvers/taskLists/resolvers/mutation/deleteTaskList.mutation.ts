import { AuthenticationError } from 'apollo-server-express';
//import { validateUser } from '../../../../../middleware/middleware';
import { TaskList } from "../../../../../database/Sequelize-Models/models/TaskList";
import { Task } from "../../../../../database/Sequelize-Models/models/Task";
import { ListAccess } from "../../../../../database/Sequelize-Models/models/ListAccess";

export const deleteTaskList = async (parent:any, args:any, {user}: any) => {
   //console.log(data.username);
//    const user = validateUser(token); 
    if(!user) throw new AuthenticationError("User Must Login First.");
   const found = await TaskList.findOne({ where: { id: args.id } });
   if (found.userID !== user.userID) {
       throw new Error("You are not Owner of this Tasklist, So you can't delete it.");
   }
   const deletedTask = await Task.destroy({where : {tasklistID : args.id}});
   const deletedtasklist = await TaskList.destroy({where : {id : args.id}});
   const deletedAccesses = await ListAccess.destroy({where :{tasklistID : args.id}});
   return true;
}