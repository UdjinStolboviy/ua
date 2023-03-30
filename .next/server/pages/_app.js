(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,354];
exports.modules = {

/***/ 9969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ Logo)
});

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/Logo/Logo.tsx

const Logo = (styled_default()).header`
  font-family: OleoScript;
  font-size: ${({ size =3  })=>`${size}rem`};
`;

;// CONCATENATED MODULE: ./components/Logo/index.ts



/***/ }),

/***/ 3005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ StyledLink)
});

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/StyledLink/StyledLink.tsx

const StyledLink = (styled_default()).a`
  all: unset;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

;// CONCATENATED MODULE: ./components/StyledLink/index.ts



/***/ }),

/***/ 4959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./services/aboutSlice.ts

const initialState = {
    about: [],
    infoUser: ""
};
const aboutSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "about",
    initialState,
    reducers: {
        addAbout: (state, action)=>{
            state.about = [
                ...state.about,
                action.payload
            ];
            state.infoUser = action.payload.infoUser;
        },
        removeAbout: (state, action)=>{
            state.about = state.about.filter((product)=>product.link_fb !== action.payload.link_fb);
        }
    }
});
const { addAbout , removeAbout  } = aboutSlice.actions;
/* harmony default export */ const services_aboutSlice = (aboutSlice.reducer);

;// CONCATENATED MODULE: ./store.ts


const rootReducer = {
    about: aboutSlice.reducer
};
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: rootReducer
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/Icon/Icons.tsx

const User = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 1024 1024",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
        })
    });
const Moon = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 6a8 8 0 0011.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0010 6zm-6 6a8 8 0 008 8 8.006 8.006 0 006.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 004 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 00-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 00-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0015.29.836L15.5 0h1l.209.836a2 2 0 001.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 00-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 00-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 001.455-1.455L20.5 5h1l.209.836a2 2 0 001.455 1.455z"
            })
        ]
    });
const Sun = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12zM11 0h2v4.062a8.079 8.079 0 00-2 0V0zM7.094 5.68L4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 017.094 5.68zM4.062 11H0v2h4.062a8.079 8.079 0 010-2zm1.618 5.906l-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 01-1.414-1.414zM11 19.938V24h2v-4.062a8.069 8.069 0 01-2 0zm5.906-1.618l2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 01-1.414 1.414zM19.938 13H24v-2h-4.062a8.069 8.069 0 010 2zM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2.872c.528.41 1.003.886 1.414 1.414z",
            clipRule: "evenodd"
        })
    });
const Home = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
        })
    });
const Message = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "4",
                y: "6",
                width: "16",
                height: "12",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9",
                stroke: "currentColor",
                strokeWidth: "2"
            })
        ]
    });
const Settings = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 512 512",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 32,
            d: "M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
        })
    });
const Search = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "64 64 896 896",
        focusable: "false",
        "data-icon": "search",
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
        })
    });
const Login = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "64 64 896 896",
        focusable: "false",
        "data-icon": "login",
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("style", {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"
            })
        ]
    });
const Cart = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 8L8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7L16 8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15 14V12",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9 14V12",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4 12C4 10.1144 4 9.17157 4.58579 8.58579C5.17157 8 6.11438 8 8 8H16C17.8856 8 18.8284 8 19.4142 8.58579C20 9.17157 20 10.1144 20 12V13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21V21C8.22876 21 6.34315 21 5.17157 19.8284C4 18.6569 4 16.7712 4 13V12Z",
                stroke: "currentColor",
                strokeWidth: "2"
            })
        ]
    });
const Cart2 = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.24211 4.80975H18.2524C20.4616 4.80975 22.2524 6.60061 22.2524 8.80975V12.9522C22.2524 15.1613 20.4616 16.9522 18.2524 16.9522H10.7685C8.83212 16.9522 7.1738 15.5652 6.8315 13.6593L5.24211 4.80975ZM5.24211 4.80975L4.60064 2.92743C4.46259 2.52234 4.08206 2.25 3.65409 2.25H1.75281",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11 20.5H11.01",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19 20.5H19.01",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            })
        ]
    });
const AddProduct = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.24207 4.80975H18.2524C20.4615 4.80975 22.2524 6.60061 22.2524 8.80975V12.9522C22.2524 15.1613 20.4615 16.9522 18.2524 16.9522H10.7685C8.83209 16.9522 7.17377 15.5652 6.83147 13.6593L5.24207 4.80975ZM5.24207 4.80975L4.60061 2.92743C4.46256 2.52234 4.08203 2.25 3.65406 2.25H1.75278",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.25 8.56067L14.25 13.5154",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.7274 11.038L11.7726 11.038",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11 20.5H11.01",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19 20.5H19.01",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            })
        ]
    });
const CancelCart = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.24211 4.80975H18.2524C20.4616 4.80975 22.2524 6.60061 22.2524 8.80975V12.9522C22.2524 15.1613 20.4616 16.9522 18.2524 16.9522H10.7685C8.83212 16.9522 7.1738 15.5652 6.8315 13.6593L5.24211 4.80975ZM5.24211 4.80975L4.60064 2.92743C4.46259 2.52234 4.08206 2.25 3.65409 2.25H1.75281",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.7999 11H16.7999",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11 20.5H11.01",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19 20.5H19.01",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            })
        ]
    });
const CancelProduct = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.5 12H16.5",
                stroke: "currentColor",
                strokeWidth: "2"
            })
        ]
    });
const InProduct = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3 9V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H9",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15 15V16H16V15H15ZM7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L7.70711 6.29289ZM14 8V15H16V8H14ZM15 14H8V16H15V14ZM15.7071 14.2929L7.70711 6.29289L6.29289 7.70711L14.2929 15.7071L15.7071 14.2929Z",
                fill: "currentColor"
            })
        ]
    });
const LinkProduct = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 16H7C4.79086 16 3 14.2091 3 12V12C3 9.79086 4.79086 8 7 8H10",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 12H8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14 16H17C19.2091 16 21 14.2091 21 12V12C21 9.79086 19.2091 8 17 8H14",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
const PluseProduct = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 6L12 18",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18 12L6 12",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            })
        ]
    });
const MinusProduct = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18 12L6 12",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
        })
    });
const Phone = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 36 36",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "18",
                cy: "18",
                r: "18",
                fill: "#34C759"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.11 21.8819C14.8867 22.6586 15.7066 23.3598 16.5696 23.9854C17.4326 24.6111 18.2956 25.1073 19.1586 25.4741C20.0216 25.8409 20.8387 26.0243 21.61 26.0243C22.1332 26.0243 22.6214 25.9299 23.0744 25.7411C23.5275 25.5523 23.9374 25.2557 24.3042 24.8511C24.52 24.6138 24.6899 24.3576 24.8139 24.0825C24.938 23.8128 25 23.5405 25 23.2654C25 23.0604 24.9595 22.8662 24.8786 22.6828C24.7977 22.4941 24.6602 22.3323 24.466 22.1974L21.9822 20.4337C21.7934 20.3042 21.6181 20.2071 21.4563 20.1424C21.2945 20.0777 21.1408 20.0453 20.9951 20.0453C20.8118 20.0453 20.6338 20.0965 20.4612 20.199C20.2886 20.2961 20.1106 20.4364 19.9272 20.6197L19.3528 21.1861C19.2718 21.2724 19.1694 21.3155 19.0453 21.3155C18.9806 21.3155 18.9186 21.3047 18.8592 21.2832C18.8053 21.2616 18.7594 21.2427 18.7217 21.2265C18.4682 21.0917 18.1446 20.8598 17.7508 20.5307C17.3571 20.1963 16.9606 19.8296 16.5615 19.4304C16.1677 19.0313 15.8037 18.6348 15.4693 18.2411C15.1348 17.8474 14.9029 17.5264 14.7735 17.2783C14.7519 17.2352 14.7303 17.1866 14.7087 17.1327C14.6926 17.0734 14.6845 17.014 14.6845 16.9547C14.6845 16.836 14.7249 16.7362 14.8058 16.6553L15.3803 16.0647C15.5583 15.8813 15.6985 15.7033 15.801 15.5307C15.9035 15.3581 15.9547 15.1802 15.9547 14.9968C15.9547 14.8511 15.9196 14.6974 15.8495 14.5356C15.7848 14.3738 15.685 14.1985 15.5502 14.0097L13.8107 11.5583C13.6704 11.3641 13.5032 11.2238 13.3091 11.1375C13.1149 11.0458 12.9099 11 12.6942 11C12.1386 11 11.6181 11.2346 11.1327 11.7039C10.7389 12.0814 10.4504 12.4995 10.267 12.9579C10.089 13.411 10 13.8964 10 14.4142C10 15.1909 10.1807 16.0081 10.5421 16.8657C10.9035 17.7179 11.3943 18.5728 12.0146 19.4304C12.6348 20.288 13.3333 21.1052 14.11 21.8819Z",
                fill: "currentColor"
            })
        ]
    });
const Phone2 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 122.88 122.27",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z",
                fill: "currentColor"
            })
        })
    });
const SharedIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 14 11",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12.3334 4.66667L13.0405 5.37377L13.7476 4.66667L13.0405 3.95956L12.3334 4.66667ZM0.666707 10C0.666707 10.5523 1.11442 11 1.66671 11C2.21899 11 2.66671 10.5523 2.66671 10L0.666707 10ZM9.70715 8.70711L13.0405 5.37377L11.6263 3.95956L8.29293 7.29289L9.70715 8.70711ZM13.0405 3.95956L9.70715 0.626226L8.29293 2.04044L11.6263 5.37377L13.0405 3.95956ZM12.3334 3.66667L7.00004 3.66667L7.00004 5.66667L12.3334 5.66667L12.3334 3.66667ZM7.00004 3.66667C3.50224 3.66667 0.666707 6.5022 0.666707 10L2.66671 10C2.66671 7.60677 4.60681 5.66667 7.00004 5.66667L7.00004 3.66667Z",
            fill: "currentColor"
        })
    });
const Icons = {
    User,
    Moon,
    Sun,
    Home,
    Settings,
    Search,
    Login,
    Cart,
    AddProduct,
    CancelProduct,
    InProduct,
    LinkProduct,
    Cart2,
    CancelCart,
    PluseProduct,
    MinusProduct,
    Message,
    Phone,
    Phone2,
    SharedIcon
};

;// CONCATENATED MODULE: ./components/Icon/Icon.tsx



// https://reactsvgicons.com/search
const Icon = ({ name , size =2 , ...rest })=>{
    const Icon = styled_default()(Icons[name])``;
    const sizeInRem = `${size}rem`;
    const sizes = {
        width: sizeInRem,
        height: sizeInRem
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
        role: "img",
        "aria-label": name,
        ...sizes,
        ...rest
    });
};

;// CONCATENATED MODULE: ./components/Icon/index.ts


;// CONCATENATED MODULE: ./components/IconButton/IconButton.tsx




const IconButton = /*#__PURE__*/ (0,external_react_.forwardRef)(({ onClick , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        bordered: true,
        auto: true,
        css: {
            px: "$5",
            m: "$1"
        },
        onClick: onClick,
        title: props.name,
        ref: ref,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            ...props
        })
    }));
IconButton.displayName = "IconButton";

;// CONCATENATED MODULE: ./components/IconButton/index.ts


// EXTERNAL MODULE: ./components/StyledLink/index.ts + 1 modules
var StyledLink = __webpack_require__(3005);
// EXTERNAL MODULE: ./components/Logo/index.ts + 1 modules
var Logo = __webpack_require__(9969);
;// CONCATENATED MODULE: ./components/Input/Input.tsx




const Wrapper = (styled_default()).label`
  display: grid;
  gap: 0.1rem;
  grid-template-areas:
    "label"
    "input"
    "feedback";
  grid-template-rows: ${({ isLabelVisible , isFeedbackVisible  })=>{
    if (isLabelVisible && isFeedbackVisible) {
        return "1fr 3fr 1fr";
    } else if (isLabelVisible) {
        return "1fr 4fr 0fr";
    } else if (isFeedbackVisible) {
        return "0fr 4fr 1fr";
    } else {
        return "0fr 1fr 0fr";
    }
}};
  font-size: 1rem;
`;
const InputWrapper = (styled_default()).div`
  grid-area: input;
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StyledInput = (styled_default()).input`
  all: unset;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 0 2.6rem 0 1.4rem;
`;
const StyledIcon = styled_default()(Icon)`
  position: absolute;
  right: 0.3rem;
  opacity: 0.7;
`;
const Label = (styled_default()).span`
  grid-area: label;
  padding-left: 1.4rem;
`;
const Feedback = styled_default()(Label)`
  grid-area: feedback;
`;
const Input = /*#__PURE__*/ (0,external_react_.forwardRef)(({ label , height =7 , width =20 , icon , feedback , className , ...rest }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        isLabelVisible: Boolean(label),
        isFeedbackVisible: Boolean(feedback),
        height: height,
        width: width,
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                        ref: ref,
                        ...rest
                    }),
                    icon && /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                        name: icon
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Feedback, {
                role: "alert",
                children: feedback
            })
        ]
    }));
Input.displayName = "Input";

;// CONCATENATED MODULE: ./components/Input/Feedback/Feedback.tsx


const Feedback_Feedback = (styled_default()).span``;
const ConditionalFeedback = ({ children  })=>children ? /*#__PURE__*/ _jsx(Feedback_Feedback, {
        children: children
    }) : /*#__PURE__*/ _jsx(_Fragment, {
        children: "\xa0"
    });

;// CONCATENATED MODULE: ./components/Input/Feedback/index.ts


;// CONCATENATED MODULE: ./components/Input/index.ts



;// CONCATENATED MODULE: ./components/Layout/components.ts




const components_Wrapper = (styled_default()).div`
  .backImag {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    z-index: -4;
    background-image: url("https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true");
    border: 4px solid #000;
    background-size: cover;
    background-position: center center;
  }

  nav {
    flex-direction: row;
    justify-content: flex-end;
    gap: 2vmin;
    .warraperIndicator {
      display: flex;
      flex-direction: row;
  }
  }
  @media (min-width: 500px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 1008px) {
       .wrapperNav {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
       align-items: center;
     
       }
  }
`;
const LogoLink = styled_default()(StyledLink/* StyledLink */.F)`
  padding: 1vw;
`;
const StyledBottomIndicator = (styled_default()).div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -20px;
    margin-bottom: -10px;
    top: 3px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0CB3A1;
    & span {
      width: 30;
      height: 30;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      text-align: center;
      line-height: 30px;
    }
  `;
const StyledLogo = styled_default()(Logo/* Logo */.T)`
 .wrapperInfo {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
 @media screen and (min-width: 320px) and (max-width: 959px) {
  .wrapperInfo {
   width: 100%;
   align-items: center;
  }
  .wrapperNav{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
`;
const MainNav = (styled_default()).nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vmin 1vmin;
  & .poneWrapper {
    @media screen and (min-width: 320px) and (max-width: 421px) {
    display: none;
  }
  }
`;
const SearchInput = styled_default()(Input)`
  grid-area: search;
  width: 96%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 4rem;
`;
const Content = (styled_default()).main`
  grid-area: content;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;
const Footer = (styled_default()).footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;

;// CONCATENATED MODULE: ./styles/themes.ts
// AppTheme is basic type for the themes based on dark theme

const lightTheme = (0,react_.createTheme)({
    type: "light",
    theme: {
        colors: {
            // generic colors
            white: "#ffffff",
            black: "#000000",
            colorBackgroundContender: "rgba(86, 86, 86, 0.3)",
            blur: "blur(10px)",
            text: "#ECEDEE",
            iconColor: "#06B7DB",
            primary: "#ffffff",
            accents2: "#000000",
            // background colors (light)
            background: "#ffffff",
            backgroundAlpha: "rgba(255, 255, 255, 0.8)",
            foreground: "$black",
            backgroundContrast: "#DEE7F2",
            //semantic colors (light)
            blue50: "#EDF5FF",
            // ...
            blue900: "#00254D",
            // ...
            // brand colors
            primaryLight: "$blue200",
            primaryLightHover: "$blue300",
            primaryLightActive: "$blue400",
            primaryLightContrast: "$blue600",
            primaryBorder: "$blue500",
            primaryBorderHover: "$blue600",
            primarySolidHover: "$blue700",
            primarySolidContrast: "$white",
            primaryShadow: "$blue500"
        },
        fonts: {
            sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans- serif; ",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'`
        },
        fontSizes: {
            xs: "0.75rem",
            /* 12px */ sm: "0.875rem",
            /* 14px */ base: "1rem",
            /* 16px */ md: "1rem",
            /* 16px */ lg: "1.125rem",
            /* 18px */ xl: "1.25rem",
            /* 20px */ "2xl": "1.5rem",
            /* 24px */ "3xl": "1.875rem",
            /* 30px */ "4xl": "2.25rem",
            /* 36px */ "5xl": "3rem",
            /* 48px */ "6xl": "3.75rem",
            /* 60px */ "7xl": "4.5rem",
            /* 72px */ "8xl": "6rem",
            /* 96px */ "9xl": "8rem"
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        lineHeights: {
            xs: 1,
            /* 16px */ sm: 1.25,
            /* 20px */ base: 1.5,
            /* 24px */ md: 1.5,
            /* 24px */ lg: 1.75,
            /* 28px */ xl: 1.75,
            /* 28px */ "2xl": 2,
            /* 32px */ "3xl": 2.25,
            /* 36px */ "4xl": 2.5,
            /* 40px */ "5xl": 1,
            /* 16px */ "6xl": 1,
            /* 16px */ "7xl": 1,
            /* 16px */ "8xl": 1,
            /* 16px */ "9xl": 1 /* 16px */ 
        },
        letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        radii: {
            xs: "7px",
            sm: "9px",
            md: "12px",
            base: "14px",
            lg: "14px",
            xl: "18px",
            "2xl": "24px",
            "3xl": "32px",
            squared: "33%",
            rounded: "50%",
            pill: "9999px"
        },
        borderWeights: {
            light: "1px",
            normal: "2px",
            bold: "3px",
            extrabold: "4px",
            black: "5px"
        }
    }
});
const darkTheme = (0,react_.createTheme)({
    type: "dark",
    theme: {
        colors: {
            // generic colors
            white: "#ffffff",
            black: "#000000",
            iconColor: "#571D91",
            // background colors (light)
            accents2: "#000000",
            primary: "#78F2AD",
            background: "#7a7880",
            backgroundAlpha: "rgba(255, 255, 255, 0.8)",
            foreground: "$white",
            backgroundContrast: "#7a7880",
            text: "#78F2AD",
            //semantic colors (light)
            blue50: "#EDF5FF",
            // ...
            blue900: "#00254D",
            // ...
            // brand colors
            primaryLight: "$blue200",
            primaryLightHover: "$blue300",
            primaryLightActive: "$blue400",
            primaryLightContrast: "$blue600",
            primaryBorder: "$blue500",
            primaryBorderHover: "$blue600",
            primarySolidHover: "$blue700",
            primarySolidContrast: "$white",
            primaryShadow: "$blue500"
        },
        fonts: {
            sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans- serif; ",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'`
        },
        fontSizes: {
            xs: "0.75rem",
            /* 12px */ sm: "0.875rem",
            /* 14px */ base: "1rem",
            /* 16px */ md: "1rem",
            /* 16px */ lg: "1.125rem",
            /* 18px */ xl: "1.25rem",
            /* 20px */ "2xl": "1.5rem",
            /* 24px */ "3xl": "1.875rem",
            /* 30px */ "4xl": "2.25rem",
            /* 36px */ "5xl": "3rem",
            /* 48px */ "6xl": "3.75rem",
            /* 60px */ "7xl": "4.5rem",
            /* 72px */ "8xl": "6rem",
            /* 96px */ "9xl": "8rem"
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        lineHeights: {
            xs: 1,
            /* 16px */ sm: 1.25,
            /* 20px */ base: 1.5,
            /* 24px */ md: 1.5,
            /* 24px */ lg: 1.75,
            /* 28px */ xl: 1.75,
            /* 28px */ "2xl": 2,
            /* 32px */ "3xl": 2.25,
            /* 36px */ "4xl": 2.5,
            /* 40px */ "5xl": 1,
            /* 16px */ "6xl": 1,
            /* 16px */ "7xl": 1,
            /* 16px */ "8xl": 1,
            /* 16px */ "9xl": 1 /* 16px */ 
        },
        letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        radii: {
            xs: "7px",
            sm: "9px",
            md: "12px",
            base: "14px",
            lg: "14px",
            xl: "18px",
            "2xl": "24px",
            "3xl": "32px",
            squared: "33%",
            rounded: "50%",
            pill: "9999px"
        },
        borderWeights: {
            light: "1px",
            normal: "2px",
            bold: "3px",
            extrabold: "4px",
            black: "5px"
        }
    }
});

;// CONCATENATED MODULE: external "react-web-share"
const external_react_web_share_namespaceObject = require("react-web-share");
// EXTERNAL MODULE: ./styles/style-guide/index.tsx + 2 modules
var style_guide = __webpack_require__(5782);
;// CONCATENATED MODULE: ./components/footer/styles.tsx


const FooterMobileStyled = (styled_default()).footer`
  display: flex;
  grid-area: footer;
  position: fixed;
  bottom: 0;
  left: 50%;

  transform: translate(-50%, 0%);
  padding: 10px 10px 10px 10px;
  border-radius: 90px;
  margin-bottom: 10px;
  flex-direction: row;
  @media screen and (min-width: 769px) {
    display: none;
  }
  .warraperIndicator {
    display: flex;
    flex-direction: row;
  }
  & .isDark {
    @media screen and (min-width: 320px) and (max-width: 378px) {
      display: none;
    }
  }
`;
const FooterDesktopStyled = (styled_default()).footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
  }

  & .footer-wrapper-privacy {
    padding-top: 30px;
    padding-bottom: 32px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const StyleSocialList = (styled_default()).ul`
  margin: 0 auto;
  display: flex;

  & li {
    margin-right: 50px;
  }
  & li:last-of-type {
    margin-right: 0;
  }
`;
const StyleEmail = (styled_default()).div`
  height: 100%;

  & a {
    font-size: ${style_guide/* default.FontStyles.title.h5.fontSize */.Z.FontStyles.title.h5.fontSize};
    font-weight: ${style_guide/* default.FontStyles.title.h5.fontWeight */.Z.FontStyles.title.h5.fontWeight};
    font-style: ${style_guide/* default.FontStyles.title.h5.fontStyle */.Z.FontStyles.title.h5.fontStyle};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  & a:hover {
    color: #0a84ff;
  }
  @media screen and (min-width: 320px) and (max-width: 770px) {
    width: 40%;
    & a {
      font-size: ${style_guide/* default.FontStyles.title.h6.fontSize */.Z.FontStyles.title.h6.fontSize};
    }
  }
`;

// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(5544);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./components/footer/FooterDeskstop.tsx






const FooterDesktop = ()=>{
    const socialLinks = [
        {
            link: "https://www.linkedin.com/in/udjinStolboviy/",
            src: "/images/linkedin1.png"
        },
        {
            link: "https://github.com/UdjinStolboviy",
            src: "/images/gitHub3.png"
        },
        {
            link: "https://www.facebook.com/udjin.stolboviy",
            src: "/images/fb1.jpeg"
        }
    ];
    const yearNow = external_moment_default()().format("YYYY");
    return /*#__PURE__*/ jsx_runtime_.jsx(FooterDesktopStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "animate__animated animate__fadeIn",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyleSocialList, {
                    children: socialLinks.map((navItem, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: navItem.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                    src: navItem.src,
                                    size: "md"
                                })
                            })
                        }, navItem.link + index))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-wrapper-privacy ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: `©Stolboviy Ievgen 2022 —  ${Number(yearNow) + 1}`
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const FooterDeskstop = (FooterDesktop);

;// CONCATENATED MODULE: ./components/ButtonGroup/styleButtonGroup.ts

const ButtonGroupStyle = (styled_default()).div`
    margin-top: 14px;
    margin-left: 30px;
  
`;

;// CONCATENATED MODULE: ./components/ButtonGroup/ButtonGroup.tsx





const ButtonGroup = (props)=>{
    const [active, setActive] = (0,external_react_.useState)(1);
    const router = (0,router_namespaceObject.useRouter)();
    const activeButton = (index, text)=>{
        if (index === 1 && active === 1) {
            if (props.whichThem) {
                return "&green700";
            }
            if (text) {
                return "black";
            }
            return "white";
        } else if (index === 2 && active === 2) {
            if (props.whichThem) {
                return "&green700";
            }
            if (text) {
                return "black";
            }
            return "white";
        } else if (index === 3 && active === 3) {
            if (props.whichThem) {
                return "&green700";
            }
            if (text) {
                return "black";
            }
            return "white";
        } else if (index === 4 && active === 4) {
            if (props.whichThem) {
                return "&green700";
            }
            if (text) {
                return "black";
            }
            return "white";
        } else if (index === 5 && active === 5) {
            if (props.whichThem) {
                return "&green700";
            }
            if (text) {
                return "black";
            }
            return "white";
        } else if (index === 6 && active === 6) {
            if (props.whichThem) {
                return "&green700";
            }
            if (text) {
                return "black";
            }
            return "white";
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ButtonGroupStyle, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid.Container, {
            gap: 1,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        color: "primary",
                        rounded: true,
                        bordered: true,
                        ghost: true,
                        onClick: ()=>{
                            setActive(1);
                            router.push({
                                pathname: "/"
                            });
                        },
                        css: {
                            color: activeButton(1, true),
                            background: activeButton(1)
                        },
                        children: "SKILLS"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        color: "primary",
                        rounded: true,
                        bordered: true,
                        ghost: true,
                        onClick: ()=>{
                            setActive(2);
                            router.push({
                                pathname: "/my-work"
                            });
                        },
                        css: {
                            color: activeButton(2, true),
                            background: activeButton(2)
                        },
                        children: "MY WORK"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        color: "primary",
                        rounded: true,
                        bordered: true,
                        ghost: true,
                        onClick: ()=>{
                            setActive(3);
                            router.push({
                                pathname: "/education"
                            });
                        },
                        css: {
                            color: activeButton(3, true),
                            background: activeButton(3)
                        },
                        children: "EDUCATION"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        color: "primary",
                        rounded: true,
                        bordered: true,
                        ghost: true,
                        onClick: ()=>{
                            setActive(4);
                            router.push({
                                pathname: "/my-works-web"
                            });
                        },
                        css: {
                            color: activeButton(4, true),
                            background: activeButton(4)
                        },
                        children: "MY WORKS WEB"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        color: "primary",
                        rounded: true,
                        bordered: true,
                        ghost: true,
                        onClick: ()=>{
                            setActive(5);
                            router.push({
                                pathname: "/my-works-mobile"
                            });
                        },
                        css: {
                            color: activeButton(5, true),
                            background: activeButton(5)
                        },
                        children: "MY WORKS MOBILE"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        auto: true,
                        color: "primary",
                        rounded: true,
                        bordered: true,
                        ghost: true,
                        onClick: ()=>{
                            setActive(6);
                            router.push({
                                pathname: "/about"
                            });
                        },
                        css: {
                            color: activeButton(6, true),
                            background: activeButton(6)
                        },
                        children: "ABOUTMYSELF"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/ButtonGroup/index.ts


;// CONCATENATED MODULE: ./public/covers/fone2.jpeg
/* harmony default export */ const fone2 = ({"src":"/_next/static/media/fone2.35960d89.jpeg","height":1440,"width":2560,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlYP/xAAaEAACAgMAAAAAAAAAAAAAAAAREwACEiSB/9oACAEBAAE/AH6il1By7P/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/Layout/Layout.tsx












const useIsomorphicLayoutEffect =  false ? 0 : external_react_.useEffect;
const Layout = ({ children  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const [imagChang, setImagChang] = (0,external_react_.useState)(0);
    const [isDark, setIsDark] = (0,external_react_.useState)(true);
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const arrImage = [
        "/covers/fone2.jpeg",
        "/media/5uber.3c7abae6.png",
        "/media/Loginang.d84f2e49.png",
        "/media/Pictur.92d42e3b.png"
    ];
    const headerSharing = "Ievgen Stolbovyi";
    const linkSharing = "https://udjinstolboviy.github.io/ua/";
    const textSharing = "Ievgen Stolbovyi CV";
    const toggleDark = ()=>{
        localStorage.setItem("theme", isDark ? "light" : "dark");
        setIsDark(!isDark);
    };
    useIsomorphicLayoutEffect(()=>{
        const theme = localStorage.getItem("theme");
        const themeExistsInStorage = Boolean(theme !== null);
        setIsDark(themeExistsInStorage ? Boolean(theme === "dark") : window.matchMedia("(prefers-color-scheme: dark)").matches);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.NextUIProvider, {
        theme: isDark ? darkTheme : lightTheme,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                height: "100%",
                width: "100%",
                backgroundImage: `url(${fone2.src})`
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                sm: true,
                css: {
                    bgBlur: "#0f111466"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledLogo, {
                        size: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                            display: "flex",
                            direction: "row",
                            fluid: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "wrapperNav",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainNav, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
                                                    name: !isDark ? "Moon" : "Sun",
                                                    size: 1.5,
                                                    onClick: toggleDark
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                    color: "text",
                                                    href: "mailto:jenyjenyy@gmail.com",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
                                                        name: "Message",
                                                        size: 1.5
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_web_share_namespaceObject.RWebShare, {
                                                    data: {
                                                        text: `${headerSharing}`,
                                                        url: `${linkSharing}`,
                                                        title: `${textSharing}`
                                                    },
                                                    onClick: ()=>console.log("shared successfully!"),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
                                                        name: "SharedIcon",
                                                        size: 1.5,
                                                        onClick: ()=>console.log("onPressCar")
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton, {
                                                        name: "Home",
                                                        size: 1.5
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                            src: "/media/logo.7ffbe716.png",
                                            css: {
                                                size: "220px",
                                                mt: "30px"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "wrapperInfo",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h1: true,
                                            size: 60,
                                            weight: "bold",
                                            children: "Ievgen Stolbovyi"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h2: true,
                                            size: 25,
                                            weight: "bold",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                color: "text",
                                                href: "tel:+380937484584",
                                                children: "Phone: +380937484584"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h2: true,
                                            size: 25,
                                            weight: "bold",
                                            children: "Telegram, Viber +380937484584"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            h2: true,
                                            size: 25,
                                            weight: "bold",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                color: "text",
                                                href: "mailto:jenyjenyy@gmail.com",
                                                children: "Email: jenyjenyy@gmail.com"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonGroup, {
                        whichThem: isDark
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FooterDeskstop, {})
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout/index.ts


;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5544:
/***/ (() => {



/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 6735:
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [782], () => (__webpack_exec__(4959)));
module.exports = __webpack_exports__;

})();