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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authConfig);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUUvQixNQUFNRSxVQUFVRCwwREFBUUEsQ0FBQ0QsaURBQVVBLEVBQUU7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbWluZy1jaW5ldmVyc2UtYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aENvbmZpZyB9IGZyb20gJ0AvbGliL2F1dGgnO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aC9uZXh0JztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoQ29uZmlnKTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVH07Il0sIm5hbWVzIjpbImF1dGhDb25maWciLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_User_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User.model */ \"(rsc)/./src/models/User.model.ts\");\n\n\n\n\n\nconst authConfig = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            id: \"login\",\n            name: \"Sign in\",\n            credentials: {\n                username: {\n                    label: \"Nom d'utilisateur/E-mail\",\n                    type: \"text\",\n                    placeholder: \"Nom d'utilisateur/E-mail\"\n                },\n                password: {\n                    label: \"Mot de passe\",\n                    type: \"password\",\n                    placeholder: \"Mot de passe\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials || !credentials.username || !credentials.password) return null;\n                const dbUser = await _models_User_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    $or: [\n                        {\n                            username: credentials.username\n                        },\n                        {\n                            email: credentials.username\n                        }\n                    ]\n                });\n                if (!dbUser) return null;\n                const passwordMatch = bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, dbUser?.password);\n                if (await passwordMatch) {\n                    const dbUserWithoutPassword = {\n                        username: dbUser.username,\n                        email: dbUser.email,\n                        createdAt: dbUser.createdAt\n                    };\n                    return dbUserWithoutPassword;\n                }\n                return null;\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_API_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_API_CLIENT_SECRET,\n            async profile (profile) {\n                const dbUser = await _models_User_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    $or: [\n                        {\n                            username: profile.name\n                        },\n                        {\n                            email: profile.email\n                        }\n                    ]\n                });\n                if (dbUser) {\n                    return {\n                        id: profile.sub,\n                        name: profile.name,\n                        firstname: profile.given_name,\n                        lastname: profile.family_name,\n                        email: profile.email,\n                        image: profile.picture\n                    };\n                }\n                const newUser = new _models_User_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                    username: profile.name,\n                    email: profile.email,\n                    createdAt: new Date()\n                });\n                await newUser.save();\n                return {\n                    id: profile.sub,\n                    name: profile.name,\n                    firstname: profile.given_name,\n                    lastname: profile.family_name,\n                    email: profile.email,\n                    image: profile.picture\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ user, token }) {\n            if (user) {\n                token.user = {\n                    ...user\n                };\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token?.user) {\n                session.user = token.user;\n            }\n            return session;\n        }\n    }\n};\nfunction auth(...args) {\n    return (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(...args, authConfig);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07Z0JBQ2Z2QyxRQUFRdUMsSUFBSSxHQUFHQyxNQUFNRCxJQUFJO1lBQzNCO1lBQ0EsT0FBT3ZDO1FBQ1Q7SUFDRjtBQUNOLEVBQUM7QUFFTSxTQUFTeUMsS0FBSyxHQUFHQyxJQUFtSDtJQUN2SSxPQUFPN0MsMkRBQWdCQSxJQUFJNkMsTUFBTTNDO0FBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyZWFtaW5nLWNpbmV2ZXJzZS1hcHAvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IG1vbmdvb3NlLCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMsIFVzZXIsIGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICdAL21vZGVscy9Vc2VyLm1vZGVsJztcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsIE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcblxuZXhwb3J0IGNvbnN0IGF1dGhDb25maWc6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgaWQ6ICdsb2dpbicsXG4gICAgICAgICAgICBuYW1lOiAnU2lnbiBpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9tIGRcXCd1dGlsaXNhdGV1ci9FLW1haWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTm9tIGRcXCd1dGlsaXNhdGV1ci9FLW1haWwnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNb3QgZGUgcGFzc2UnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ01vdCBkZSBwYXNzZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzIHx8ICFjcmVkZW50aWFscy51c2VybmFtZSB8fCFjcmVkZW50aWFscy5wYXNzd29yZCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgYXMgdW5rbm93biBhcyBVc2VyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgJG9yOiBbeyB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUgfSwgeyBlbWFpbDogY3JlZGVudGlhbHMudXNlcm5hbWUgfV0gfSlcbiAgICAgICAgICAgICAgICBpZiAoIWRiVXNlcikgcmV0dXJuIG51bGwgYXMgdW5rbm93biBhcyBVc2VyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgZGJVc2VyPy5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKGF3YWl0IHBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYlVzZXJXaXRob3V0UGFzc3dvcmQ6IE9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRiVXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBkYlVzZXIuY3JlYXRlZEF0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYlVzZXJXaXRob3V0UGFzc3dvcmQgYXMgVXNlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgYXMgdW5rbm93biBhcyBVc2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9BUElfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0FQSV9DTElFTlRfU0VDUkVUIGFzIHN0cmluZyxcbiAgICAgICAgICAgIGFzeW5jIHByb2ZpbGUocHJvZmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgJG9yOiBbeyB1c2VybmFtZTogcHJvZmlsZS5uYW1lIH0sIHsgZW1haWw6IHByb2ZpbGUuZW1haWwgfV0gfSlcbiAgICAgICAgICAgICAgICBpZiAoZGJVc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvZmlsZS5zdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IHByb2ZpbGUuZ2l2ZW5fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBwcm9maWxlLmZhbWlseV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlck1vZGVsKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2ZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogcHJvZmlsZS5zdWIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBwcm9maWxlLmdpdmVuX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBwcm9maWxlLmZhbWlseV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHByb2ZpbGUucGljdHVyZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIGp3dCh7IHVzZXIgLCB0b2tlbiB9KSB7XG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRva2VuLnVzZXIgPSB7Li4udXNlcn1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRva2VuXG4gICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgICAgIGlmICh0b2tlbj8udXNlcikge1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlciBhcyBhbnlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICAgICAgfSxcbiAgICAgIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoKC4uLmFyZ3M6IFtHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0W1wicmVxXCJdLCBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0W1wicmVzXCJdXSB8IFtOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlXSB8IFtdKSB7XG4gICAgcmV0dXJuIGdldFNlcnZlclNlc3Npb24oLi4uYXJncywgYXV0aENvbmZpZylcbiAgfSJdLCJuYW1lcyI6WyJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiVXNlck1vZGVsIiwiYXV0aENvbmZpZyIsInNlc3Npb24iLCJzdHJhdGVneSIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiZGJVc2VyIiwiZmluZE9uZSIsIiRvciIsImVtYWlsIiwicGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJkYlVzZXJXaXRob3V0UGFzc3dvcmQiLCJjcmVhdGVkQXQiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQVBJX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9BUElfQ0xJRU5UX1NFQ1JFVCIsInByb2ZpbGUiLCJzdWIiLCJmaXJzdG5hbWUiLCJnaXZlbl9uYW1lIiwibGFzdG5hbWUiLCJmYW1pbHlfbmFtZSIsImltYWdlIiwicGljdHVyZSIsIm5ld1VzZXIiLCJEYXRlIiwic2F2ZSIsImNhbGxiYWNrcyIsImp3dCIsInVzZXIiLCJ0b2tlbiIsImF1dGgiLCJhcmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.model.ts":
/*!**********************************!*\
  !*** ./src/models/User.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { models } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userModelExists = models.User;\nif (!userModelExists) {\n    (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n        email: String,\n        username: String,\n        password: String,\n        createdAt: Date\n    }));\n}\nconst UserModel = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIubW9kZWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ2xELE1BQU0sRUFBRUcsTUFBTSxFQUFFLEdBQUdILGlEQUFRQTtBQUUzQixNQUFNSSxrQkFBa0JELE9BQU9FLElBQUk7QUFFbkMsSUFBSSxDQUFDRCxpQkFBaUI7SUFDcEJGLCtDQUFLQSxDQUFDLFFBQVEsSUFBSUQsNENBQU1BLENBQUM7UUFDdkJLLE9BQU9DO1FBQ1BDLFVBQVVEO1FBQ1ZFLFVBQVVGO1FBQ1ZHLFdBQVdDO0lBQ2I7QUFDRjtBQUVBLE1BQU1DLFlBQVlWLCtDQUFLQSxDQUFDO0FBRXhCLGlFQUFlVSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyZWFtaW5nLWNpbmV2ZXJzZS1hcHAvLi9zcmMvbW9kZWxzL1VzZXIubW9kZWwudHM/OWMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJ1xuY29uc3QgeyBtb2RlbHMgfSA9IG1vbmdvb3NlXG5cbmNvbnN0IHVzZXJNb2RlbEV4aXN0cyA9IG1vZGVscy5Vc2VyXG5cbmlmICghdXNlck1vZGVsRXhpc3RzKSB7XG4gIG1vZGVsKCdVc2VyJywgbmV3IFNjaGVtYSh7XG4gICAgZW1haWw6IFN0cmluZyxcbiAgICB1c2VybmFtZTogU3RyaW5nLFxuICAgIHBhc3N3b3JkOiBTdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBEYXRlLFxuICB9KSlcbn1cblxuY29uc3QgVXNlck1vZGVsID0gbW9kZWwoJ1VzZXInKVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWwiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInVzZXJNb2RlbEV4aXN0cyIsIlVzZXIiLCJlbWFpbCIsIlN0cmluZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjcmVhdGVkQXQiLCJEYXRlIiwiVXNlck1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.model.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmathis%2FDocuments%2Fdev%2Ftypescript%2Fstreaming-cineverse-app-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();