"use strict";
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 4717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Breadcrumbs: () => (/* binding */ Breadcrumbs)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.theme/index.js
var gaia_react_theme = __webpack_require__(4926);
;// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.styles.ts

/* harmony default export */ const Breadcrumbs_styles = ((0,gaia_react_theme.createStyles)((theme)=>({
        container: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "46px"
        },
        link: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22.5px"
        },
        linkText: {
            display: "flex",
            alignItems: "center",
            color: theme.colors.text.secondary,
            gap: "4px"
        },
        active: {
            "&>span": {
                color: theme.colors.primary.main500
            }
        },
        homeIcon: {
            "&>path": {
                fill: theme.colors.text.secondary
            }
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            container: {
                marginTop: "32px"
            }
        }
    })));

// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.text/index.js
var gaia_react_text = __webpack_require__(2545);
var gaia_react_text_default = /*#__PURE__*/__webpack_require__.n(gaia_react_text);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.icons/index.js
var gaia_react_icons = __webpack_require__(9189);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/assets/icons/double-chevron-left.svg
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDoubleChevronLeft = function SvgDoubleChevronLeft(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 9,
    height: 8,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react_.createElement("path", {
    fill: "#667085",
    d: "M5.136 6.86 2.253 4l2.883-2.86-.939-.947L.36 4l3.838 3.807z"
  })), _path2 || (_path2 = /*#__PURE__*/react_.createElement("path", {
    fill: "#667085",
    d: "m7.53 7.807.94-.947L5.585 4l2.883-2.86-.938-.947L3.693 4z"
  })));
};
/* harmony default export */ const double_chevron_left = (SvgDoubleChevronLeft);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4641);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Breadcrumbs/Breadcrumbs.tsx
/* __next_internal_client_entry_do_not_use__ Breadcrumbs auto */ 







const pathsLabels = {
    blog: "عن تمويلي",
    faq: "اسئلة شائعة",
    "about-us": "عن تمويلي"
};
const Breadcrumbs = ({ activeElement })=>{
    const classes = Breadcrumbs_styles();
    const paths = (0,navigation.usePathname)();
    const pathNames = paths.split("/").filter((path)=>path);
    const elements = [
        {
            label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((gaia_react_text_default()), {
                className: classes.linkText,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(gaia_react_icons.HomeIcon, {
                        className: classes.homeIcon
                    }),
                    " تمويلي"
                ]
            }),
            link: "/"
        }
    ];
    pathNames.forEach((path)=>{
        if (pathsLabels[path]) {
            elements.push({
                label: /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                    className: classes.linkText,
                    children: pathsLabels[path]
                }),
                link: `/${path}`
            });
        }
    });
    if (activeElement) {
        elements.push({
            label: /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                className: classes.linkText,
                children: activeElement.label
            }),
            link: activeElement.path
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.container,
        children: elements.map((el, idx, arr)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: el.link,
                        className: classnames_default()(classes.link, {
                            [classes.active]: idx === arr.length - 1
                        }),
                        children: el.label
                    }, el.link),
                    idx !== arr.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx(double_chevron_left, {}) : null
                ]
            }))
    });
};


/***/ }),

/***/ 4396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/piotrmackiewicz/Documents/projects/stryber/phone-number-input-issue-demo/src/components/Breadcrumbs/Breadcrumbs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Breadcrumbs"];


/***/ })

};
;