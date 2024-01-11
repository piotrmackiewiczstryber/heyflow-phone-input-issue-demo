"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Carousel)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/nuka-carousel/dist/index.js
var dist = __webpack_require__(477);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.theme/index.js
var gaia_react_theme = __webpack_require__(4926);
;// CONCATENATED MODULE: ./src/components/Carousel/styles.ts

/* harmony default export */ const styles = ((0,gaia_react_theme.createStyles)(()=>({
        root: {
            direction: "ltr",
            zIndex: 1,
            position: "relative"
        },
        frame: {
            paddingBottom: "12px"
        },
        container: {
            display: "flex",
            alignItems: "center",
            gap: "16px"
        }
    })));

// EXTERNAL MODULE: ./node_modules/@stryberventures/gaia-react.button/index.js
var gaia_react_button = __webpack_require__(2721);
var gaia_react_button_default = /*#__PURE__*/__webpack_require__.n(gaia_react_button);
;// CONCATENATED MODULE: ./src/components/Carousel/CarouselNavigationButton/styles.ts

/* harmony default export */ const CarouselNavigationButton_styles = ((0,gaia_react_theme.createStyles)((theme)=>({
        root: {
            backgroundColor: [
                theme.colors.contrast.white,
                "!important"
            ],
            borderColor: "transparent !important",
            border: [
                "none",
                "!important"
            ],
            borderRadius: "8px",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4.400000095367432px 12px -1px #1310220F !important",
            cursor: "pointer",
            padding: "0 !important",
            position: "absolute"
        }
    })));

;// CONCATENATED MODULE: ./src/components/Carousel/CarouselNavigationButton/CarouselNavigationButton.tsx



const CarouselNavigationButton = ({ icon, onClick, style })=>{
    const classes = CarouselNavigationButton_styles();
    return /*#__PURE__*/ jsx_runtime_.jsx((gaia_react_button_default()), {
        icon: icon,
        onClick: onClick,
        className: classes.root,
        style: style
    });
};

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/assets/icons/chevron-right.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChevronRight = function SvgChevronRight(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 7,
    height: 10,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react_.createElement("path", {
    fill: "#33354D",
    d: "M1.422 9.756 6.178 5 1.422.244.244 1.422 3.822 5 .244 8.577z"
  })));
};
/* harmony default export */ const chevron_right = (SvgChevronRight);
;// CONCATENATED MODULE: ./src/assets/icons/chevron-left.svg
var chevron_left_path;
function chevron_left_extends() { chevron_left_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chevron_left_extends.apply(this, arguments); }

var SvgChevronLeft = function SvgChevronLeft(props) {
  return /*#__PURE__*/react_.createElement("svg", chevron_left_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 7,
    height: 10,
    fill: "none"
  }, props), chevron_left_path || (chevron_left_path = /*#__PURE__*/react_.createElement("path", {
    fill: "#33354D",
    d: "M5.578.244.822 5l4.756 4.756 1.178-1.179L3.178 5l3.578-3.578z"
  })));
};
/* harmony default export */ const chevron_left = (SvgChevronLeft);
;// CONCATENATED MODULE: ./src/components/Carousel/CarouselPaginationDots/styles.ts

/* harmony default export */ const CarouselPaginationDots_styles = ((0,gaia_react_theme.createStyles)(()=>({
        root: {
            position: "relative",
            margin: 0,
            top: "30px",
            padding: 0
        },
        element: {
            listStyleType: "none",
            display: "inline-block"
        },
        button: {
            border: 0,
            background: "transparent",
            color: "black",
            cursor: "pointer",
            padding: "8px",
            outline: 0,
            opacity: 0.5
        },
        activeButton: {
            border: 0,
            background: "transparent",
            cursor: "pointer",
            padding: "8px",
            outline: 0,
            color: "black",
            opacity: 1
        }
    })));
const createDotStyles = (0,gaia_react_theme.createStyles)((theme)=>({
        root: {
            display: "block",
            width: ({ active })=>active ? "24px" : "5px",
            transition: "width 0.5s ease-out",
            height: "5px",
            borderRadius: "3px",
            backgroundColor: ({ active })=>active ? theme.colors.primary.main500 : theme.colors.primary.medium400
        }
    }));

;// CONCATENATED MODULE: ./src/components/Carousel/CarouselPaginationDots/CarouselPaginationDots.tsx


const Dot = ({ active })=>{
    const classes = createDotStyles({
        active
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.root
    });
};
const CarouselPagingDots = ({ slideCount, slidesToScroll, currentSlide, goToSlide })=>{
    const classes = CarouselPaginationDots_styles();
    const getIndexes = (count, inc)=>{
        const arr = [];
        for(let i = 0; i < count; i += inc){
            arr.push(i);
        }
        return arr;
    };
    const indexes = getIndexes(slideCount, slidesToScroll);
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: classes.root,
        children: indexes.map((index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: classes.element,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: currentSlide === index ? classes.activeButton : classes.button,
                    onClick: ()=>goToSlide(index),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Dot, {
                        active: currentSlide === index
                    })
                })
            }, index);
        })
    });
};

// EXTERNAL MODULE: ./src/hooks/useIsMobile.ts
var useIsMobile = __webpack_require__(3253);
;// CONCATENATED MODULE: ./src/components/Carousel/Carousel.tsx








const Carousel = ({ slidesToShow, slidesToScroll, hideNavigationButtons, paginationPosition = "bottom", slideHorizontalPadding = 0, hidePaginationDots, autoplay = true, renderItems })=>{
    const classes = styles();
    const { isSm } = (0,useIsMobile/* useIsMobile */.d)();
    const leftArrowStyle = paginationPosition === "top-left" ? {
        top: 0,
        left: 0 + slideHorizontalPadding
    } : {
        left: isSm ? -13 : 0
    };
    const rightArrowStyle = paginationPosition === "top-left" ? {
        top: 0,
        left: 52 + slideHorizontalPadding
    } : {
        right: isSm ? -13 : 0
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.root,
        children: /*#__PURE__*/ jsx_runtime_.jsx((dist_default()), {
            autoplay: autoplay,
            autoplayInterval: 5000,
            wrapAround: true,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            className: classes.frame,
            defaultControlsConfig: {
                containerClassName: classes.container
            },
            renderCenterLeftControls: ({ previousSlide })=>hideNavigationButtons ? null : /*#__PURE__*/ jsx_runtime_.jsx(CarouselNavigationButton, {
                    onClick: previousSlide,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(chevron_left, {
                        alt: "Previous slide"
                    }),
                    style: leftArrowStyle
                }),
            renderCenterRightControls: ({ nextSlide })=>hideNavigationButtons ? null : /*#__PURE__*/ jsx_runtime_.jsx(CarouselNavigationButton, {
                    onClick: nextSlide,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(chevron_right, {
                        alt: "Next slide"
                    }),
                    style: rightArrowStyle
                }),
            renderBottomCenterControls: (props)=>hidePaginationDots ? null : /*#__PURE__*/ jsx_runtime_.jsx(CarouselPagingDots, {
                    ...props
                }),
            children: renderItems()
        })
    });
};


/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_1__.r)
/* harmony export */ });
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8982);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7788);




/***/ }),

/***/ 3253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useIsMobile)
/* harmony export */ });
/* harmony import */ var _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1796);

const useIsMobile = ()=>{
    const screenWidth = window.innerWidth;
    return {
        isMd: screenWidth < _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__/* .theme */ .r.breakpoints.md,
        isSm: screenWidth < _components_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__/* .theme */ .r.breakpoints.sm,
        isMobile: screenWidth < 1280,
        screenWidth
    };
};


/***/ })

};
;