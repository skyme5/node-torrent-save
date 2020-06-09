require('dotenv').config();

const { ApolloServer, gql } = require('apollo-server');

const db = require('./utils/db');
const typeDefs = require('./graphql');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: JSON.parse(process.env.GRAPHQL_PLAYGROUND),
});

db.on('error', (err) => {
  console.error(err);
});

server.listen({
  port: process.env.PORT
}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
