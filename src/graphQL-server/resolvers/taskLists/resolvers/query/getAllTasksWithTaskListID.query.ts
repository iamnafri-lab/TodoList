import { Task } from "../../../../../database/Sequelize-Models/models/Task";
//import { ListAccess } from "../../../../../database/Sequelize-Models/models/ListAccess";
//import {} from "sequelize/types";

import { Op } from 'sequelize';


export const getAllTasksWithTaskListID = async (
  parent: any,
  { input }: any,
  {user}:any
) => {
  //const user = validateUser(token);
  let access = Task.findOne({
    where: { userID: user.userID, tasklistID: input.id },
  });
  if (!access) throw new Error("You dont Have Access to This TaskList.");

  if (!input.filter) {
    let tasks = await Task.findAll({ where: { tasklistID: input.id } });
    return tasks;
  }

  if (input.filter === "Completed") {
    let tasks = await Task.findAll({
      where: { tasklistID: input.id, status: "Completed" },
    });
    return tasks;
  }

  if (input.filter === "Incomplete") {
    let tasks = await Task.findAll({
      where: { tasklistID: input.id, status: "Incomplete" },
    });
    return tasks;
  }
  if (input.filter === "PastDue") {
    let now = new Date();
    console.log(now);
    let tasks = await Task.findAll({
      where: { tasklistID: input.id, dueTime: { [Op.lt]: new Date() } }
    });
    return tasks;
  }
};
