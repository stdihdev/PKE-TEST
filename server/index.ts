import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';;
import { ApolloServer } from 'apollo-server-express';
require('dotenv').config();
import { connectSequelize, sequelize } from './src/models/base'
import { schema } from './src/schema'

const port = process.env.PORT || 5000;

connectSequelize(sequelize)

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const server = new ApolloServer({
    introspection: true,
    playground: true,
    schema,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port }, () =>
    console.log(`� Server running at http://localhost:${port}`),
);

