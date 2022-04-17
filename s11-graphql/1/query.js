var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

module.exports = function(query) {
    console.log(query)
    // Run the GraphQL query '{ hello }' and print out the response
    return graphql({schema: schema, source: '{ hello }', rootValue: root}).then((response) => {
        return response
    });
}
