"use strict";
(() => {
var exports = {};
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 7518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Admin_user(props) {
    const [getTime, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [blogtitle, setBlogtitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [blogauthor, setauthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [blogimage, setimage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [blogcategory, setcategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [blogdesckey, setblogdescKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [divCounters, setDivCounters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [inputValues, setInputValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    setTimeout(()=>{
        const options = {
            month: "numeric",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
        };
        setTime(new Date().toLocaleString("en-US", options));
    }, 1000);
    const blogeventChange = (event)=>{
        setBlog(event.target.value);
    };
    const blogtitleEventChange = (event)=>{
        setBlogtitle(event.target.value);
    };
    const blogCategoryeventChange = (event)=>{
        setcategory(event.target.value);
    };
    const blogauthoreventChange = (event)=>{
        setauthor(event.target.value);
    };
    const blogImageeventChange = (event)=>{
        setimage(event.target.value);
    };
    const expandDiv = ()=>{
        setDivCounters(divCounters + 1);
        const newObj = {};
        Object.entries(inputValues).forEach(([key, value])=>{
            const [str, i, inputType] = key.split("-");
            if (inputType === "textarea") {
                newObj[value] = inputValues[`${str}-${i}-input`] || "";
            }
        });
        console.log(inputValues);
    };
    const renderDivs = ()=>{
        return Object.entries(divCounters).map(([str, count])=>{
            const divElements = [];
            for(let i = 1; i <= count; i++){
                const handleDelete = ()=>{
                    const newCounter = (divCounters[str] || 0) - 1;
                    console.log(newCounter);
                    const newDivCounters = {
                        ...divCounters,
                        [str]: newCounter
                    };
                    console.log(newDivCounters);
                    setDivCounters(newDivCounters);
                };
                divElements.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex justify-content-around",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            style: {
                                width: "150px",
                                height: "50px"
                            },
                            value: inputValues[`${str}-${i}-textarea`] || "",
                            onChange: (e)=>setInputValues({
                                    ...inputValues,
                                    [`${str}-${i}-textarea`]: e.target.value
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "email",
                            className: "value my-3  w-100",
                            style: {
                                width: "500px",
                                overflowWrap: "break-word"
                            },
                            id: `exampleFormControlInput2-${str}-${i}`,
                            placeholder: props.str,
                            value: inputValues[`${str}-${i}-input`] || "",
                            onChange: (e)=>setInputValues({
                                    ...inputValues,
                                    [`${str}-${i}-input`]: e.target.value
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleDelete,
                            style: {
                                width: "20px",
                                height: "20px",
                                border: "none"
                            },
                            children: "\uD83D\uDDD1️"
                        })
                    ]
                }, `${str}-${i}`));
            }
            return divElements;
        });
    };
    const submit = ()=>{
        const daa = {
            "blog": blog
        };
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "navbar bg-dark",
                "data-bs-theme": "dark",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "navbar-brand ",
                        href: "#",
                        children: "Brownmen"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container my-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Blog ID"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "my-3",
                                style: {
                                    width: "500px"
                                },
                                onChange: blogeventChange,
                                id: "exampleFormControlInput1",
                                placeholder: "Blog_ID"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Blog Title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "my-3",
                                style: {
                                    width: "500px"
                                },
                                id: "exampleFormControlInput1",
                                onChange: blogtitleEventChange,
                                placeholder: "Blog Title"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between my-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Category"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                id: "cars",
                                style: {
                                    width: "500px"
                                },
                                onChange: blogCategoryeventChange,
                                name: "category my-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "volvo",
                                        children: "Nutrition"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "saab",
                                        children: "Yoga"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "fiat",
                                        children: "Fitness"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "audi",
                                        children: "Health"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Author"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "my-3",
                                onChange: blogauthoreventChange,
                                style: {
                                    width: "500px"
                                },
                                id: "exampleFormControlInput1",
                                placeholder: "Author"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Date"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                disabled: true,
                                className: "my-3",
                                style: {
                                    width: "500px"
                                },
                                value: getTime,
                                id: "exampleFormControlInput1",
                                placeholder: "Author"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Image"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "my-3",
                                style: {
                                    width: "500px"
                                },
                                onChange: blogImageeventChange,
                                id: "exampleFormControlInput1",
                                placeholder: "Author"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-between",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Blog Description"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: expandDiv,
                            className: "justify-content-center",
                            style: {
                                width: "50vw"
                            },
                            children: "Create DIV"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "conatainer",
                        children: [
                            renderDivs(),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-success text-center",
                                onClick: submit,
                                children: "Submit"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin_user);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7518));
module.exports = __webpack_exports__;

})();