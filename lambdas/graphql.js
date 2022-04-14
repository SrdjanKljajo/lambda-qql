const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./src/schema')
const resolvers = require('./src/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.graphqlHandler = server.createHandler();