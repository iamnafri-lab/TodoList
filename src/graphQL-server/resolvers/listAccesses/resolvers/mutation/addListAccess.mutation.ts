import { PubSub } from 'graphql-subscriptions';
import { ListAccess } from "../../../../../database/Sequelize-Models/models/ListAccess";
import { User } from '../../../../../database/Sequelize-Models/models/User';
import { TaskList } from '../../../../../database/Sequelize-Models/models/TaskList';

// const pubsub = new PubSub();
import { pubsub } from '../../../../../app';
import { AuthenticationError } from 'apollo-server';



export const addListAccess = async (parent: any, { data }: any, {user}:any) => {
    
    if(!user) throw new AuthenticationError("User Must Login First.");

    const found = await ListAccess.findOne({ where: { userID : data.userID, tasklistID : data.tasklistID } });
    if (found) {
        throw new Error("User already has Access to TaskList");
    }
    
    const addedUser = await User.findByPk(data.userID);
    const foundUser = await User.findByPk(user.userID);
    const foundlist = await TaskList.findByPk(data.tasklistID);   
    let createNewAccount = ListAccess.build(data);

    let channel = `notify ${data.userID}`;
    //console.log(channel);

    pubsub.publish(channel, {notifyNewListAccess: { msg : `You are added to TaskList:(${foundlist.name} by ${foundUser.name}.`}});

    await createNewAccount.save();
    return addedUser;
    // return;
}