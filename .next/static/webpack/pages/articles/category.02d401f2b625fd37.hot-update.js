"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/category",{

/***/ "./pages/articles/category.js":
/*!************************************!*\
  !*** ./pages/articles/category.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Category(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, setCarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [carousel_description, setCarousel_description] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [getColor, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#04A123\");\n    const [carousel_Image, setCarousel_Image] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const category = router.query.category;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategory(category);\n        if (category == \"Nutrition\") {\n            setCarousel_tittle(\"Pushing Your Limits\");\n            setCarousel_description(\"Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases\");\n            setColor(\"#04A123\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Fitness\") {\n            setCarousel_tittle(\"Eating Well for Life\");\n            setCarousel_description(\"Maintaining a healthy lifestyle is crucial for overall well-being and longevity\");\n            setColor(\"#A27202\");\n            setCarousel_Image(\"https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Health\") {\n            setCarousel_tittle(\"The Power of Self-Care\");\n            setCarousel_description(\"Living well involves making healthy choices for a fulfilling and balanced life\");\n            setColor(\"#043DA1\");\n            setCarousel_Image(\"https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else {\n            setCarousel_tittle(\"Yoga for Stress Relief\");\n            setCarousel_description(\"Regular practice of yoga can help improve flexibility, balance, and strength\");\n            setColor(\"#4C0099\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        }\n    }, [\n        router.query.category\n    ]);\n    const refirect_to_post = (blog_slug)=>{\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                blog_slug: blog_slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \" \",\n                        category\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: carousel_Image,\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            width: 500,\n                            height: 500,\n                            alt: carousel_Image\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col carousel_text_box\",\n                        style: {\n                            backgroundColor: getColor\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"35%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Featured\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row my-3\",\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: data.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-3 my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#\",\n                            onClick: ()=>refirect_to_post(element.slug),\n                            style: {\n                                textDecoration: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"Blogcard\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"Blogcard-image\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            loading: \"lazy\",\n                                            src: element.image,\n                                            width: 330,\n                                            height: 170,\n                                            className: \"card-img-top\",\n                                            alt: element.blogtitle\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            height: \"100%\",\n                                            display: \"flex\",\n                                            flexDirection: \"\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                style: {\n                                                    height: \"15%\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"Blogcard-title\",\n                                                    children: element.blogtitle.slice(0, 50)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                style: {\n                                                    height: \"70%\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"Blogcard-body\",\n                                                    children: [\n                                                        element.blog_desc[2].text.slice(0, 150).replace(\"<br/>\", \" \"),\n                                                        \".\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 18\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                style: {\n                                                    height: \"15%\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"Blogcard_footer\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        class: \"by-name\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 46\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"2RCSCq4Lakz4t+MMXWen3cT60FI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Category;\nCategory.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RW1CLGdCQUFnQjs0QkFBTztzQ0FDNUYsNEVBQUN0QjtnQ0FBSXVCLE9BQU07O2tEQUNULDhEQUFDdkI7d0NBQUl1QixPQUFNO2tEQUNYLDRFQUFDOUMsbURBQUtBOzRDQUFDK0MsU0FBUTs0Q0FBT3RCLEtBQUtlLFFBQVFRLEtBQUs7NENBQUVyQixPQUFPOzRDQUFLQyxRQUFROzRDQUFLSixXQUFVOzRDQUFlSyxLQUFLVyxRQUFRUyxTQUFTOzs7Ozs7Ozs7OztrREFFbEgsOERBQUMxQjt3Q0FBSUcsT0FBTzs0Q0FBQ0UsUUFBTzs0Q0FBT1EsU0FBUTs0Q0FBT2MsZUFBYzt3Q0FBRTs7MERBQzFELDhEQUFDM0I7Z0RBQUlHLE9BQU87b0RBQUNFLFFBQU87Z0RBQUs7MERBQ3pCLDRFQUFDdUI7b0RBQUVMLE9BQU07OERBQWtCTixRQUFRUyxTQUFTLENBQUNYLEtBQUssQ0FBQyxHQUFFOzs7Ozs7Ozs7OzswREFFdEQsOERBQUNmO2dEQUFJRyxPQUFPO29EQUFDRSxRQUFPO2dEQUFLOzBEQUN4Qiw0RUFBQ3VCO29EQUFFTCxPQUFNOzt3REFDUk4sUUFBUVksU0FBUyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDZixLQUFLLENBQUMsR0FBRyxLQUFLZ0IsT0FBTyxDQUFDLFNBQVM7d0RBQUs7Ozs7Ozs7Ozs7OzswREFHL0QsOERBQUMvQjtnREFBSUcsT0FBTztvREFBQ0UsUUFBTztnREFBSzswREFDekIsNEVBQUN1QjtvREFBRUwsT0FBTTs4REFBa0IsNEVBQUNTO3dEQUFLVCxPQUFNO2tFQUFXTixRQUFRZ0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWhCbENmOzs7Ozs7Ozs7Ozs7QUEyQmhEO0dBbkdTdEM7O1FBRVFGLGtEQUFTQTs7O0tBRmpCRTtBQXFHVEEsU0FBU3NELHNCQUFzQixHQUFHLElBQUk7O0FBQ3RDLCtEQUFldEQsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy9jYXRlZ29yeS5qcz85YmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5cblxuXG5mdW5jdGlvbiBDYXRlZ29yeSh7IGRhdGEgfSkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtnZXRDYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LmNhdGVnb3J5KVxuICBjb25zdCBbY2Fyb3VzZWxfdGl0dGxlLCBzZXRDYXJvdXNlbF90aXR0bGVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Nhcm91c2VsX2Rlc2NyaXB0aW9uLCBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZ2V0Q29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiIzA0QTEyM1wiKVxuICBjb25zdCBbY2Fyb3VzZWxfSW1hZ2UsIHNldENhcm91c2VsX0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeSlcbiAgICBpZiAoY2F0ZWdvcnkgPT0gXCJOdXRyaXRpb25cIikge1xuICAgICAgc2V0Q2Fyb3VzZWxfdGl0dGxlKFwiUHVzaGluZyBZb3VyIExpbWl0c1wiKVxuICAgICAgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJSZWd1bGFyIGV4ZXJjaXNlIGltcHJvdmVzIHBoeXNpY2FsIGZpdG5lc3MsIGJvb3N0cyBtb29kLCBhbmQgcmVkdWNlcyB0aGUgcmlzayBvZiBjaHJvbmljIGRpc2Vhc2VzXCIpXG4gICAgICBzZXRDb2xvcihcIiMwNEExMjNcIilcbiAgICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDc2MTY2My9wZXhlbHMtcGhvdG8tNDc2MTY2My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gICAgfVxuICAgIGVsc2UgaWYgKGNhdGVnb3J5ID09IFwiRml0bmVzc1wiKSB7XG4gICAgICBzZXRDYXJvdXNlbF90aXR0bGUoXCJFYXRpbmcgV2VsbCBmb3IgTGlmZVwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJNYWludGFpbmluZyBhIGhlYWx0aHkgbGlmZXN0eWxlIGlzIGNydWNpYWwgZm9yIG92ZXJhbGwgd2VsbC1iZWluZyBhbmQgbG9uZ2V2aXR5XCIpXG4gICAgICBzZXRDb2xvcihcIiNBMjcyMDJcIilcbiAgICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjg3MzU0L3BleGVscy1waG90by0yODczNTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKVxuICAgIH1cbiAgICBlbHNlIGlmIChjYXRlZ29yeSA9PSBcIkhlYWx0aFwiKSB7XG4gICAgICBzZXRDYXJvdXNlbF90aXR0bGUoXCJUaGUgUG93ZXIgb2YgU2VsZi1DYXJlXCIpXG4gICAgICBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbihcIkxpdmluZyB3ZWxsIGludm9sdmVzIG1ha2luZyBoZWFsdGh5IGNob2ljZXMgZm9yIGEgZnVsZmlsbGluZyBhbmQgYmFsYW5jZWQgbGlmZVwiKVxuICAgICAgc2V0Q29sb3IoXCIjMDQzREExXCIpXG4gICAgICBzZXRDYXJvdXNlbF9JbWFnZShcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE5MTY4MjEvcGV4ZWxzLXBob3RvLTE5MTY4MjEuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldENhcm91c2VsX3RpdHRsZShcIllvZ2EgZm9yIFN0cmVzcyBSZWxpZWZcIilcbiAgICAgIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uKFwiUmVndWxhciBwcmFjdGljZSBvZiB5b2dhIGNhbiBoZWxwIGltcHJvdmUgZmxleGliaWxpdHksIGJhbGFuY2UsIGFuZCBzdHJlbmd0aFwiKVxuICAgICAgc2V0Q29sb3IoXCIjNEMwMDk5XCIpXG4gICAgICBzZXRDYXJvdXNlbF9JbWFnZShcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQwNTY1MzUvcGV4ZWxzLXBob3RvLTQwNTY1MzUuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKVxuICAgIH1cblxuXG4gIH0sIFtyb3V0ZXIucXVlcnkuY2F0ZWdvcnldKVxuXG4gIGNvbnN0IHJlZmlyZWN0X3RvX3Bvc3QgPSAoYmxvZ19zbHVnKSA9PiB7XG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvYXJ0aWNsZXMvUG9zdCcsXG4gICAgICBxdWVyeTogeyBibG9nX3NsdWc6IGJsb2dfc2x1ZyB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IHtjYXRlZ29yeX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J215LTUnPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjYXJvdXNlbF9JbWFnZX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSBhbHQ9e2Nhcm91c2VsX0ltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCBjYXJvdXNlbF90ZXh0X2JveCcgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBnZXRDb2xvciB9fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgdG9wOiBcIjMwJVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntjYXJvdXNlbF90aXR0bGV9PC9oMT5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgdG9wOiBcIjM1JVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntjYXJvdXNlbF9kZXNjcmlwdGlvbn08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleC13cmFwICAnPiAqL31cbiAgICAgICAgPGgxPkZlYXR1cmVkPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBteS0zJyBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAge2RhdGEuc2xpY2UoMCwgMTIpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMyBteS0zJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIycgb25DbGljaz17KCkgPT4gcmVmaXJlY3RfdG9fcG9zdChlbGVtZW50LnNsdWcpfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkJsb2djYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQmxvZ2NhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBsb2FkaW5nPSdsYXp5JyBzcmM9e2VsZW1lbnQuaW1hZ2V9IHdpZHRoPXszMzB9IGhlaWdodD17MTcwfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9e2VsZW1lbnQuYmxvZ3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDAlJyxkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOicnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxNSUnfX0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIkJsb2djYXJkLXRpdGxlXCI+e2VsZW1lbnQuYmxvZ3RpdGxlLnNsaWNlKDAsNTApfTwvcD5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzcwJSd9fT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiQmxvZ2NhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAge2VsZW1lbnQuYmxvZ19kZXNjWzJdLnRleHQuc2xpY2UoMCwgMTUwKS5yZXBsYWNlKFwiPGJyLz5cIiwgXCIgXCIpfS5cbiAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTUlJ319PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJCbG9nY2FyZF9mb290ZXJcIj48c3BhbiBjbGFzcz1cImJ5LW5hbWVcIj57ZWxlbWVudC5hdXRob3J9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgPC8+XG4gIClcbn1cblxuQ2F0ZWdvcnkucmVxdWlyZU5hdmJhckFuZEZvb3RlciA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gY29udGV4dC5xdWVyeTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1BcGktS2V5XCIsIFwiNjcwNmQ2ZWItZTZhZS00OGFlLWFkODItOWU0YzBhYzUwZTk2XCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDEvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgdGltZW91dDogMCxcblxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwiQ2F0ZWdvcnkiLCJkYXRhIiwicm91dGVyIiwiZ2V0Q2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJjYXJvdXNlbF90aXR0bGUiLCJzZXRDYXJvdXNlbF90aXR0bGUiLCJjYXJvdXNlbF9kZXNjcmlwdGlvbiIsInNldENhcm91c2VsX2Rlc2NyaXB0aW9uIiwiZ2V0Q29sb3IiLCJzZXRDb2xvciIsImNhcm91c2VsX0ltYWdlIiwic2V0Q2Fyb3VzZWxfSW1hZ2UiLCJyZWZpcmVjdF90b19wb3N0IiwiYmxvZ19zbHVnIiwicHVzaCIsInBhdGhuYW1lIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYmFja2dyb3VuZENvbG9yIiwiaDEiLCJ0b3AiLCJwb3NpdGlvbiIsImNvbG9yIiwiaDUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJzbGljZSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImhyZWYiLCJvbkNsaWNrIiwic2x1ZyIsInRleHREZWNvcmF0aW9uIiwiY2xhc3MiLCJsb2FkaW5nIiwiaW1hZ2UiLCJibG9ndGl0bGUiLCJmbGV4RGlyZWN0aW9uIiwicCIsImJsb2dfZGVzYyIsInRleHQiLCJyZXBsYWNlIiwic3BhbiIsImF1dGhvciIsInJlcXVpcmVOYXZiYXJBbmRGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/category.js\n"));

/***/ })

});