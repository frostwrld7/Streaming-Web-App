"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mathis_Documents_dev_typescript_streaming_cineverse_app_v2_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mathis_Documents_dev_typescript_streaming_cineverse_app_v2_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hdGhpcyUyRkRvY3VtZW50cyUyRmRldiUyRnR5cGVzY3JpcHQlMkZzdHJlYW1pbmctY2luZXZlcnNlLWFwcC12MiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtYXRoaXMlMkZEb2N1bWVudHMlMkZkZXYlMkZ0eXBlc2NyaXB0JTJGc3RyZWFtaW5nLWNpbmV2ZXJzZS1hcHAtdjImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUQ7QUFDdEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJlYW1pbmctY2luZXZlcnNlLWFwcC8/MjhiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWF0aGlzL0RvY3VtZW50cy9kZXYvdHlwZXNjcmlwdC9zdHJlYW1pbmctY2luZXZlcnNlLWFwcC12Mi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hdGhpcy9Eb2N1bWVudHMvZGV2L3R5cGVzY3JpcHQvc3RyZWFtaW5nLWNpbmV2ZXJzZS1hcHAtdjIvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authConfig);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUUvQixNQUFNRSxVQUFVRCwwREFBUUEsQ0FBQ0QsaURBQVVBLEVBQUU7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbWluZy1jaW5ldmVyc2UtYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aENvbmZpZyB9IGZyb20gJ0AvbGliL2F1dGgnO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aC9uZXh0JztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoQ29uZmlnKTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9OyJdLCJuYW1lcyI6WyJhdXRoQ29uZmlnIiwiTmV4dEF1dGgiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_prismaClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/prismaClient */ \"(rsc)/./src/utils/prismaClient.ts\");\n\n\n\n\n\nconst authConfig = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            id: \"login\",\n            name: \"Sign in\",\n            credentials: {\n                username: {\n                    label: \"Nom d'utilisateur/E-mail\",\n                    type: \"text\",\n                    placeholder: \"Nom d'utilisateur/E-mail\"\n                },\n                password: {\n                    label: \"Mot de passe\",\n                    type: \"password\",\n                    placeholder: \"Mot de passe\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials || !credentials.username || !credentials.password) return null;\n                const dbUser = await _utils_prismaClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.findFirst({\n                    where: {\n                        OR: [\n                            {\n                                username: credentials.username\n                            },\n                            {\n                                email: credentials.username\n                            }\n                        ]\n                    }\n                });\n                if (!dbUser) return null;\n                const passwordMatch = bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, dbUser?.password);\n                if (await passwordMatch) {\n                    const dbUserWithoutPassword = {\n                        username: dbUser.username,\n                        email: dbUser.email,\n                        createdAt: dbUser.createdAt,\n                        likes: dbUser.likes,\n                        dislikes: dbUser.dislikes\n                    };\n                    return dbUserWithoutPassword;\n                }\n                return null;\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_API_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_API_CLIENT_SECRET,\n            async profile (profile) {\n                const dbUser = await _utils_prismaClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.findFirst({\n                    where: {\n                        OR: [\n                            {\n                                username: profile.name\n                            },\n                            {\n                                email: profile.email\n                            }\n                        ]\n                    }\n                });\n                if (dbUser) {\n                    return {\n                        id: profile.sub,\n                        name: profile.name,\n                        firstname: profile.given_name,\n                        lastname: profile.family_name,\n                        email: profile.email,\n                        image: profile.picture\n                    };\n                }\n                await _utils_prismaClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.create({\n                    data: {\n                        email: profile.email,\n                        username: profile.name,\n                        createdAt: Date.now()\n                    }\n                });\n                return {\n                    id: profile.sub,\n                    name: profile.name,\n                    firstname: profile.given_name,\n                    lastname: profile.family_name,\n                    email: profile.email,\n                    image: profile.picture\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ user, token }) {\n            if (user) {\n                token.user = {\n                    ...user\n                };\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token?.user) {\n                session.user = token.user;\n            }\n            return session;\n        }\n    }\n};\nfunction auth(...args) {\n    return (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(...args, authConfig);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1IrQixNQUFNL0IsSUFBSSxHQUFHO29CQUFFLEdBQUdBLElBQUk7Z0JBQUM7WUFDekI7WUFDQSxPQUFPK0I7UUFDUjtRQUNELE1BQU01QyxTQUFRLEVBQUVBLE9BQU8sRUFBRTRDLEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPL0IsTUFBTTtnQkFDZmIsUUFBUWEsSUFBSSxHQUFHK0IsTUFBTS9CLElBQUk7WUFDM0I7WUFDQSxPQUFPYjtRQUNUO0lBQ0Y7QUFDTixFQUFDO0FBRU0sU0FBUzZDLEtBQUssR0FBR0MsSUFBbUg7SUFDdkksT0FBT2pELDJEQUFnQkEsSUFBSWlELE1BQU0vQztBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbWluZy1jaW5ldmVyc2UtYXBwLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcbmltcG9ydCBtb25nb29zZSwgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zLCBVc2VyLCBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnQC91dGlscy9wcmlzbWFDbGllbnQnXG5cblxuZXhwb3J0IGNvbnN0IGF1dGhDb25maWc6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgaWQ6ICdsb2dpbicsXG4gICAgICAgICAgICBuYW1lOiAnU2lnbiBpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9tIGRcXCd1dGlsaXNhdGV1ci9FLW1haWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTm9tIGRcXCd1dGlsaXNhdGV1ci9FLW1haWwnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNb3QgZGUgcGFzc2UnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ01vdCBkZSBwYXNzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzIHx8ICFjcmVkZW50aWFscy51c2VybmFtZSB8fCFjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCBhcyB1bmtub3duIGFzIFVzZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy51c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaWYgKCFkYlVzZXIpIHJldHVybiBudWxsIGFzIHVua25vd24gYXMgVXNlcjtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZE1hdGNoID0gYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIGRiVXNlcj8ucGFzc3dvcmQgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAoYXdhaXQgcGFzc3dvcmRNYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRiVXNlcldpdGhvdXRQYXNzd29yZDogT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGJVc2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZGJVc2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGRiVXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIGxpa2VzOiBkYlVzZXIubGlrZXMsXG4gICAgICAgICAgICAgICAgICAgIGRpc2xpa2VzOiBkYlVzZXIuZGlzbGlrZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRiVXNlcldpdGhvdXRQYXNzd29yZCBhcyBVc2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCBhcyB1bmtub3duIGFzIFVzZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0FQSV9DTElFTlRfSUQgYXMgc3RyaW5nLFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQVBJX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuICAgICAgICAgICAgYXN5bmMgcHJvZmlsZShwcm9maWxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogcHJvZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgaWYgKGRiVXNlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBwcm9maWxlLmdpdmVuX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogcHJvZmlsZS5mYW1pbHlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHByb2ZpbGUucGljdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLm5hbWUgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcm9maWxlLnN1YixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IHByb2ZpbGUuZ2l2ZW5fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IHByb2ZpbGUuZmFtaWx5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYXN5bmMgand0KHsgdXNlciAsIHRva2VuIH0pIHtcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdG9rZW4udXNlciA9IHsgLi4udXNlciB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgICAgICBpZiAodG9rZW4/LnVzZXIpIHtcbiAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHRva2VuLnVzZXIgYXMgYW55XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH0sXG4gICAgICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aCguLi5hcmdzOiBbR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFtcInJlcVwiXSwgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFtcInJlc1wiXV0gfCBbTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZV0gfCBbXSkge1xuICAgIHJldHVybiBnZXRTZXJ2ZXJTZXNzaW9uKC4uLmFyZ3MsIGF1dGhDb25maWcpXG4gIH0iXSwibmFtZXMiOlsiR29vZ2xlUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiZ2V0U2VydmVyU2Vzc2lvbiIsInByaXNtYSIsImF1dGhDb25maWciLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImRiVXNlciIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIk9SIiwiZW1haWwiLCJwYXNzd29yZE1hdGNoIiwiY29tcGFyZSIsImRiVXNlcldpdGhvdXRQYXNzd29yZCIsImNyZWF0ZWRBdCIsImxpa2VzIiwiZGlzbGlrZXMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQVBJX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9BUElfQ0xJRU5UX1NFQ1JFVCIsInByb2ZpbGUiLCJzdWIiLCJmaXJzdG5hbWUiLCJnaXZlbl9uYW1lIiwibGFzdG5hbWUiLCJmYW1pbHlfbmFtZSIsImltYWdlIiwicGljdHVyZSIsImNyZWF0ZSIsImRhdGEiLCJEYXRlIiwibm93IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhdXRoIiwiYXJncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/prismaClient.ts":
/*!***********************************!*\
  !*** ./src/utils/prismaClient.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvcHJpc21hQ2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUUvQixpRUFBZUMsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbWluZy1jaW5ldmVyc2UtYXBwLy4vc3JjL3V0aWxzL3ByaXNtYUNsaWVudC50cz9mMjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/prismaClient.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();