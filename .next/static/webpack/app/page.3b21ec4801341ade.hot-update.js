"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_spiderMan_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/spiderMan.jpg */ \"(app-pages-browser)/./src/public/spiderMan.jpg\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/logo.png */ \"(app-pages-browser)/./src/public/logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_batman_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/batman.jpg */ \"(app-pages-browser)/./src/public/batman.jpg\");\n/* harmony import */ var _public_thor_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/thor.jpg */ \"(app-pages-browser)/./src/public/thor.jpg\");\n/* harmony import */ var _public_deadpool_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/public/deadpool.jpg */ \"(app-pages-browser)/./src/public/deadpool.jpg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const images = [\n        _public_spiderMan_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _public_batman_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _public_thor_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _public_deadpool_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentImageIndex((prevIndex)=>(prevIndex + 1) % images.length);\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-between min-h-screen p-24\",\n        style: {\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"viewport\",\n                content: \"width=device-width, initial-scale=1\"\n            }, void 0, false, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"preconnect\",\n                href: \"https://fonts.googleapis.com\"\n            }, void 0, false, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"preconnect\",\n                href: \"https://fonts.gstatic.com\"\n            }, void 0, false, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                href: \"https://fonts.googleapis.com/css2?family=Lalezar&display=swap\",\n                rel: \"stylesheet\"\n            }, void 0, false, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-carousel\": \"slide\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        src: images[currentImageIndex].src,\n                        fill: true,\n                        alt: \"hero\",\n                        className: \"w-full h-full object-cover object-center z-9 transition-opacity duration-1000\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 bg-black opacity-65\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden absolute w-72 top-2 left-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        src: _public_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                        alt: \"logo\",\n                        className: \"rounded-full\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-white font-lalezar text-4xl relative bottom-[38px] left-14\",\n                        children: \"Cin\\xe9Verse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-4 right-4 hover:scale-110 transition duration-500\",\n                children: session.status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/profile\",\n                    className: \"text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000] w-40\",\n                    children: session.data.user.username.slice(0, 12)\n                }, void 0, false, {\n                    fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/login\",\n                    className: \"text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]\",\n                    children: \"Se connecter\"\n                }, void 0, false, {\n                    fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-1/2 bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"xl:text-8xl text-6xl font-lalezar\",\n                        children: \"Cin\\xe9Verse™\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-normal font-roboto xl:w-[600px] w-[400px]\",\n                        children: [\n                            \"Explorez Cin\\xe9Verse pour une vari\\xe9t\\xe9 de films, s\\xe9ries et animes, votre \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-[#FE0000] text-shadow-[0_4px_8px_#FE0000] shadow-red-500/50 font-bold\",\n                                children: \"passeport\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 145\n                            }, this),\n                            \" pour le divertissement sans limites.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 3\n                    }, this),\n                    session.status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/films\",\n                        className: \"text-2xl w-48 absolute font-bold left-32 block font-roboto border-2 border-transparent rounded-xl p-1 px-2 bg-[#FE0000] hover:scale-110 transition duration-500\",\n                        children: \"Commencer \\xe0 regarder !\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/login\",\n                        className: \"text-2xl w-48 xl:w-full absolute font-bold left-32 block font-roboto border-2 border-transparent rounded-xl p-1 px-2 bg-[#FE0000] hover:scale-110 transition duration-500\",\n                        children: \"Commencer \\xe0 regarder !\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mathis/Documents/dev/typescript/streaming-cineverse-app-v2/src/app/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"0NTdJ97OD6DCBWxsQctk8e4EScM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFFVjtBQUNFO0FBQ1Y7QUFDTjtBQUNVO0FBQ0o7QUFDUTtBQUU3QixTQUFTUzs7SUFDdEIsTUFBTUMsVUFBVVYsMkRBQVVBO0lBQzFCLE1BQU0sQ0FBQ1csbUJBQW1CQyxxQkFBcUIsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0QsTUFBTVcsU0FBUztRQUFDViw2REFBU0E7UUFBRUcsMERBQU1BO1FBQUVDLHdEQUFJQTtRQUFFQyw0REFBUUE7S0FBQztJQUVsRFAsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxXQUFXQyxZQUFZO1lBQzNCSCxxQkFBcUIsQ0FBQ0ksWUFBYyxDQUFDQSxZQUFZLEtBQUtILE9BQU9JLE1BQU07UUFDckUsR0FBRztRQUVILE9BQU8sSUFBTUMsY0FBY0o7SUFDN0IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUtDLFdBQVU7UUFBK0RDLE9BQU87WUFBRUMsUUFBUTtRQUFROzswQkFDeEcsOERBQUNDO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7MEJBQzlCLDhEQUFDQztnQkFBS0MsS0FBSTtnQkFBYUMsTUFBSzs7Ozs7OzBCQUM1Qiw4REFBQ0Y7Z0JBQUtDLEtBQUk7Z0JBQWFDLE1BQUs7Ozs7OzswQkFDNUIsOERBQUNGO2dCQUFLRSxNQUFLO2dCQUFnRUQsS0FBSTs7Ozs7OzBCQUMvRSw4REFBQ0U7Z0JBQUlDLGlCQUFjOztrQ0FDbkIsOERBQUN6QixrREFBS0E7d0JBQ0EwQixLQUFLbEIsTUFBTSxDQUFDRixrQkFBa0IsQ0FBQ29CLEdBQUc7d0JBQ2xDQyxJQUFJO3dCQUNKQyxLQUFJO3dCQUNKYixXQUFVOzs7Ozs7a0NBRWxCLDhEQUFDUzt3QkFBSVQsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDUztnQkFBSVQsV0FBVTs7a0NBQ2IsOERBQUNmLGtEQUFLQTt3QkFDTjBCLEtBQUszQix3REFBSUEsQ0FBQzJCLEdBQUc7d0JBQ2JFLEtBQUk7d0JBQ0piLFdBQVU7d0JBQ1ZjLE9BQU87d0JBQ1BaLFFBQVE7Ozs7OztrQ0FFUiw4REFBQ2E7d0JBQUVmLFdBQVU7a0NBQWtFOzs7Ozs7Ozs7Ozs7MEJBRWpGLDhEQUFDUztnQkFBSVQsV0FBVTswQkFDWlYsUUFBUTBCLE1BQU0sS0FBSyxnQ0FFbEIsOERBQUNEO29CQUFFUCxNQUFLO29CQUFXUixXQUFVOzhCQUE4R1YsUUFBUTJCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxHQUFHOzs7Ozt5Q0FJakwsOERBQUNMO29CQUFFUCxNQUFLO29CQUFTUixXQUFVOzhCQUF3Rzs7Ozs7Ozs7Ozs7MEJBSXJJLDhEQUFDUztnQkFBSVQsV0FBVTs7a0NBQ2YsOERBQUNxQjt3QkFBR3JCLFdBQVU7a0NBQW9DOzs7Ozs7a0NBQ2xELDhEQUFDc0I7d0JBQUd0QixXQUFVOzs0QkFBMEQ7MENBQXNFLDhEQUFDdUI7Z0NBQUt2QixXQUFVOzBDQUE2RTs7Ozs7OzRCQUFnQjs7Ozs7OztrQ0FDM1AsOERBQUN3Qjs7Ozs7b0JBQ0FsQyxRQUFRMEIsTUFBTSxLQUFLLGdDQUVsQiw4REFBQ0Q7d0JBQUVQLE1BQUs7d0JBQVNSLFdBQVU7a0NBQWtLOzs7Ozs2Q0FLN0wsOERBQUNlO3dCQUFFUCxNQUFLO3dCQUFTUixXQUFVO2tDQUE0Szs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNNO0dBbEV3Qlg7O1FBQ05ULHVEQUFVQTs7O0tBREpTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3BpZGVyTWFuIGZyb20gJ0AvcHVibGljL3NwaWRlck1hbi5qcGcnXG5pbXBvcnQgbG9nbyBmcm9tICdAL3B1YmxpYy9sb2dvLnBuZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGJhdE1hbiBmcm9tICdAL3B1YmxpYy9iYXRtYW4uanBnJ1xuaW1wb3J0IHRob3IgZnJvbSAnQC9wdWJsaWMvdGhvci5qcGcnXG5pbXBvcnQgZGVhZHBvb2wgZnJvbSAnQC9wdWJsaWMvZGVhZHBvb2wuanBnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbY3VycmVudEltYWdlSW5kZXgsIHNldEN1cnJlbnRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBpbWFnZXMgPSBbc3BpZGVyTWFuLCBiYXRNYW4sIHRob3IsIGRlYWRwb29sXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudEltYWdlSW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aCk7XG4gICAgfSwgNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtaW4taC1zY3JlZW4gcC0yNFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiPjwvbGluaz5cbiAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIj48L2xpbms+XG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGFsZXphciZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgIDxkaXYgZGF0YS1jYXJvdXNlbD1cInNsaWRlXCI+XG4gICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtpbWFnZXNbY3VycmVudEltYWdlSW5kZXhdLnNyY31cbiAgICAgICAgICBmaWxsXG4gICAgICAgICAgYWx0PVwiaGVyb1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB6LTkgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTEwMDBcIlxuICAgICAgICAvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2sgb3BhY2l0eS02NVwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZSB3LTcyIHRvcC0yIGxlZnQtMlwiPlxuICAgIDxJbWFnZVxuICAgIHNyYz17bG9nby5zcmN9XG4gICAgYWx0PSdsb2dvJ1xuICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgd2lkdGg9ezQwfVxuICAgIGhlaWdodD17NDB9XG4gICAgLz5cbiAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbGFsZXphciB0ZXh0LTR4bCByZWxhdGl2ZSBib3R0b20tWzM4cHhdIGxlZnQtMTRcIj5DaW7DqVZlcnNlPC9hPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiPlxuICAgIHtzZXNzaW9uLnN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnID8gXG4gICAgKFxuICAgICAgPGEgaHJlZj0nL3Byb2ZpbGUnIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtMiBwLTEgZm9udC1yb2JvdG8gYm9yZGVyLTIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQteGwgYmctWyNGRTAwMDBdIHctNDBcIj57c2Vzc2lvbi5kYXRhLnVzZXIudXNlcm5hbWUuc2xpY2UoMCwgMTIpfTwvYT5cbiAgICApXG4gIDpcbiAgKFxuICAgIDxhIGhyZWY9Jy9sb2dpbicgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBweC0yIHAtMSBmb250LXJvYm90byBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC14bCBiZy1bI0ZFMDAwMF1cIj5TZSBjb25uZWN0ZXI8L2E+XG5cbiAgKX1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBib3R0b20tMjggbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XG4gIDxoMSBjbGFzc05hbWU9XCJ4bDp0ZXh0LTh4bCB0ZXh0LTZ4bCBmb250LWxhbGV6YXJcIj5DaW7DqVZlcnNl4oSiPC9oMT5cbiAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbm9ybWFsIGZvbnQtcm9ib3RvIHhsOnctWzYwMHB4XSB3LVs0MDBweF1cIj5FeHBsb3JleiBDaW7DqVZlcnNlIHBvdXIgdW5lIHZhcmnDqXTDqSBkZSBmaWxtcywgc8OpcmllcyBldCBhbmltZXMsIHZvdHJlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGRTAwMDBdIHRleHQtc2hhZG93LVswXzRweF84cHhfI0ZFMDAwMF0gc2hhZG93LXJlZC01MDAvNTAgZm9udC1ib2xkXCI+cGFzc2Vwb3J0PC9zcGFuPiBwb3VyIGxlIGRpdmVydGlzc2VtZW50IHNhbnMgbGltaXRlcy48L2gyPlxuICA8YnIgLz5cbiAge3Nlc3Npb24uc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcgPyBcbiAgKFxuICAgIDxhIGhyZWY9Jy9maWxtcycgY2xhc3NOYW1lPVwidGV4dC0yeGwgdy00OCBhYnNvbHV0ZSBmb250LWJvbGQgbGVmdC0zMiBibG9jayBmb250LXJvYm90byBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC14bCBwLTEgcHgtMiBiZy1bI0ZFMDAwMF0gaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCI+Q29tbWVuY2VyIMOgIHJlZ2FyZGVyICE8L2E+XG5cbiAgKVxuICA6XG4gIChcbiAgICA8YSBocmVmPScvbG9naW4nIGNsYXNzTmFtZT1cInRleHQtMnhsIHctNDggeGw6dy1mdWxsIGFic29sdXRlIGZvbnQtYm9sZCBsZWZ0LTMyIGJsb2NrIGZvbnQtcm9ib3RvIGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLXhsIHAtMSBweC0yIGJnLVsjRkUwMDAwXSBob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIj5Db21tZW5jZXIgw6AgcmVnYXJkZXIgITwvYT5cbiAgKVxufVxuICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3BpZGVyTWFuIiwibG9nbyIsIkltYWdlIiwiYmF0TWFuIiwidGhvciIsImRlYWRwb29sIiwiSG9tZSIsInNlc3Npb24iLCJjdXJyZW50SW1hZ2VJbmRleCIsInNldEN1cnJlbnRJbWFnZUluZGV4IiwiaW1hZ2VzIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJtYWluIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImRhdGEtY2Fyb3VzZWwiLCJzcmMiLCJmaWxsIiwiYWx0Iiwid2lkdGgiLCJhIiwic3RhdHVzIiwiZGF0YSIsInVzZXIiLCJ1c2VybmFtZSIsInNsaWNlIiwiaDEiLCJoMiIsInNwYW4iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});