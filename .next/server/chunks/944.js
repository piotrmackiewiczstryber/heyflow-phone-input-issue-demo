"use strict";
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 9309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApplyCard: () => (/* binding */ ApplyCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.text/index.js
var gaia_react_text = __webpack_require__(2545);
var gaia_react_text_default = /*#__PURE__*/__webpack_require__.n(gaia_react_text);
// EXTERNAL MODULE: ./src/components/CustomButton/CustomButton.tsx + 1 modules
var CustomButton = __webpack_require__(938);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.theme/index.js
var gaia_react_theme = __webpack_require__(4926);
;// CONCATENATED MODULE: ./src/components/ApplyCard/ApplyCard.styles.ts

/* harmony default export */ const ApplyCard_styles = ((0,gaia_react_theme.createStyles)((theme)=>({
        container: {
            padding: 40,
            backgroundColor: theme.colors.secondary.main500,
            display: "flex",
            borderRadius: 32,
            gap: 80,
            alignItems: "center",
            justifyContent: "center",
            color: theme.colors.contrast.white,
            minHeight: 240
        },
        textContainer: {
            display: "grid",
            gap: theme.spacing[24]
        },
        button: {
            width: 343
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            container: {
                flexDirection: "column",
                gap: 32,
                minHeight: "unset"
            },
            textContainer: {
                "&>span": {
                    textAlign: "center"
                }
            },
            button: {
                width: "100%"
            }
        }
    })));

;// CONCATENATED MODULE: ./src/components/ApplyCard/ApplyCard.tsx
/* __next_internal_client_entry_do_not_use__ ApplyCard auto */ 



const ApplyCard = ({ title, subtitle, buttonText })=>{
    const classes = ApplyCard_styles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.textContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                        variant: "h4",
                        weight: "bold",
                        children: title
                    }),
                    subtitle ? /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                        variant: "body2",
                        children: subtitle
                    }) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CustomButton/* CustomButton */.o, {
                variant: "outlined",
                contrast: true,
                className: classes.button,
                children: buttonText
            })
        ]
    });
};


/***/ }),

/***/ 6180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BlogsArticlesCarousel: () => (/* binding */ BlogsArticlesCarousel)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/assets/images/blog-1.jpg
/* harmony default export */ const blog_1 = ({"src":"/_next/static/media/blog-1.bdf6cc76.jpg","height":300,"width":305,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAALhL/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQMCAAURMSFSYf/aAAgBAQABPwBVzm0B02nayeuRLnXlf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhP/2gAIAQIBAT8A2tH/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAID/9oACAEDAQE/AHOjP//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/blog-2.jpg
/* harmony default export */ const blog_2 = ({"src":"/_next/static/media/blog-2.8ff00eaf.jpg","height":300,"width":305,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqwC//8QAGhAAAgIDAAAAAAAAAAAAAAAAAhEAIQEDBP/aAAgBAQABPwAOnaQtBbWbU//EABgRAAIDAAAAAAAAAAAAAAAAAAABAwRC/9oACAECAQE/AHYlWj//xAAXEQADAQAAAAAAAAAAAAAAAAAAAxNR/9oACAEDAQE/AIrw/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/blog-3.jpg
/* harmony default export */ const blog_3 = ({"src":"/_next/static/media/blog-3.e580dafd.jpg","height":300,"width":305,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAJCVf//EABwQAQACAQUAAAAAAAAAAAAAAAIBBBEAAwUhMf/aAAgBAQABPwC7x1q1VgrasJrvJMwRjzX/xAAWEQEBAQAAAAAAAAAAAAAAAAABADL/2gAIAQIBAT8AyAX/xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8AdP/Z","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.text/index.js
var gaia_react_text = __webpack_require__(2545);
var gaia_react_text_default = /*#__PURE__*/__webpack_require__.n(gaia_react_text);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.theme/index.js
var gaia_react_theme = __webpack_require__(4926);
;// CONCATENATED MODULE: ./src/components/BlogsArticlesCarousel/BlogsArticlesCarousel.styles.ts

/* harmony default export */ const BlogsArticlesCarousel_styles = ((0,gaia_react_theme.createStyles)((theme)=>({
        root: {
            marginBottom: "50px"
        },
        title: {
            width: "100%",
            fontSize: "38px",
            fontWeight: 700,
            marginTop: 0,
            marginBottom: "72px",
            lineHeight: "45px",
            color: theme.colors.text.headline,
            textAlign: "center"
        },
        itemContainer: {
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing[24],
            width: "100%",
            maxWidth: "305px",
            paddingBottom: theme.spacing[32],
            boxShadow: "0px 2px 6.4px -1px rgba(19, 16, 34, 0.03), 0px 4.4px 12px -1px rgba(19, 16, 34, 0.06)"
        },
        itemImage: {
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px"
        },
        itemTextContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            gap: theme.spacing[24],
            padding: `0 20px`
        },
        itemTitle: {
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "28px"
        },
        itemLink: {
            textDecoration: "none",
            fontSize: "18px",
            lineHeight: "28px",
            color: theme.colors.text.lightGrey
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            title: {
                marginBottom: "43px",
                textAlign: ({ mobileTitleAlign })=>mobileTitleAlign
            }
        }
    })));

// EXTERNAL MODULE: ./src/components/Carousel/Carousel.tsx + 7 modules
var Carousel = __webpack_require__(912);
// EXTERNAL MODULE: ./src/hooks/useIsMobile.ts
var useIsMobile = __webpack_require__(3253);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Badges/Badges.tsx + 1 modules
var Badges = __webpack_require__(3626);
;// CONCATENATED MODULE: ./src/components/BlogsArticlesCarousel/BlogsArticlesCarousel.tsx
/* __next_internal_client_entry_do_not_use__ BlogsArticlesCarousel auto */ 










const blogCarouselItems = [
    {
        id: "1",
        image: blog_1,
        alt: "Blog Image 1",
        tags: [
            "التمويل العقاري"
        ],
        title: "مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة"
    },
    {
        id: "2",
        image: blog_2,
        alt: "Blog Image 2",
        tags: [
            "التمويل العقاري"
        ],
        title: "مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة"
    },
    {
        id: "3",
        image: blog_3,
        alt: "Blog Image 3",
        tags: [
            "التمويل العقاري"
        ],
        title: "مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة"
    },
    {
        id: "4",
        image: blog_3,
        alt: "Blog Image 4",
        tags: [
            "التمويل العقاري"
        ],
        title: "مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة"
    },
    {
        id: "5",
        image: blog_2,
        alt: "Blog Image 5",
        tags: [
            "التمويل العقاري"
        ],
        title: "مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة"
    },
    {
        id: "6",
        image: blog_1,
        alt: "Blog Image 6",
        tags: [
            "التمويل العقاري"
        ],
        title: "مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة"
    }
];
const BlogsArticlesCarousel = ({ maxSlides = 3, mobileTitleAlign = "center" })=>{
    const classes = BlogsArticlesCarousel_styles({
        mobileTitleAlign
    });
    const { screenWidth, isMd } = (0,useIsMobile/* useIsMobile */.d)();
    const slidesToShow = screenWidth < 800 ? 1 : screenWidth < 1280 ? 2 : maxSlides;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                weight: "bold",
                component: "h3",
                className: classes.title,
                children: "مدونة تمويلي"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Carousel/* Carousel */.l, {
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToShow,
                hidePaginationDots: !isMd,
                renderItems: ()=>blogCarouselItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.itemContainer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.image,
                                    alt: item.alt,
                                    className: classes.itemImage
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.itemTextContainer,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Badges/* Badges */.a, {
                                            badges: item.tags
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_text_default()), {
                                            className: classes.itemTitle,
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/blog/${item.id}`,
                                            className: classes.itemLink,
                                            children: "ابدا القرائة"
                                        })
                                    ]
                                })
                            ]
                        }, item.id))
            })
        ]
    });
};


/***/ }),

/***/ 1395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* reexport */ e0)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/BlogsArticlesCarousel/BlogsArticlesCarousel.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/piotrmackiewicz/Documents/projects/stryber/phone-number-input-issue-demo/src/components/BlogsArticlesCarousel/BlogsArticlesCarousel.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["BlogsArticlesCarousel"];

;// CONCATENATED MODULE: ./src/components/BlogsArticlesCarousel/index.ts



/***/ })

};
;