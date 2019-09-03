import { tasks } from "./sample";

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
        },
        tasks() {
            return tasks; 
        },
    },

    Mutation: {
        createTask(_, {input}) {
            console.log(input);
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }

};