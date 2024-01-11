"use strict";
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 3626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ Badges)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.text/index.js
var gaia_react_text = __webpack_require__(2545);
var gaia_react_text_default = /*#__PURE__*/__webpack_require__.n(gaia_react_text);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.theme/index.js
var gaia_react_theme = __webpack_require__(4926);
;// CONCATENATED MODULE: ./src/components/Badges/Badges.styles.ts

/* harmony default export */ const Badges_styles = ((0,gaia_react_theme.createStyles)((theme)=>({
        badgesContainer: {
            gap: "8px",
            display: "flex",
            marginBottom: "-2px"
        },
        badge: {
            padding: `${theme.spacing[4]} ${theme.spacing[8]}`,
            backgroundColor: "#f2f4f7",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "14px",
            borderRadius: "4px",
            color: "#33354d"
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            badge: {
                color: theme.colors.text.lightGrey
            }
        }
    })));

;// CONCATENATED MODULE: ./src/components/Badges/Badges.tsx
/* __next_internal_client_entry_do_not_use__ Badges auto */ 


const Badges = ({ badges })=>{
    const classes = Badges_styles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.badgesContainer,
        children: badges.map((tag, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                className: classes.badge,
                children: tag
            }, idx))
    });
};


/***/ })

};
;