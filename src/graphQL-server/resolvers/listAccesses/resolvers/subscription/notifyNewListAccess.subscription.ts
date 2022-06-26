import { validateUser } from './../../../../../middleware/middleware';
//import { PubSub } from 'graphql-subscriptions';
// import { PubSub } from 'graphql-subscriptions';

//const pubsub = new PubSub(); 

import { pubsub } from "../../../../../app";
import { AuthenticationError } from 'apollo-server';

export let notifyNewListAccess = {
subscribe: (parent:any, args:any, {user}:any, info:any) => {
    // console.log("called sub");
    
    // const user = validateUser(token);
    //console.log("AM I here");
    //console.log(args.userID);
    // console.log("listning for changes.");
    if(!user) throw new AuthenticationError("User Must Login First.");
    let channel = `notify ${user.userID}`;
    // console.log( {channel});
    // console.log(channel); 
    // setTimeout(() => {
    //     const notifyMessage = {
    //         msg : "some text here",
    //     } 
    //     pubsub.publish(channel, { notifyMessage});
    // }, 100);
    // console.log({subcription : "Subscribed to notifyNewAccess"});
    return pubsub.asyncIterator(channel);
}
}