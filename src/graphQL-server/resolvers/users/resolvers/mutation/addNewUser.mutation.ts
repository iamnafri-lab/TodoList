import { User } from "../../../../../database/Sequelize-Models/models/User";


export const addNewUser = async (parent: any, { data }: any) => {
    //console.log(data.username);
    const found = await User.findOne({ where: { username: data.username } });
    //console.log(found);
    if (found) {
        throw new Error("Username Already Exist");
    }
    let createNewAccount = User.build(data)
    //console.log(data);
    return await createNewAccount.save();
}