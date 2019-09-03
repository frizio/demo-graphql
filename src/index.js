import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

const app = express();

connect();
 
// Middleware
 
app.use(
    '/graphql',
    graphqlHTTP(
        {
            graphiql: true,
            schema: schema
        }
    )
);

const port = 3000;

app.get(
    '/', 
    (req, res) => {
        res.json(
            {message: 'Hello World!'}
        )
    }
);

app.listen(
    port,
    () => {
        console.log(`Server listen on port ${port}`);   
    }
);