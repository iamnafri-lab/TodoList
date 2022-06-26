import { User } from "../../../../../database/Sequelize-Models/models/User";
//import { TaskList } from "../../../../../database/Sequelize-Models/models/TaskList";

export let UsersWithAccess = {
    user: async( parent: any, args: any) => {
        return await User.findByPk(parent.userID);
    },
}