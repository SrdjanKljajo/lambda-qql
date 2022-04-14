const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
    zdravo: Int
  }
`;

module.exports = typeDefs