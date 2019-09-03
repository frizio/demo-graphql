import { makeExecutableSchema } from "graphql-tools";

// Cosa fare
import { resolvers } from "./resolvers";

// Cosa consultare
const typeDefs = `
    type Query {
        hello: String
        getAnInt: Int
        greet(name: String!): String
    }
`;

export default makeExecutableSchema(
    {
        typeDefs: typeDefs,
        resolvers: resolvers
    }
);

