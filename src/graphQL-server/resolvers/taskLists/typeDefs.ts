import gql from "graphql-tag";

export const typeDef = gql`

    extend type Query{
        getAllTasksWithTaskListID(input: TaskListIP!): [Task]!
    }

    extend type Mutation{
        createNewTaskList(name: String!): TaskList!
        deleteTaskList(id: ID!): Boolean
    }

    input TaskListIP {
        id: ID!
        filter: String
    }

    type TaskList{
        id: ID
        name: String
        userID: ID
    }
`;