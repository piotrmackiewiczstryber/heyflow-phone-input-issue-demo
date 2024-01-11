"use strict";
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 1057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BlogApplyCard: () => (/* binding */ BlogApplyCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/components/CustomButton/CustomButton.tsx + 1 modules
var CustomButton = __webpack_require__(938);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.theme/index.js
var gaia_react_theme = __webpack_require__(4926);
;// CONCATENATED MODULE: ./src/assets/images/blog-apply-image.jpg
/* harmony default export */ const blog_apply_image = ({"src":"/_next/static/media/blog-apply-image.0c6dd4e0.jpg","height":429,"width":570,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALogv//EABoQAQACAwEAAAAAAAAAAAAAAAIDEQAEBRL/2gAIAQEAAT8Ag4iU/RG5KWmLjQs+bOf/xAAYEQADAQEAAAAAAAAAAAAAAAABAgMRAP/aAAgBAgEBPwCaq0pkqNzv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/components/BlogApplyCard/BlogApplyCard.styles.ts


/* harmony default export */ const BlogApplyCard_styles = ((0,gaia_react_theme.createStyles)((theme)=>({
        card: {
            backgroundColor: theme.colors.secondary.main500,
            borderRadius: "32px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(2, 2fr)",
            marginBottom: "128px"
        },
        cardRight: {
            backgroundImage: `url(${blog_apply_image.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        cardLeft: {
            padding: "76px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "42px"
        },
        cardLeftText: {
            fontSize: "38px",
            fontWeight: 700,
            lineHeight: "45px",
            color: "#fff"
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            card: {
                display: "block",
                marginBottom: "80px"
            },
            cardRight: {
                display: "none"
            },
            cardLeft: {
                padding: "40px"
            },
            cardLeftText: {
                fontSize: "22px",
                lineHeight: "28px",
                textAlign: "center"
            }
        }
    })));

// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.text/index.js
var gaia_react_text = __webpack_require__(2545);
var gaia_react_text_default = /*#__PURE__*/__webpack_require__.n(gaia_react_text);
;// CONCATENATED MODULE: ./src/components/BlogApplyCard/BlogApplyCard.tsx
/* __next_internal_client_entry_do_not_use__ BlogApplyCard auto */ 



const BlogApplyCard = ()=>{
    const classes = BlogApplyCard_styles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.cardRight
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.cardLeft,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                        className: classes.cardLeftText,
                        children: "ابدأ رحلتك للتمويل العقاري مع تمويلي واحصل على بيت العمر"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomButton/* CustomButton */.o, {
                        variant: "outlined",
                        contrast: true,
                        children: "قدّم الآن"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 2538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/piotrmackiewicz/Documents/projects/stryber/phone-number-input-issue-demo/src/components/BlogApplyCard/BlogApplyCard.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["BlogApplyCard"];


/***/ })

};
;