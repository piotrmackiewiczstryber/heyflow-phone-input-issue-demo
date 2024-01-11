"use strict";
exports.id = 781;
exports.ids = [781];
exports.modules = {

/***/ 6938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = "https://api-dev.alnilam.stryber.io";


/***/ }),

/***/ 7304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useFetch)
/* harmony export */ });
/* unused harmony export fetchData */
/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2413);
/* __next_internal_client_entry_do_not_use__ fetchData,useFetch auto */ 
const fetchData = async (url, params)=>{
    const { method = "GET", payload } = params;
    const token = _services_localStorage__WEBPACK_IMPORTED_MODULE_0__.LS.getItem("accessToken");
    const authHeader = token ? {
        Authorization: `Bearer ${token}`
    } : {};
    const init = {
        method,
        headers: {
            ...authHeader,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    };
    const response = await fetch(url, init);
    let json = {};
    try {
        json = await response.json();
    } catch (e) {
        json.error = e.message;
        console.log(e);
    }
    if (!response.ok) {
        // unauthorized
        // token expired - here should be refresh token logic + re-request
        if (response.status === 401) {
            document.location.href = "/login";
            _services_localStorage__WEBPACK_IMPORTED_MODULE_0__.LS.removeItem("accessToken");
        }
        const errorMessage = json.error ? json.error : `${response.status} ${response.statusText}: ${JSON.stringify(json)}`;
        throw new Error(errorMessage, {
            cause: {
                code: response.status
            }
        });
    }
    return json;
};
const useFetch = (url, method)=>{
    return (payload)=>{
        const params = {
            method
        };
        if (method === "POST" || method === "PATCH") {
            if (payload) {
                params.payload = payload;
            }
        }
        return fetchData(url, params);
    };
};


/***/ }),

/***/ 2413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LS: () => (/* binding */ LS)
/* harmony export */ });
/* __next_internal_client_entry_do_not_use__ LS auto */ const LS = {
    getItem: (key)=>localStorage.getItem(key),
    setItem: (key, value)=>{
        localStorage.setItem(key, value);
    },
    removeItem: (key)=>{
        localStorage.removeItem(key);
    },
    clear: ()=>{
        localStorage.clear();
    }
};


/***/ })

};
;