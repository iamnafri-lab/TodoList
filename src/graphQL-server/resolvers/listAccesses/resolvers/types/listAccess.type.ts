import { User } from "../../../../../database/Sequelize-Models/models/User";
import { TaskList } from "../../../../../database/Sequelize-Models/models/TaskList";

export let ListAccess = {
    taskList: async( parent: any, args: any) => {
        return await TaskList.findByPk(parent.tasklistID);
    },
}