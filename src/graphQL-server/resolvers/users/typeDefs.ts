import gql from "graphql-tag";

export const typeDef = gql`
	extend type Query {
		test(input: String): String
	}
`;