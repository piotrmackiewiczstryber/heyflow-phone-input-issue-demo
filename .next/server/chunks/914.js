exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 3611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(e,t){if(true)module.exports=t(__webpack_require__(8038),__webpack_require__(4641),__webpack_require__(4926),__webpack_require__(2545),__webpack_require__(9189));else { var n, r; }}(self,(function(e,t,r,n,o){return(()=>{"use strict";var i={4174:e=>{e.exports=o},6351:e=>{e.exports=n},4450:e=>{e.exports=r},8310:e=>{e.exports=t},8156:t=>{t.exports=e}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return i[e](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{l.r(s),l.d(s,{default:()=>f});var e=l(8156),t=l.n(e),r=l(8310),n=l.n(r),o=l(4450),i=l(6351),a=l.n(i),c=l(4174);const d=(0,o.createStyles)((function(e){return{errorMessage:{display:"flex",alignItems:"flex-start",gap:e.spacing[8],marginTop:e.spacing[8],marginBottom:e.spacing[8],color:e.colors.error.main500,lineHeight:(0,o.toRem)(16),boxSizing:"border-box","& *":{boxSizing:"inherit"}},icon:{minWidth:(0,o.toRem)(16),width:(0,o.toRem)(16),minHeight:(0,o.toRem)(16),height:(0,o.toRem)(16)}}}),{internalUsage:!0});var u,p=function(e){var r=e.text,i=e.className,l=e.dir,s=void 0===l?(0,o.useDir)(e.dir):l,u=d(),p=(0,o.useTheme)().theme;return t().createElement(a(),{variant:"components2",weight:"regular",dir:s,className:n()(u.errorMessage,i)},t().createElement(c.ErrorIcon,{variant:"filled",fill:p.colors.error.main500,className:u.icon}),r)};!function(e){e.esc="Escape",e.enter="Enter",e.tab="Tab"}(u||(u={}));var g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)},m=function(t){var r,i,l,s,c,d,m=t.name,f=void 0===m?"":m,h=t.alignControl,b=void 0===h?"top":h,v=t.className,x=t.type,y=t.checked,w=t.disabled,R=t.value,C=(t.children,t.title),T=t.control,O=t.onChange,j=t.onFocus,E=t.errorMessage,S=(t.placeholder,t.label),N=t.hint,k=(t.controlled,t.reverse),q=t.fullWidth,I=(t.color,t.dir),P=void 0===I?(0,o.useDir)(t.dir):I,D=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(t,["name","alignControl","className","type","checked","disabled","value","children","title","control","onChange","onFocus","errorMessage","placeholder","label","hint","controlled","reverse","fullWidth","color","dir"]),M=(0,o.createStyles)((function(e){return{inputToggleLayout:function(e){return{direction:e.dir||"inherit",boxSizing:"border-box","& *, *:before, *:after":{boxSizing:"inherit"}}},disabled:{pointerEvents:"none","& $heading":{color:e.colors.text.disabled},"& $hint":{color:e.colors.text.disabled}},title:function(){return{color:e.colors.text.headline,lineHeight:"120%",margin:[0,e.spacing[8],e.spacing[8],e.spacing[4]]}},titleReverse:{textAlign:"right"},labelContainer:function(t){return{display:"grid",gridTemplateColumns:"auto 1fr",gap:"".concat((0,o.toRem)(8)," ").concat((0,o.toRem)(10)),position:"relative",userSelect:"none",width:"fit-content",padding:[e.spacing[4],e.spacing["rtl"===t.dir?4:8],e.spacing[4],e.spacing["rtl"===t.dir?8:4]],"-webkit-tap-highlight-color":"transparent","&:hover":{cursor:"pointer"},"&:has(input:focus-visible) input + div > div":{boxShadow:"0 0 0 2px white, 0 0 0 ".concat((0,o.toRem)(4)," ").concat(e.colors[t.color].light200)},"&$fullWidth":{display:"flex",width:"100%",justifyContent:"space-between"}}},reverse:{gridTemplateColumns:"1fr auto !important","& $inputContainer":{gridColumn:"2 / 3"},"& $label, & $hint":{gridColumn:"span 1"}},inputContainer:{gridColumn:"1",gridRow:"1 / 2",display:"flex",justifyContent:"center",paddingTop:(0,o.toRem)(1)},middleAlign:{alignItems:"center"},input:function(){return{position:"absolute",width:0,height:0,"-webkit-appearance":"none","-moz-appearance":"none",appearance:"none"}},label:function(t){return{textAlign:"rtl"===t.dir?"right":"left",display:"flex",alignItems:"center",color:e.colors.text.headline,lineHeight:"150%",gridColumn:"2 / 3"}},hint:{display:"flex",alignItems:"center",color:e.colors.text.secondary,lineHeight:"120%",gridColumn:"2 / 3"},firstRow:{gridRow:"1 / 2"},secondRow:{gridRow:"2 / 3"},error:function(t){var r;return(r={})["rtl"===t.dir?"marginRight":"marginLeft"]=e.spacing[4],r},fullWidth:{},medium:{},small:{},textDisabled:{color:e.colors.text.disabled}}}),{internalUsage:!0})(g(g({},t),{dir:P}));return e.createElement("div",{className:n()(M.inputToggleLayout,(r={},r[M.disabled]=w,r),v)},C&&e.createElement(a(),{variant:"components2",weight:"regular",className:n()(M.title,(i={},i[M.textDisabled]=w,i[M.titleReverse]=k,i))},C),e.createElement("label",{className:n()(M.labelContainer,(l={},l[M.reverse]=k,l[M.fullWidth]=q,l))},e.createElement("input",g({},D,{type:x,className:M.input,name:f,value:R,checked:y,disabled:w,onChange:O,onKeyDown:function(e){var t=null==e?void 0:e.target;e.key==u.enter&&(null==O||O(g(g({},e),{target:g(g({},t),{checked:!t.checked,name:f})})))},onFocus:j})),e.createElement("div",{className:n()(M.inputContainer,(s={},s[M.middleAlign]="middle"==b,s))},T),e.createElement("div",null,S&&"string"==typeof S?e.createElement(a(),{variant:"components2",weight:"regular",className:n()(M.label,M.firstRow,(c={},c[M.textDisabled]=w,c))},S):S,N&&e.createElement(a(),{variant:"components2",weight:"regular",className:n()(M.hint,(d={},d[M.textDisabled]=w,d[M.secondRow]=!!S,d[M.firstRow]=!S,d))},N))),E&&e.createElement(p,{text:E,className:M.error}))};m.defaultProps={type:"checkbox",color:"primary",checked:!1,disabled:!1};const f=m})(),s})()}));

/***/ }),

/***/ 8573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(e,r){if(true)module.exports=r(__webpack_require__(8038),__webpack_require__(3611),__webpack_require__(4641),__webpack_require__(4926),__webpack_require__(6519));else { var t, o; }}(self,(function(e,r,o,t,a){return(()=>{"use strict";var n={9154:e=>{e.exports=t},2214:e=>{e.exports=a},7029:e=>{e.exports=r},8310:e=>{e.exports=o},8156:r=>{r.exports=e}},l={};function c(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return n[e](o,o.exports,c),o.exports}c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},c.d=(e,r)=>{for(var o in r)c.o(r,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};return(()=>{c.r(d),c.d(d,{default:()=>f});var e=c(8156),r=c.n(e),o=c(7029),t=c.n(o),a=c(8310),n=c.n(a),l=c(9154);const i=(0,l.createStyles)((function(e){return{radioBoxMark:function(r){return{backgroundColor:e.colors.background.white,border:[(0,l.toRem)(1),"solid",e.colors["error"==r?r:"neutralGray"].dark600],borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",height:(0,l.toRem)(22),width:(0,l.toRem)(22),minWidth:(0,l.toRem)(22),transition:"background-color .3s ease-out, border-color .3s ease-out, box-shadow .3s ease-out",boxSizing:"border-box","& *, & *:after, & *:before":{boxSizing:"inherit"},"&:hover:not($disabled)":{backgroundColor:e.colors.neutralGray.extraLight50,borderColor:e.colors[r].light200},"& ~ $disabled, &:hover ~ $disabled":{backgroundColor:e.colors.contrast.white,boxShadow:"none"},"&:active:not($disabled)":{border:"".concat((0,l.toRem)(1)," solid ").concat(e.colors.neutralGray.dark600),backgroundColor:e.colors.neutralGray.light200}}},checked:function(r){return{"&$disabled":{backgroundColor:e.colors.neutralGray.medium300,borderColor:e.colors.neutralGray.medium300},"&:not($disabled)":{backgroundColor:e.colors[r].main500,borderColor:e.colors[r].main500},"&:not($disabled):hover:not(:active)":{backgroundColor:e.colors[r].medium400,borderColor:e.colors[r].medium400,boxShadow:"0px 0px 0px 3px ".concat(e.colors[r].extraLight50)},"&:not($disabled):hover:active":{boxShadow:"none",backgroundColor:e.colors[r].medium300,borderColor:e.colors[r].medium300}}},disabled:{cursorEvents:"none",backgroundColor:e.colors.neutralGray.medium300,borderColor:e.colors.neutralGray.medium300,"&:not($checked)":{backgroundColor:"transparent",borderColor:e.colors.neutralGray.medium300}},clickArea:{position:"absolute",width:(0,l.toRem)(32),height:(0,l.toRem)(32)},radioBoxIcon:{width:(0,l.toRem)(8),height:(0,l.toRem)(8),backgroundColor:e.colors.contrast.white,borderRadius:"50%"}}}),{internalUsage:!0});var s=function(e){var o,t=e.checked,a=e.disabled,l=i(e.color);return r().createElement("div",{className:n()(l.radioBoxMark,(o={},o[l.checked]=t,o[l.disabled]=a,o))},t&&r().createElement("div",{className:l.radioBoxIcon}),r().createElement("div",{className:l.clickArea}))};s.defaultProps={checked:!1,color:"primary"};var u=c(2214),b=function(){return b=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var a in r=arguments[o])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},b.apply(this,arguments)},m=function(o){var a=function(r){var o=r.name,t=void 0===o?"":o,a=r.checked,n=r.disabled,l=r.errorMessage,c=r.onChange,d=r.onFocus,i=r.value,s=(0,u.useFormContext)(t),b=s.fieldValue,m=s.fieldError,f=s.updateFormTouched,p=s.updateFormValue,h=b===i;return e.useEffect((function(){return a&&p(t,i,!0),function(){p(t,void 0,!0)}}),[]),{checked:h||a,errorMessage:m||l,onChange:function(e){if(n)return null;var r=e.target,o=r.name;r.checked&&p(o,i),c&&c(e)},onFocus:function(e){var r=e.target.name;f(r,!0),d&&d(e)}}}(o),n=a.checked,l=a.errorMessage,c=a.onChange,d=a.onFocus,i=o.disabled,m=o.color,f=o.label,p=(o.children,o.reverse),h=o.fullWidth,g=o.className,y=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]])}return o}(o,["disabled","color","label","children","reverse","fullWidth","className"]);return r().createElement(t(),b({},y,{type:"radio",checked:n,errorMessage:l,onChange:c,onFocus:d,label:f,disabled:i,reverse:p,fullWidth:h,className:g,control:r().createElement(s,{checked:n,disabled:i,color:m})}))};m.defaultProps={color:"primary"};const f=m})(),d})()}));

/***/ }),

/***/ 2923:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ useQuery)
});

// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/utils.js
var utils = __webpack_require__(3224);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/notifyManager.js
var notifyManager = __webpack_require__(8602);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/focusManager.js
var focusManager = __webpack_require__(2596);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/subscribable.js
var subscribable = __webpack_require__(9506);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/modern/retryer.js
var retryer = __webpack_require__(1604);
;// CONCATENATED MODULE: ./node_modules/@tanstack/query-core/build/modern/queryObserver.js
// src/queryObserver.ts





var QueryObserver = class extends subscribable/* Subscribable */.l {
  constructor(client, options) {
    super();
    this.options = options;
    this.#client = client;
    this.#selectError = null;
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options, notifyOptions) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (!(0,utils/* shallowEqualObjects */.VS)(prevOptions, this.options)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
      throw new Error("Expected enabled to be a boolean");
    }
    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }
    this.#updateQuery();
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult(notifyOptions);
    if (mounted && (this.#currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result) {
    const trackedResult = {};
    Object.keys(result).forEach((key) => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.#trackedProps.add(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    query.isFetchingOptimistic = true;
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(utils/* noop */.ZT);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    if (utils/* isServer */.sk || this.#currentResult.isStale || !(0,utils/* isValidTimeout */.PN)(this.options.staleTime)) {
      return;
    }
    const time = (0,utils/* timeUntilStale */.Kp)(
      this.#currentResult.dataUpdatedAt,
      this.options.staleTime
    );
    const timeout = time + 1;
    this.#staleTimeoutId = setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (utils/* isServer */.sk || this.options.enabled === false || !(0,utils/* isValidTimeout */.PN)(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager/* focusManager */.j.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let { error, errorUpdatedAt, fetchStatus, status } = state;
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        fetchStatus = (0,retryer/* canFetch */.Kw)(query.options.networkMode) ? "fetching" : "paused";
        if (!state.dataUpdatedAt) {
          status = "pending";
        }
      }
      if (options._optimisticResults === "isRestoring") {
        fetchStatus = "idle";
      }
    }
    if (options.select && typeof state.data !== "undefined") {
      if (prevResult && state.data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(state.data);
          data = (0,utils/* replaceData */.oE)(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    } else {
      data = state.data;
    }
    if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
        if (options.select && typeof placeholderData !== "undefined") {
          try {
            placeholderData = options.select(placeholderData);
            this.#selectError = null;
          } catch (selectError) {
            this.#selectError = selectError;
          }
        }
      }
      if (typeof placeholderData !== "undefined") {
        status = "success";
        data = (0,utils/* replaceData */.oE)(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const result = {
      status,
      fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: state.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      failureReason: state.fetchFailureReason,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && state.dataUpdatedAt === 0,
      isPaused: fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch
    };
    return result;
  }
  updateResult(notifyOptions) {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if ((0,utils/* shallowEqualObjects */.VS)(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const defaultNotifyOptions = {};
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    if (notifyOptions?.listeners !== false && shouldNotifyListeners()) {
      defaultNotifyOptions.listeners = true;
    }
    this.#notify({ ...defaultNotifyOptions, ...notifyOptions });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    notifyManager/* notifyManager */.V.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!(0,utils/* shallowEqualObjects */.VS)(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

//# sourceMappingURL=queryObserver.js.map
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
"use client";

// src/QueryErrorResetBoundary.tsx

function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = react_.createContext(createValue());
var useQueryErrorResetBoundary = () => react_.useContext(QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /* @__PURE__ */ React.createElement(QueryErrorResetBoundaryContext.Provider, { value }, typeof children === "function" ? children(value) : children);
};

//# sourceMappingURL=QueryErrorResetBoundary.js.map
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(4070);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/modern/isRestoring.js
"use client";

// src/isRestoring.ts

var IsRestoringContext = react_.createContext(false);
var useIsRestoring = () => react_.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

//# sourceMappingURL=isRestoring.js.map
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/utils.js
var modern_utils = __webpack_require__(8266);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
"use client";

// src/errorBoundaryUtils.ts


var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  react_.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (0,modern_utils/* shouldThrowError */.L)(throwOnError, [result.error, query]);
};

//# sourceMappingURL=errorBoundaryUtils.js.map
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/modern/suspense.js
// src/suspense.ts
var defaultThrowOnError = (_error, query) => typeof query.state.data === "undefined";
var ensureStaleTime = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});

//# sourceMappingURL=suspense.js.map
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
"use client";

// src/useBaseQuery.ts







function useBaseQuery(options, Observer, queryClient) {
  if (false) {}
  const client = (0,QueryClientProvider/* useQueryClient */.NL)(queryClient);
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedOptions = client.defaultQueryOptions(options);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureStaleTime(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
  useClearResetErrorBoundary(errorResetBoundary);
  const [observer] = react_.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  react_.useSyncExternalStore(
    react_.useCallback(
      (onStoreChange) => {
        const unsubscribe = isRestoring ? () => void 0 : observer.subscribe(notifyManager/* notifyManager */.V.batchCalls(onStoreChange));
        observer.updateResult();
        return unsubscribe;
      },
      [observer, isRestoring]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  react_.useEffect(() => {
    observer.setOptions(defaultedOptions, { listeners: false });
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query: client.getQueryCache().get(defaultedOptions.queryHash)
  })) {
    throw result.error;
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

//# sourceMappingURL=useBaseQuery.js.map
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
"use client";

// src/useQuery.ts


function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver, queryClient);
}

//# sourceMappingURL=useQuery.js.map

/***/ }),

/***/ 8266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ shouldThrowError)
/* harmony export */ });
// src/utils.ts
function shouldThrowError(throwError, params) {
  if (typeof throwError === "function") {
    return throwError(...params);
  }
  return !!throwError;
}

//# sourceMappingURL=utils.js.map

/***/ })

};
;