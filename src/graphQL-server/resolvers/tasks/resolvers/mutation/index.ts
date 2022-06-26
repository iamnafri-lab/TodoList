import { addNewTask } from "./addNewTask.mutation";
import { markCompleted } from "./markCompleted.mutation";
import { deleteTask } from "./deleteTask.mutation";
import { send2Salesforce } from "./send2salesforce";

export let Mutation = {
    addNewTask,
    deleteTask,
    markCompleted,
    send2Salesforce,
}