import { createServer } from '@graphql-yoga/node'
import resolvers from './graphql/resolvers';

var server = new createServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers,
});

server.start(() => console.log('Ийгиликтуу иштети'));