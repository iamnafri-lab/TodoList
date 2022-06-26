//import { Subscription } from './index';
import { notifyNewListAccess } from "./notifyNewListAccess.subscription";

// function helper() {
//     return {subscribe : (parent: any, args: any, { pubsub }: { pubsub: any }) => {
//         setTimeout(()=> { pubsub.publish(`notify ${args.userID}`, { data : "something" });}, 100)
//         // pubsub.publish(`notify ${args.userID}`, { data : "something" });
//         return pubsub.asyncIterator(`notify ${args.userID}`);}
// };

export let Subscription = {
    notifyNewListAccess
}
