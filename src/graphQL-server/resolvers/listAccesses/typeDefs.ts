import gql from "graphql-tag";

export const typeDef = gql`

    extend type Query{
        getListsWithAccessUsingUserID:[ListAccess]!
        getUsersWithAccesstoThisTaskList(id: ID!): [UsersWithAccess]!
    }

    extend type Mutation{
        addListAccess(data: ListAccessIP!): User
    }

    extend type Subscription{
        notifyNewListAccess: notifyMessage
    }

    type notifyMessage{
        msg: String!
    }

    input ListAccessIP{
        userID: ID!
        tasklistID: ID!
    }

    type ListAccess{
        taskList: TaskList
        userID: ID
        id: ID
    }

    type UsersWithAccess{
        user: User
        tasklistID: ID!
        id: ID!
    }

    type ListReturn{
        id: ID!
        userID: ID!
        tasklistID: ID!
    }
`;