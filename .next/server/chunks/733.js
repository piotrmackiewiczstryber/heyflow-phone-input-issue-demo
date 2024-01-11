exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(e,t){if(true)module.exports=t(__webpack_require__(8038),__webpack_require__(4641),__webpack_require__(4926),__webpack_require__(2545),__webpack_require__(9189),__webpack_require__(6519));else { var n, o; }}(self,(function(e,t,o,n,r,i){return(()=>{"use strict";var a={2214:e=>{e.exports=i},4174:e=>{e.exports=r},6351:e=>{e.exports=n},4450:e=>{e.exports=o},8310:e=>{e.exports=t},8156:t=>{t.exports=e}},l={};function c(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return a[e](o,o.exports,c),o.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{c.r(s),c.d(s,{default:()=>R});var e,t=c(8156),o=c.n(t),n=c(8310),r=c.n(n),i=c(4450);!function(e){e.display1="display1",e.display2="display2",e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.body1="body1",e.body2="body2",e.body3="body3",e.caption1="caption1",e.caption2="caption2",e.components1="components1",e.components2="components2",e.components3="components3",e.buttonLabelMini="buttonLabelMini",e.buttonLabelLarge="buttonLabelLarge"}(e||(e={}));const a=(0,i.createStyles)((function(t){var o;return(o={text:{display:"inline-block",fontFamily:t.font}})[e.display1]={fontSize:(0,i.toRem)(72),lineHeight:(0,i.toRem)(80)},o[e.display2]={fontSize:(0,i.toRem)(60),lineHeight:(0,i.toRem)(72)},o[e.h1]={padding:0,margin:0,fontSize:(0,i.toRem)(48),lineHeight:(0,i.toRem)(56)},o[e.h2]={padding:0,margin:0,fontSize:(0,i.toRem)(38),lineHeight:(0,i.toRem)(46)},o[e.h3]={padding:0,margin:0,fontSize:(0,i.toRem)(32),lineHeight:(0,i.toRem)(40)},o[e.h4]={padding:0,margin:0,fontSize:(0,i.toRem)(28),lineHeight:(0,i.toRem)(34)},o[e.body1]={fontSize:(0,i.toRem)(18),lineHeight:(0,i.toRem)(28)},o[e.body2]={fontSize:(0,i.toRem)(16),lineHeight:(0,i.toRem)(24)},o[e.body3]={fontSize:(0,i.toRem)(14),lineHeight:(0,i.toRem)(20)},o[e.caption1]={fontSize:(0,i.toRem)(12),lineHeight:(0,i.toRem)(14)},o[e.caption2]={fontSize:(0,i.toRem)(10),lineHeight:(0,i.toRem)(12)},o[e.components1]={fontSize:(0,i.toRem)(16)},o[e.components2]={fontSize:(0,i.toRem)(14)},o[e.components3]={fontSize:(0,i.toRem)(10)},o[e.buttonLabelMini]={fontSize:(0,i.toRem)(10)},o[e.buttonLabelLarge]={fontSize:(0,i.toRem)(16)},o.left={textAlign:"left"},o.center={textAlign:"center"},o.right={textAlign:"right"},o.regular={fontWeight:"400"},o.medium={fontWeight:"500"},o.semiBold={fontWeight:"600"},o.bold={fontWeight:"700"},o}),{internalUsage:!0});var l=c(6351),u=c.n(l),d=c(4174);const p=(0,i.createStyles)((function(e){return{errorMessage:{display:"flex",alignItems:"flex-start",gap:e.spacing[8],marginTop:e.spacing[8],marginBottom:e.spacing[8],color:e.colors.error.main500,lineHeight:(0,i.toRem)(16),boxSizing:"border-box","& *":{boxSizing:"inherit"}},icon:{minWidth:(0,i.toRem)(16),width:(0,i.toRem)(16),minHeight:(0,i.toRem)(16),height:(0,i.toRem)(16)}}}),{internalUsage:!0});var f=function(e){var t=e.text,n=e.className,a=e.dir,l=void 0===a?(0,i.useDir)(e.dir):a,c=p(),s=(0,i.useTheme)().theme;return o().createElement(u(),{variant:"components2",weight:"regular",dir:l,className:r()(c.errorMessage,n)},o().createElement(d.ErrorIcon,{variant:"filled",fill:s.colors.error.main500,className:c.icon}),t)};const m=(0,i.createStyles)((function(e){return{hintMessage:{color:e.colors.text.secondary,lineHeight:(0,i.toRem)(17),fontSize:(0,i.toRem)(14),fontFamily:e.font,boxSizing:"border-box","& *":{boxSizing:"inherit"}},disabled:{color:e.colors.text.disabled}}}),{internalUsage:!0});var g=function(){return g=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},g.apply(this,arguments)},b=function(e){var t,n=e.text,a=e.className,l=e.disabled,c=e.dir,s=void 0===c?(0,i.useDir)(e.dir):c,d=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["text","className","disabled","dir"]),p=m();return o().createElement(u(),g({variant:"components2",weight:"regular"},d,{dir:s,className:r()(p.hintMessage,a,(t={},t[p.disabled]=l,t))}),n)},h=c(2214),y=function(e,t){var o=0,n=e.replace(/\D/g,""),r=t.replace(/[X\d]/g,(function(e){var t=o<n.length?n.charAt(o):e;return o+=1,t}));return o=r.indexOf("X")>=0?r.indexOf("X"):t.length,r.slice(0,o)},x=function(){return x=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},x.apply(this,arguments)},v=function(e){var n,l,c,s=e.label,p=e.className,m=e.hint,g=e.prefix,v=e.prefixClassName,R=e.postfix,w=e.postfixClassName,S=e.errorClassName,O=e.hintClassName,C=e.leftIcon,L=e.content,k=e.rightIcon,E=e.placeholder,I=e.clearButton,N=void 0!==I&&I,j=e.fullWidth,z=e.dir,P=void 0===z?(0,i.useDir)(e.dir):z,F=e.floatingLabelFocused,T=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["label","className","hint","prefix","prefixClassName","postfix","postfixClassName","errorClassName","hintClassName","leftIcon","content","rightIcon","placeholder","clearButton","fullWidth","dir","floatingLabelFocused"]),W=(0,i.createStyles)((function(e){return{inputRoot:function(e){return{direction:e.dir||"inherit",width:(0,i.toRem)(320)}},fullWidth:function(){return{width:"100%"}},inputContainer:function(t){return{boxSizing:"border-box",borderRadius:(0,i.toRem)(4),position:"relative",fontFamily:e.font,display:"flex",flexDirection:"row",alignItems:"center",padding:[(0,i.toRem)(8),(0,i.toRem)(12)],height:(0,i.toRem)("floatingLabel"===t.variant?56:48),border:"".concat((0,i.toRem)(1)," solid ").concat(e.colors.neutralGray.medium300),backgroundColor:e.colors.background.white,transition:"border-color .3s, box-shadow .3s","&:hover, &:hover $input":{backgroundColor:e.colors.background.extraLightGrey},"&:hover:not($disabled):not($inputContainerError)":{border:"".concat((0,i.toRem)(1)," solid ").concat(e.colors[t.color].medium400)},"&:focus-within, &:focus-within $input":{backgroundColor:e.colors.background.white},"&:focus-within:not($disabled):not($inputContainerError)":{border:"".concat((0,i.toRem)(1)," solid ").concat(e.colors[t.color].main500),boxShadow:"0 0 0 ".concat((0,i.toRem)(1)," ").concat(e.colors[t.color].main500)},"&$disabled":{backgroundColor:e.colors.background.extraLightGrey,"& svg path":{fill:e.colors.neutralGray.light200}}}},disabled:{pointerEvents:"none",userSelect:"none"},inputContainerError:function(){return{border:"".concat((0,i.toRem)(1)," solid ").concat(e.colors.error.main500),"&:focus-within":{border:"".concat((0,i.toRem)(1)," solid ").concat(e.colors.error.main500),boxShadow:"0 0 0 ".concat((0,i.toRem)(1)," ").concat(e.colors.error.main500)}}},input:{border:"none",outline:"none",textOverflow:"ellipsis",height:(0,i.toRem)(24),padding:0,width:"100%",color:e.colors.text.headline,backgroundColor:e.colors.background.white,"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{"-webkit-appearance":"none",appearance:"none",margin:0},"&[type=number]":{"-moz-appearance":"textfield"},"&::placeholder":{color:e.colors.text.disabled},"&[disabled]":{backgroundColor:e.colors.background.extraLightGrey}},inputArea:{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",overflow:"hidden",flexGrow:1},prefix:{color:e.colors.text.headline,backgroundColor:e.colors.background.white,whiteSpace:"pre"},postfix:function(t){var o;return(o={color:e.colors.text.secondary,backgroundColor:e.colors.background.white,whiteSpace:"pre"})["rtl"===t.dir?"marginRight":"marginLeft"]=(0,i.toRem)(10),o},label:function(t){return{display:"block",textAlign:"rtl"===t.dir?"right":"left",marginBottom:e.spacing[8],color:e.colors.text.headline,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden","&:hover":{cursor:"default"}}},floatingLabel:function(){return{marginBottom:0,color:e.colors.text.secondary,transition:"font-size 0.2s"}},textDisabled:{color:e.colors.text.disabled,"&::placeholder":{color:e.colors.text.disabled}},withPaddingLeft:function(e){var t;return(t={})["rtl"===e.dir?"paddingRight":"paddingLeft"]=(0,i.toRem)(12),t},message:{marginTop:(0,i.toRem)(8)},withLabel:{},inputWrapper:{display:"flex",flexDirection:"row",alignItems:"baseline"},floatingLabelInputWrapper:{height:0,transition:"height 0.2s, padding 0.2s, opacity 0.3s",overflow:"hidden",opacity:0},floatingLabelInputWrapperInUse:{height:(0,i.toRem)(24),marginTop:(0,i.toRem)(2),opacity:1},clearButton:function(e){var t;return(t={width:20,height:20})["rtl"===e.dir?"marginRight":"marginLeft"]=(0,i.toRem)(10),t.backgroundColor="white",t["&:hover"]={cursor:"pointer"},t}}}),{internalUsage:!0})(x(x({},e),{dir:P})),B="function"==typeof C?C(x(x({},e),{dir:P})):C,D="function"==typeof k?k(x(x({},e),{dir:P})):k,H=a(),M=(0,i.useTheme)().theme,q=function(e){var o=e.variant,n=void 0===o?"labelOutside":o,r=e.disabled,i=e.name,a=void 0===i?"":i,l=e.value,c=void 0===l?"":l,s=e.controlled,u=e.errorMessage,d=e.onChange,p=e.onFocus,f=e.onBlur,m=e.onClick,g=e.mask,b=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["variant","disabled","name","value","controlled","errorMessage","onChange","onFocus","onBlur","onClick","mask"]),x=(0,t.useRef)(null),v=(0,h.useFormContext)(a),R=v.updateFormTouched,w=v.updateFormValue,S=v.unsetFormValue,O=v.fieldValue,C=v.fieldError||u,L=O||c,k=(0,t.useState)(g&&L?y(L,g):L),E=k[0],I=k[1],N="floatingLabel"===n,j=(0,t.useState)(N&&!!c),z=j[0],P=j[1],F=(0,t.useState)(!1),T=F[0],W=F[1],B=function(e){if(r)return null;var t=e.target.value,o=t;I((function(e){return"number"===b.type?t.replace(/^\D/g,""):(g&&(o=e.length>=t.length?t:y(t,g)),o)})),d&&d(e)};return(0,t.useEffect)((function(){!s&&w(a,E)}),[E]),(0,t.useEffect)((function(){P(N&&!!c)}),[c]),(0,t.useEffect)((function(){return!s&&w(a,E,!0),function(){!s&&S(a)}}),[]),{name:a,errorMessage:C,disabled:r,inputProps:b,value:s?c:E,floatingLabel:N,inputInUse:z,inputRef:x,inFocus:T,setInternalValue:I,onInputContainerClick:function(e){m&&m(e),N&&P(!0),x.current&&x.current.focus()},onResetButtonPointerDown:function(e){e.preventDefault(),e.target.value="",B(e)},onChange:B,onFocus:function(e){p&&p(e),N&&P(!0),W(!0)},onBlur:function(e){var t=e.target.name;!s&&R(t,!0),f&&f(e),N&&!e.target.value&&P(!1),W(!1)}}}(T),U=q.name,A=q.value,$=q.disabled,G=q.errorMessage,V=q.inputProps,_=q.floatingLabel,X=q.inputInUse,J=q.inputRef,K=q.inFocus,Q=q.onResetButtonPointerDown,Y=q.onInputContainerClick,Z=q.onChange,ee=q.onBlur,te=q.onFocus,oe="boolean"==typeof F?_&&F:_&&X,ne=function(){var e,t;if(!s)return null;var n=oe?"caption1":_?"components1":"components2";return o().createElement(u(),{"data-testid":"input-label",variant:n,weight:"regular",onClick:function(){var e;null===(e=J.current)||void 0===e||e.focus()},className:r()(W.label,(e={},e[W.floatingLabel]=_,e),(t={},t[W.textDisabled]=$,t))},s)};return o().createElement("div",{className:r()(W.inputRoot,(n={},n[W.fullWidth]=j,n),p)},function(){var t,n,i,a;return o().createElement(o().Fragment,null,!_&&ne(),o().createElement("div",{onClick:Y,className:r()(W.inputContainer,(t={},t[W.disabled]=$,t[W.inputContainerError]=!!G,t[W.withLabel]=s,t[W.fullWidth]=j,t))},B,o().createElement("div",{className:W.inputArea},_&&ne(),o().createElement("div",{className:r()(W.inputWrapper,(n={},n[W.floatingLabelInputWrapper]=_,n),(i={},i[W.floatingLabelInputWrapperInUse]=oe,i))},!!g&&o().createElement(u(),{variant:"components1",className:r()(W.prefix,v)},g),L||o().createElement("input",x({},V,{dir:P,name:U,ref:J,value:A,className:r()(W.input,H.components1,H.regular,(a={},a[W.textDisabled]=$,a)),placeholder:E,disabled:$,onChange:Z,onBlur:ee,onFocus:te})))),N&&K&&!!A&&!e.readOnly&&o().createElement("div",{className:W.clearButton,onPointerDown:Q,"data-testid":"clear-button"},o().createElement(d.CloseCircleIcon,{variant:"filled",fill:M.colors.text.tint})),!!R&&o().createElement(u(),{variant:"components1",className:r()(W.postfix,w)},R),D))}(),G&&o().createElement(f,{text:G,className:r()(W.message,S,(l={},l[W.withPaddingLeft]=_,l)),dir:P}),!G&&m&&o().createElement(b,{text:m,disabled:$,dir:P,className:r()(W.message,O,(c={},c[W.withPaddingLeft]=_,c))}))};v.defaultProps={color:"primary"};const R=v})(),s})()}));

/***/ })

};
;