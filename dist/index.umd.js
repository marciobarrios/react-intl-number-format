!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("get-user-locale"),require("react")):"function"==typeof define&&define.amd?define(["exports","get-user-locale","react"],n):n(e.reactIntlNumberFormat={},e.getUserLocale,e.react)}(this,function(e,n,r){n=n&&n.hasOwnProperty("default")?n.default:n;var t="default"in r?r.default:r;function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){o(e,n,r[n])})}return e}function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,n){return e(n={exports:{}},n.exports),n.exports}var f=u(function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case s:case l:case i:case c:case a:case y:return e;default:switch(e=e&&e.$$typeof){case f:case p:case u:return e;default:return n}}case d:case m:case o:return n}}}function v(e){return b(e)===l}n.typeOf=b,n.AsyncMode=s,n.ConcurrentMode=l,n.ContextConsumer=f,n.ContextProvider=u,n.Element=t,n.ForwardRef=p,n.Fragment=i,n.Lazy=d,n.Memo=m,n.Portal=o,n.Profiler=c,n.StrictMode=a,n.Suspense=y,n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===c||e===a||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===m||e.$$typeof===u||e.$$typeof===f||e.$$typeof===p)},n.isAsyncMode=function(e){return v(e)||b(e)===s},n.isConcurrentMode=v,n.isContextConsumer=function(e){return b(e)===f},n.isContextProvider=function(e){return b(e)===u},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},n.isForwardRef=function(e){return b(e)===p},n.isFragment=function(e){return b(e)===i},n.isLazy=function(e){return b(e)===d},n.isMemo=function(e){return b(e)===m},n.isPortal=function(e){return b(e)===o},n.isProfiler=function(e){return b(e)===c},n.isStrictMode=function(e){return b(e)===a},n.isSuspense=function(e){return b(e)===y}});c(f);var s=u(function(e,n){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116;function d(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:var d=e.type;switch(d){case f:case s:case o:case a:case i:case p:return d;default:var b=d&&d.$$typeof;switch(b){case u:case l:case c:return b;default:return n}}case m:case y:case t:return n}}}var b=f,v=s,g=u,h=c,O=r,S=l,w=o,E=m,x=y,j=t,P=a,D=i,T=p,I=!1;function _(e){return d(e)===s}n.typeOf=d,n.AsyncMode=b,n.ConcurrentMode=v,n.ContextConsumer=g,n.ContextProvider=h,n.Element=O,n.ForwardRef=S,n.Fragment=w,n.Lazy=E,n.Memo=x,n.Portal=j,n.Profiler=P,n.StrictMode=D,n.Suspense=T,n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===l)},n.isAsyncMode=function(e){return I||(I=!0,function(e,n){if(void 0===n)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var r=arguments.length,t=Array(r>2?r-2:0),o=2;o<r;o++)t[o-2]=arguments[o];(function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=0,i="Warning: "+e.replace(/%s/g,function(){return r[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(e){}}).apply(void 0,[n].concat(t))}}(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||d(e)===f},n.isConcurrentMode=_,n.isContextConsumer=function(e){return d(e)===u},n.isContextProvider=function(e){return d(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return d(e)===l},n.isFragment=function(e){return d(e)===o},n.isLazy=function(e){return d(e)===m},n.isMemo=function(e){return d(e)===y},n.isPortal=function(e){return d(e)===t},n.isProfiler=function(e){return d(e)===a},n.isStrictMode=function(e){return d(e)===i},n.isSuspense=function(e){return d(e)===p}}()});c(s);var l=u(function(e){e.exports="production"===process.env.NODE_ENV?f:s}),p=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var r,t,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))y.call(r,a)&&(o[a]=r[a]);if(p){t=p(r);for(var c=0;c<t.length;c++)m.call(r,t[c])&&(o[t[c]]=r[t[c]])}}return o},b="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",v=function(){};if("production"!==process.env.NODE_ENV){var g=b,h={},O=Function.call.bind(Object.prototype.hasOwnProperty);v=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function S(e,n,r,t,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(O(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((t||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw c.name="Invariant Violation",c}a=e[i](n,i,t,r,null,g)}catch(e){a=e}if(!a||a instanceof Error||v((t||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in h)){h[a.message]=!0;var u=o?o():"";v("Failed "+r+" type: "+a.message+(null!=u?u:""))}}}S.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(h={})};var w=S,E=Function.call.bind(Object.prototype.hasOwnProperty),x=function(){};function j(){return null}function P(){}function D(){}"production"!==process.env.NODE_ENV&&(x=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}),D.resetWarningCache=P;var T=u(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,n){var r="function"==typeof Symbol&&Symbol.iterator,t="@@iterator",o="<<anonymous>>",i={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(j),arrayOf:function(e){return c(function(n,r,t,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var c=n[r];if(!Array.isArray(c))return new a("Invalid "+o+" `"+i+"` of type `"+s(c)+"` supplied to `"+t+"`, expected an array.");for(var u=0;u<c.length;u++){var f=e(c,u,t,o,i+"["+u+"]",b);if(f instanceof Error)return f}return null})},element:c(function(n,r,t,o,i){var c=n[r];return e(c)?null:new a("Invalid "+o+" `"+i+"` of type `"+s(c)+"` supplied to `"+t+"`, expected a single ReactElement.")}),elementType:c(function(e,n,r,t,o){var i=e[n];return l.isValidElementType(i)?null:new a("Invalid "+t+" `"+o+"` of type `"+s(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(e){return c(function(n,r,t,i,c){var u;return n[r]instanceof e?null:new a("Invalid "+i+" `"+c+"` of type `"+((u=n[r]).constructor&&u.constructor.name?u.constructor.name:o)+"` supplied to `"+t+"`, expected instance of `"+(e.name||o)+"`.")})},node:c(function(e,n,r,t,o){return f(e[n])?null:new a("Invalid "+t+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return c(function(n,r,t,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var c=n[r],u=s(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected an object.");for(var f in c)if(E(c,f)){var l=e(c,f,t,o,i+"."+f,b);if(l instanceof Error)return l}return null})},oneOf:function(e){return Array.isArray(e)?c(function(n,r,t,o,i){for(var c=n[r],u=0;u<e.length;u++)if((f=c)===(s=e[u])?0!==f||1/f==1/s:f!=f&&s!=s)return null;var f,s,l=JSON.stringify(e,function(e,n){return"symbol"===p(n)?String(n):n});return new a("Invalid "+o+" `"+i+"` of value `"+String(c)+"` supplied to `"+t+"`, expected one of "+l+".")}):("production"!==process.env.NODE_ENV&&x(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),j)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&x("Invalid argument supplied to oneOfType, expected an instance of array."),j;for(var n=0;n<e.length;n++){var r=e[n];if("function"!=typeof r)return x("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+y(r)+" at index "+n+"."),j}return c(function(n,r,t,o,i){for(var c=0;c<e.length;c++)if(null==(0,e[c])(n,r,t,o,i,b))return null;return new a("Invalid "+o+" `"+i+"` supplied to `"+t+"`.")})},shape:function(e){return c(function(n,r,t,o,i){var c=n[r],u=s(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected `object`.");for(var f in e){var l=e[f];if(l){var p=l(c,f,t,o,i+"."+f,b);if(p)return p}}return null})},exact:function(e){return c(function(n,r,t,o,i){var c=n[r],u=s(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected `object`.");var f=d({},n[r],e);for(var l in f){var p=e[l];if(!p)return new a("Invalid "+o+" `"+i+"` key `"+l+"` supplied to `"+t+"`.\nBad object: "+JSON.stringify(n[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,l,t,o,i+"."+l,b);if(y)return y}return null})}};function a(e){this.message=e,this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var r={},t=0;function i(i,c,u,f,s,l,p){if(f=f||o,l=l||u,p!==b){if(n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=f+":"+u;!r[m]&&t<3&&(x("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,t++)}}return null==c[u]?i?new a(null===c[u]?"The "+s+" `"+l+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+s+" `"+l+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(c,u,f,s,l)}var c=i.bind(null,!1);return c.isRequired=i.bind(null,!0),c}function u(e){return c(function(n,r,t,o,i,c){var u=n[r];return s(u)!==e?new a("Invalid "+o+" `"+i+"` of type `"+p(u)+"` supplied to `"+t+"`, expected `"+e+"`."):null})}function f(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(f);if(null===n||e(n))return!0;var o=function(e){var o=n&&(r&&n[r]||n[t]);if("function"==typeof o)return o}();if(!o)return!1;var i,a=o.call(n);if(o!==n.entries){for(;!(i=a.next()).done;)if(!f(i.value))return!1}else for(;!(i=a.next()).done;){var c=i.value;if(c&&!f(c[1]))return!1}return!0;default:return!1}}function s(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function p(e){if(null==e)return""+e;var n=s(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function y(e){var n=p(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return a.prototype=Error.prototype,i.checkPropTypes=w,i.resetWarningCache=w.resetWarningCache,i.PropTypes=i,i}(l.isElement,!0):function(){function e(e,n,r,t,o,i){if(i!==b){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:D,resetWarningCache:P};return r.PropTypes=r,r}()}),I={locale:n(),options:{currency:"USD",currencyDisplay:"symbol",localeMatcher:"best fit",maximumFractionDigits:2,maximumSignificantDigits:21,minimumFractionDigits:2,minimumIntegerDigits:1,minimumSignificantDigits:1,useGrouping:!0}},_=r.createContext(),N=function(){return r.useContext(_)},C=function(e){var n=e.as,r=e.locale,o=e.children,i=e.localeMatcher,c=e.currency,u=e.currencyStyle,f=e.currencyDisplay,s=e.useGrouping,l=e.minimumIntegerDigits,p=e.minimumFractionDigits,y=e.maximumFractionDigits,m=e.minimumSignificantDigits,d=e.maximumSignificantDigits,b=e.notation,v=e.compactDisplay,g=N(),h=g&&g.config.locale,O=g&&g.config.options,S=function(e){return void 0!==e},w=a({},S(i)&&{localeMatcher:i},S(c)&&{currency:c},S(u)&&{style:u},S(f)&&{currencyDisplay:f},S(s)&&{useGrouping:s},S(l)&&{minimumIntegerDigits:l},S(p)&&{minimumFractionDigits:p},S(y)&&{maximumFractionDigits:y},S(m)&&{minimumSignificantDigits:m},S(d)&&{maximumSignificantDigits:d},S(b)&&{notation:b},S(v)&&{compactDisplay:v}),E=r||h||I.locale,x=a({},O,w),j=new Intl.NumberFormat(E,x).format(o);return isNaN(o)?null:t.createElement(n,null,j)};C.propTypes={children:T.oneOfType([T.string,T.number]),locale:T.string,localeMatcher:T.oneOf(["lookup","best fit"]),currency:T.string,currencyDisplay:T.oneOf(["symbol","code","name"]),currencyStyle:T.oneOf(["decimal","currency","percent"]),useGrouping:T.bool,minimumIntegerDigits:T.number,minimumFractionDigits:T.number,maximumFractionDigits:T.number,minimumSignificantDigits:T.number,maximumSignificantDigits:T.number,notation:T.oneOf(["standard","scientific","engineering","compact"]),compactDisplay:T.oneOf(["short","long"])},C.defaultProps={as:"div"};var $=function(e){var n=N();return t.createElement(C,i({currency:e.currency||n&&n.config.options.currency||I.options.currency},e))};$.propTypes=a({},C.PropTypes),$.defaultProps={currencyStyle:"currency"},e.Number=C,e.Currency=$,e.useIntl=N,e.IntlProvider=function(e){var n,o=function(e){if(Array.isArray(e))return e}(n=r.useState(a({},I,e.config)))||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(t=(a=c.next()).done)&&(r.push(a.value),2!==r.length);t=!0);}catch(e){o=!0,i=e}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return r}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),c=o[0],u=o[1],f=r.useMemo(function(){return{config:c,setConfig:u}},[c]);return t.createElement(_.Provider,i({value:f},e))},e.defaultIntlConfig=I});
//# sourceMappingURL=index.umd.js.map