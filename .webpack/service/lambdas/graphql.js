/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-lambda");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************!*\
  !*** ./lambdas/graphql.js ***!
  \****************************/
const {
  ApolloServer,
  gql
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda"); // Construct a schema, using GraphQL schema language


const typeDefs = gql`
  type Query {
    hello: String
  }
`; // Provide resolver functions for your schema fields

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({
    event,
    context
  }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  }),
  playground: {
    endpoint: '/dev/graphql'
  }
});
exports.graphqlHandler = server.createHandler();
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=graphql.js.map