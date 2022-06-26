import { signup } from './resolvers/mutation/signup.mutation';
import gql from "graphql-tag";

export const typeDef = gql`

    extend type Query{
        getUsers:[User!]!
        getUserByID(id: ID!): User
        searchUser(req: String!): [User]!
    }

    extend type Mutation{
        # addNewUser(data: UserIP!): User
        login(data : LoginIP!): UserSelf
        signup(data : SignupIP!): UserSelf
    }


    input LoginIP{
        username: String!
        password: String!
    }

    input SignupIP{
        name: String!
        username: String!
        password: String!
    }
    input UserIP{
        username: String!
        password: String!
        name: String!
    }

    type User{
        id: ID
        name: String
        username: String
    }

    type UserSelf{
        token: String
        id: ID
        name: String
        username: String
        # password: String
    }
`;