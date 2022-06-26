import { AuthenticationError } from 'apollo-server-express';
import { validateUser } from './../../../../../middleware/middleware';
import { TaskList } from "../../../../../database/Sequelize-Models/models/TaskList";
import { ListAccess } from "../../../../../database/Sequelize-Models/models/ListAccess";

export const createNewTaskList = async (parent:any, args:any, {user}: any) => {
   //console.log(data.username);
//    const user = validateUser(token); 
    if(!user) throw new AuthenticationError("User Must Login First.");
   const found = await TaskList.findOne({ where: { name: args.name } });
   //console.log(found);
   if (found) {
       throw new Error("TaskList Already Exist on Server");
   }
   let createNewAccount = TaskList.build({name: args.name , userID : user.userID});
    let createdlist = await createNewAccount.save();
    //console.log(createdlist);
   let newlistaccess = ListAccess.build({userID : user.userID, tasklistID :  createdlist.dataValues.id});
   await newlistaccess.save();
   //console.log(data);
   return createdlist;
}