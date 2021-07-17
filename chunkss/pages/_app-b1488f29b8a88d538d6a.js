(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},425:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return i}});var r=n(7294),o=n(9008);const a=(0,r.createContext)({setTheme:e=>{},themes:[]}),i=()=>(0,r.useContext)(a),c=["light","dark"],u="(prefers-color-scheme: dark)",s=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:i="theme",themes:s=["light","dark"],defaultTheme:m=(n?"system":"light"),attribute:h="data-theme",value:y,children:v})=>{const[b,g]=(0,r.useState)((()=>d(i,m))),[O,w]=(0,r.useState)((()=>d(i))),_=y?Object.values(y):s,j=(0,r.useCallback)((t=>{const n=p(t);w(n),"system"!==b||e||k(n,!1)}),[b,e]),S=(0,r.useRef)(j);S.current=j;const k=(0,r.useCallback)(((e,r=!0,o=!0)=>{let a=(null==y?void 0:y[e])||e;const c=t&&o?f():null;if(r)try{localStorage.setItem(i,e)}catch(e){}if("system"===e&&n){const e=p();a=(null==y?void 0:y[e])||e}if(o){const e=document.documentElement;"class"===h?(e.classList.remove(..._),e.classList.add(a)):e.setAttribute(h,a),null==c||c()}}),[]);(0,r.useEffect)((()=>{const e=function(){return S.current(...[].slice.call(arguments))},t=window.matchMedia(u);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const M=(0,r.useCallback)((t=>{e?k(t,!0,!1):k(t),g(t)}),[e]);return(0,r.useEffect)((()=>{const e=e=>{e.key===i&&M(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[M]),(0,r.useEffect)((()=>{if(!o)return;let t=e&&c.includes(e)?e:b&&c.includes(b)?b:"system"===b&&O||null;document.documentElement.style.setProperty("color-scheme",t)}),[o,b,O,e]),r.createElement(a.Provider,{value:{theme:b,setTheme:M,forcedTheme:e,resolvedTheme:"system"===b?O:b,themes:n?[...s,"system"]:s,systemTheme:n?O:void 0}},r.createElement(l,{forcedTheme:e,storageKey:i,attribute:h,value:y,enableSystem:n,defaultTheme:m,attrs:_}),v)},l=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,defaultTheme:i,value:c,attrs:s})=>{const l="class"===n?`var d=document.documentElement.classList;d.remove(${s.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",d=(e,t)=>{e=(null==c?void 0:c[e])||e;const r=t?e:`'${e}'`;return"class"===n?`d.add(${r})`:`d.setAttribute('${n}', ${r})`},f="system"===i;return r.createElement(o.default,null,r.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${l}${d(e)}}()`}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${l}var e=localStorage.getItem('${t}');${f?"":d(i)+";"}if("system"===e||(!e&&${f})){var t="${u}",m=window.matchMedia(t);m.media!==t||m.matches?${d("dark")}:${d("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${l}var e=localStorage.getItem("${t}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}else{${d(i)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),d=(e,t)=>{if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},f=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},p=e=>(e||(e=window.matchMedia(u)),e.matches?"dark":"light")},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},u=n(3367),s=n(4287),l=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var l=m[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}y.rewind=function(){};var v=y;t.default=v},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),u=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},1522:function(e,t,n){"use strict";n.r(t);var r=n(6156),o=n(5893),a=(n(962),n(4392),n(8887),n(425));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)("div",{className:"bg-gray-50 dark:bg-gray-1000",children:(0,o.jsx)(a.f,{attribute:"class",children:(0,o.jsx)(t,c({},n))})})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1522)}])},8887:function(){},962:function(){},4392:function(){},9008:function(e,t,n){e.exports=n(7947)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(2441)}));var n=e.O();_N_E=n}]);