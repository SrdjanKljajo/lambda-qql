/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lambdas/graphql.js":
/*!****************************!*\
  !*** ./lambdas/graphql.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { ApolloServer, gql } = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\nconst { ApolloServerPluginLandingPageGraphQLPlayground } = __webpack_require__(/*! apollo-server-core */ \"apollo-server-core\");\n\n// Construct a schema, using GraphQL schema language\nconst typeDefs = gql`\n  type Query {\n    hello: String\n  }\n`;\n\n// Provide resolver functions for your schema fields\nconst resolvers = {\n  Query: {\n    hello: () => 'Hello world!',\n  },\n};\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n\n  // By default, the GraphQL Playground interface and GraphQL introspection\n  // is disabled in \"production\" (i.e. when `process.env.NODE_ENV` is `production`).\n  //\n  // If you'd like to have GraphQL Playground and introspection enabled in production,\n  // install the Playground plugin and set the `introspection` option explicitly to `true`.\n  introspection: true,\n  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],\n});\n\nexports.graphqlHandler = server.createHandler();\n\n//# sourceURL=webpack://serverless/./lambdas/graphql.js?");

/***/ }),

/***/ "apollo-server-core":
/*!*************************************!*\
  !*** external "apollo-server-core" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-core");

/***/ }),

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lambdas/graphql.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;