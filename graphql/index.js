const { gql } = require('apollo-server');
const fs = require('fs');

const magnets = fs.readFileSync(__dirname + '/torrents.magnet.graphql').toString();

const typeDefs = gql`
  ${magnets}
`;

module.exports = typeDefs;
