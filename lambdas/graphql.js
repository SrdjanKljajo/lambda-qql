const { ApolloServer } = require('apollo-server-lambda');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const typeDefs = require('./src/schema')
const resolvers = require('./src/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
   plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
        // options
    }) 
]
})

exports.graphqlHandler = server.createHandler();