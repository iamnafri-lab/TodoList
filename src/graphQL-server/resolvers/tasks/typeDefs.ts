import gql from "graphql-tag";

export const typeDef = gql`
    extend type Mutation{
        addNewTask(data: TaskIP!): Task
        deleteTask(id: ID!): Task
        markCompleted(id: ID!): Boolean
        send2Salesforce(input: SalesforceIP!): Result
    }

    type Task{
        id: ID!
        text: String!
        userID: ID!
        tasklistID: ID
        status: taskStatusType!
        dueTime: String
    }

    input SalesforceIP{
        sf_username: String!
        sf_password: String!
        sf_token: String!
        sf_text: String!
        sf_date: Date!
    }

    type Result{
        result: String!
    }
    input TaskIP{
        text: String!
        dueTime: DateTime!
        tasklistID: ID!
    }

    enum taskStatusType{
        Incomplete
        Completed
    }
`;