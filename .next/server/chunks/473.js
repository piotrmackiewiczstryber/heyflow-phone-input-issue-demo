"use strict";
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.theme/index.js
var gaia_react_theme = __webpack_require__(4926);
;// CONCATENATED MODULE: ./src/components/Accordion/Accordion.styles.ts

const useStyles = (0,gaia_react_theme.createStyles)((theme)=>({
        accordionContainer: {
            padding: [
                theme.spacing[24],
                theme.spacing[16]
            ],
            backgroundColor: theme.colors.background.extraLightGrey,
            borderRadius: theme.spacing[16],
            display: "grid",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out"
        },
        openContainer: {
            backgroundColor: theme.colors.background.lightGrey
        },
        titleWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: theme.colors.text.headline
        },
        contentWrapper: {
            display: "grid",
            gap: theme.spacing[16],
            maxHeight: 0,
            overflow: "hidden",
            transition: "all 0.3s ease-in-out"
        },
        open: {
            marginTop: theme.spacing[16],
            maxHeight: 500
        }
    }));

// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.text/index.js
var gaia_react_text = __webpack_require__(2545);
var gaia_react_text_default = /*#__PURE__*/__webpack_require__.n(gaia_react_text);
;// CONCATENATED MODULE: ./src/components/Icons/minus.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMinus = function SvgMinus(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 26,
    height: 26,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react_.createElement("path", {
    fill: "#101828",
    d: "M6.23 13.813A.79.79 0 0 1 5.416 13a.79.79 0 0 1 .812-.812h13.542a.79.79 0 0 1 .812.812.79.79 0 0 1-.812.813z"
  })));
};
/* harmony default export */ const minus = (SvgMinus);
;// CONCATENATED MODULE: ./src/components/Icons/plus.svg
var plus_path;
function plus_extends() { plus_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return plus_extends.apply(this, arguments); }

var SvgPlus = function SvgPlus(props) {
  return /*#__PURE__*/react_.createElement("svg", plus_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 26,
    height: 26,
    fill: "none"
  }, props), plus_path || (plus_path = /*#__PURE__*/react_.createElement("path", {
    fill: "#000",
    d: "M13.417 20.167a.79.79 0 0 1-.813-.813v-5.958H6.646a.79.79 0 0 1-.813-.813.79.79 0 0 1 .813-.812h5.958V5.812A.79.79 0 0 1 13.417 5a.8.8 0 0 1 .582.23.8.8 0 0 1 .23.582v5.959h5.959a.79.79 0 0 1 .813.813.79.79 0 0 1-.814.812H14.23v5.958a.8.8 0 0 1-.23.582.8.8 0 0 1-.582.23"
  })));
};
/* harmony default export */ const plus = (SvgPlus);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4641);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Accordion/Accordion.tsx







const Accordion = ({ children, title, className })=>{
    const [isOpen, setIsOpen] = react_default().useState(false);
    const classes = useStyles();
    const toggleOpen = ()=>{
        setIsOpen((isOpen)=>!isOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classnames_default()(classes.accordionContainer, {
            [classes.openContainer]: isOpen
        }, className),
        onClick: toggleOpen,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.titleWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                        weight: "bold",
                        variant: "body1",
                        children: title
                    }),
                    isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(minus, {}) : /*#__PURE__*/ jsx_runtime_.jsx(plus, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classnames_default()(classes.contentWrapper, {
                    [classes.open]: isOpen
                }),
                children: children
            })
        ]
    });
};


/***/ })

};
;