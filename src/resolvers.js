
export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello from GraphQL';
        },
        getAnInt() {
            return 2;
        },
        greet(root, {name} ) {
            console.log(name);
            return `Hello ${name}.`;
        }
    }
};