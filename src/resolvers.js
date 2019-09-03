import { tasks } from "./sample";
import User from "./models/User";


export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello from GraphQL';
        },
        getAnInt() {
            return 2;
        },
        greet(root, {name}, ctx ) {
            console.log(ctx);
            console.log(name);
            return `Hello ${name}.`;
        },
        tasks() {
            return tasks; 
        },
        async users() {
            return await User.find(); 
        },
    },

    Mutation: {
        createTask(_, {input}) {
            console.log(input);
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, {input}) {
            const newUser = new User(input);
            await newUser.save();
            console.log(newUser);
            return newUser;
        }
    }

};