_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t);var a=r("rePB"),i=r("nKUr"),n=r("8Kt/"),o=r.n(n),s=r("nOHt"),c=r("X52I"),l=r("q1tI"),u=r("2OET"),d=r("N3fz"),f=r("siyQ"),m=r("7LaZ"),p=r("Mu++"),h=r("EuEu"),b=r("cY5a");function j(e,t){return Object.keys(e).reduce((function(r,a){return r[a]=Object(f.a)({timeZone:t},e[a]),r}),{})}function g(e,t){return Object.keys(Object(f.a)(Object(f.a)({},e),t)).reduce((function(r,a){return r[a]=Object(f.a)(Object(f.a)({},e[a]||{}),t[a]||{}),r}),{})}function O(e,t){if(!t)return e;var r=p.a.formats;return Object(f.a)(Object(f.a)(Object(f.a)({},r),e),{date:g(j(r.date,t),j(e.date||{},t)),time:g(j(r.time,t),j(e.time||{},t))})}function v(e,t,r,a,i){var n=e.locale,o=e.formats,s=e.messages,c=e.defaultLocale,l=e.defaultFormats,u=e.onError,d=e.timeZone,p=e.defaultRichTextElements;void 0===r&&(r={id:""});var j=r.id,g=r.defaultMessage;Object(m.a)(!!j,"[@formatjs/intl] An `id` must be provided to format a message.");var v=String(j),y=s&&Object.prototype.hasOwnProperty.call(s,v)&&s[v];if(Array.isArray(y)&&1===y.length&&y[0].type===b.a.literal)return y[0].value;if(!a&&y&&"string"===typeof y&&!p)return y.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=Object(f.a)(Object(f.a)({},p),a||{}),o=O(o,d),l=O(l,d),!y){if((!g||n&&n.toLowerCase()!==c.toLowerCase())&&u(new h.e(r,n)),g)try{return t.getMessageFormat(g,c,l,i).format(a)}catch(x){return u(new h.c('Error formatting default message for: "'+v+'", rendering default message verbatim',n,r,x)),"string"===typeof g?g:v}return v}try{return t.getMessageFormat(y,n,o,{formatters:t}).format(a)}catch(x){u(new h.c('Error formatting message: "'+v+'", using '+(g?"default message":"id")+" as fallback.",n,r,x))}if(g)try{return t.getMessageFormat(g,c,l).format(a)}catch(x){u(new h.c('Error formatting the default message for: "'+v+'", rendering message verbatim',n,r,x))}return"string"===typeof y?y:"string"===typeof g?g:v}var y=r("1VXf"),x=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function S(e,t,r){var a=e.locale,i=e.formats,n=e.onError;void 0===r&&(r={});var o=r.format,s=o&&Object(y.e)(i,"number",o,n)||{};return t(a,Object(y.d)(r,x,s))}function C(e,t,r,a){void 0===a&&(a={});try{return S(e,t,a).format(r)}catch(i){e.onError(new h.a("FORMAT_ERROR","Error formatting number.",i))}return String(r)}function T(e,t,r,a){void 0===a&&(a={});try{return S(e,t,a).formatToParts(r)}catch(i){e.onError(new h.a("FORMAT_ERROR","Error formatting number.",i))}return[]}var w=r("BqEn"),E=["numeric","style"];function F(e,t,r,a,i){void 0===i&&(i={}),a||(a="second"),Intl.RelativeTimeFormat||e.onError(new w.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',"MISSING_INTL_API"));try{return function(e,t,r){var a=e.locale,i=e.formats,n=e.onError;void 0===r&&(r={});var o=r.format,s=!!o&&Object(y.e)(i,"relative",o,n)||{};return t(a,Object(y.d)(r,E,s))}(e,t,i).format(r,a)}catch(n){e.onError(new h.c("Error formatting relative time.",n))}return String(r)}var L=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","fractionalSecondDigits","calendar","numberingSystem"];function k(e,t,r,a){var i=e.locale,n=e.formats,o=e.onError,s=e.timeZone;void 0===a&&(a={});var c=a.format,l=Object(f.a)(Object(f.a)({},s&&{timeZone:s}),c&&Object(y.e)(n,t,c,o)),u=Object(y.d)(a,L,l);return"time"!==t||u.hour||u.minute||u.second||u.timeStyle||u.dateStyle||(u=Object(f.a)(Object(f.a)({},u),{hour:"numeric",minute:"numeric"})),r(i,u)}function N(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var i=r[0],n=r[1],o=void 0===n?{}:n,s="string"===typeof i?new Date(i||0):i;try{return k(e,"date",t,o).format(s)}catch(c){e.onError(new h.a("FORMAT_ERROR","Error formatting date.",c))}return String(s)}function R(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var i=r[0],n=r[1],o=void 0===n?{}:n,s="string"===typeof i?new Date(i||0):i;try{return k(e,"time",t,o).format(s)}catch(c){e.onError(new h.a("FORMAT_ERROR","Error formatting time.",c))}return String(s)}function q(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var i=r[0],n=r[1],o=r[2],s=void 0===o?{}:o,c=e.timeZone,l=e.locale,u=e.onError,d=Object(y.d)(s,L,c?{timeZone:c}:{});try{return t(l,d).formatRange(i,n)}catch(f){u(new h.a("FORMAT_ERROR","Error formatting date time range.",f))}return String(i)}function P(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var i=r[0],n=r[1],o=void 0===n?{}:n,s="string"===typeof i?new Date(i||0):i;try{return k(e,"date",t,o).formatToParts(s)}catch(c){e.onError(new h.a("FORMAT_ERROR","Error formatting date.",c))}return[]}function _(e,t){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var i=r[0],n=r[1],o=void 0===n?{}:n,s="string"===typeof i?new Date(i||0):i;try{return k(e,"time",t,o).formatToParts(s)}catch(c){e.onError(new h.a("FORMAT_ERROR","Error formatting time.",c))}return[]}var M=["localeMatcher","type"];function I(e,t,r,a){var i=e.locale,n=e.onError;void 0===a&&(a={}),Intl.PluralRules||n(new w.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API"));var o=Object(y.d)(a,M);try{return t(i,o).select(r)}catch(s){n(new h.c("Error formatting plural.",s))}return"other"}var D=["localeMatcher","type","style"],A=Date.now();function z(e,t,r,a){var i=e.locale,n=e.onError;void 0===a&&(a={}),Intl.ListFormat||n(new w.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',"MISSING_INTL_API"));var o=Object(y.d)(a,D);try{var s={},c=r.map((function(e,t){if("object"===typeof e){var r=function(e){return A+"_"+e+"_"+A}(t);return s[r]=e,r}return String(e)}));return Object.keys(s).length?t(i,o).formatToParts(c).reduce((function(e,t){var r=t.value;return s[r]?e.push(s[r]):"string"===typeof e[e.length-1]?e[e.length-1]+=r:e.push(r),e}),[]):t(i,o).format(c)}catch(l){n(new h.a("FORMAT_ERROR","Error formatting list.",l))}return r}var B=["localeMatcher","style","type","fallback"];function Z(e,t,r,a){var i=e.locale,n=e.onError;Intl.DisplayNames||n(new w.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',"MISSING_INTL_API"));var o=Object(y.d)(a,B);try{return t(i,o).of(r)}catch(s){n(new h.a("FORMAT_ERROR","Error formatting display name.",s))}}var G=r("6koa"),W=r.n(G),H=r("/d+U"),U=W.a||G;function V(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function K(e){return e?Object.keys(e).reduce((function(t,r){var a=e[r];return t[r]=Object(H.b)(a)?Object(d.b)(a):a,t}),{}):e}var X=function(e,t,r,a){var i=v(e,t,r,K(a));return Array.isArray(i)?l.Children.toArray(i):i},J=function(e,t){var r=e.defaultRichTextElements,a=Object(c.c)(e,["defaultRichTextElements"]),i=K(r),n=function(e,t){var r=Object(y.b)(t),a=Object(f.a)(Object(f.a)({},y.a),e),i=a.locale,n=a.defaultLocale,o=a.onError;i?!Intl.NumberFormat.supportedLocalesOf(i).length&&o?o(new h.d('Missing locale data for locale: "'+i+'" in Intl.NumberFormat. Using default locale: "'+n+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&o&&o(new h.d('Missing locale data for locale: "'+i+'" in Intl.DateTimeFormat. Using default locale: "'+n+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(o&&o(new h.b('"locale" was not configured, using "'+n+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),a.locale=a.defaultLocale||"en");var s=e.messages?e.messages[Object.keys(e.messages)[0]]:void 0;return e.defaultRichTextElements&&s&&"string"===typeof s&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'),Object(f.a)(Object(f.a)({},a),{formatters:r,formatNumber:C.bind(null,a,r.getNumberFormat),formatNumberToParts:T.bind(null,a,r.getNumberFormat),formatRelativeTime:F.bind(null,a,r.getRelativeTimeFormat),formatDate:N.bind(null,a,r.getDateTimeFormat),formatDateToParts:P.bind(null,a,r.getDateTimeFormat),formatTime:R.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:q.bind(null,a,r.getDateTimeFormat),formatTimeToParts:_.bind(null,a,r.getDateTimeFormat),formatPlural:I.bind(null,a,r.getPluralRules),formatMessage:v.bind(null,a,r),formatList:z.bind(null,a,r.getListFormat),formatDisplayName:Z.bind(null,a,r.getDisplayNames)})}(Object(c.a)(Object(c.a)(Object(c.a)({},d.a),a),{defaultRichTextElements:i}),t);return Object(c.a)(Object(c.a)({},n),{formatMessage:X.bind(null,{locale:n.locale,timeZone:n.timeZone,formats:n.formats,defaultLocale:n.defaultLocale,defaultFormats:n.defaultFormats,messages:n.messages,onError:n.onError,defaultRichTextElements:i},n.formatters)})},Q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cache=Object(y.c)(),t.state={cache:t.cache,intl:J(V(t.props),t.cache),prevConfig:V(t.props)},t}return Object(c.b)(t,e),t.getDerivedStateFromProps=function(e,t){var r=t.prevConfig,a=t.cache,i=V(e);return U(r,i)?null:{intl:J(i,a),prevConfig:i}},t.prototype.render=function(){return Object(d.c)(this.state.intl),l.createElement(u.b,{value:this.state.intl},this.props.children)},t.displayName="IntlProvider",t.defaultProps=d.a,t}(l.PureComponent),Y=(r("Rpix"),r("YFqc")),$=r.n(Y),ee=r("ZMKu"),te=r("dDsW");var re=function(){return Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"37",height:"36",fill:"none",viewBox:"0 0 37 36",children:[Object(i.jsx)("path",{fill:"#3E3E64",d:"M16.093 2.108a3.046 3.046 0 014.27 0L34.32 15.892a2.955 2.955 0 010 4.216L20.362 33.892a3.046 3.046 0 01-4.27 0L2.135 20.108a2.955 2.955 0 010-4.216L16.093 2.108z"}),Object(i.jsxs)("g",{filter:"url(#filter56_i)",children:[Object(i.jsx)("ellipse",{cx:"18.342",cy:"18.113",fill:"#E5E5E5",rx:"7.105",ry:"7.017"}),Object(i.jsx)("ellipse",{cx:"18.203",cy:"18.25",fill:"#515151",rx:"3.622",ry:"3.577"})]}),Object(i.jsx)("g",{filter:"url(#filter57_d)",children:Object(i.jsx)("path",{fill:"#E5858F",d:"M15.768 6.852h4.794v22.52h-4.794V6.852z"})}),Object(i.jsxs)("defs",{children:[Object(i.jsxs)("filter",{id:"filter56_i",width:"14.211",height:"18.033",x:"11.236",y:"11.096",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[Object(i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(i.jsx)("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),Object(i.jsx)("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(i.jsx)("feOffset",{dy:"4"}),Object(i.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(i.jsx)("feComposite",{in2:"hardAlpha",k2:"-1",k3:"1",operator:"arithmetic"}),Object(i.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(i.jsx)("feBlend",{in2:"shape",result:"effect1_innerShadow"})]}),Object(i.jsxs)("filter",{id:"filter57_d",width:"8.795",height:"26.521",x:"13.768",y:"6.852",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[Object(i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(i.jsx)("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object(i.jsx)("feOffset",{dy:"2"}),Object(i.jsx)("feGaussianBlur",{stdDeviation:"1"}),Object(i.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(i.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(i.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})]})]})};var ae=function(e){var t=e.isOpen,r=Object(te.a)().formatMessage,a={open:{pathLength:[1,0],strokeOpacity:[1,1],transition:{duration:.2}},closed:{pathLength:[0,1],strokeOpacity:[1,1],transition:{duration:.2}}},n={open:{pathLength:[1,0],strokeOpacity:[1,0],transition:{duration:.2}},closed:{pathLength:[0,1],strokeOpacity:[0,1],transition:{duration:.2}}};return Object(i.jsxs)("div",{style:{position:"relative"},children:[Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"17",fill:"none",viewBox:"0 0 24 17",children:[Object(i.jsx)(ee.a.path,{stroke:"#fff",strokeLinecap:"round",strokeOpacity:"0.64",strokeWidth:"3",d:"M22.5 1.5L1.5 1.5",animate:t?"open":"closed",variants:a,initial:{pathLength:1,strokeOpacity:.64}}),Object(i.jsx)(ee.a.path,{stroke:"#fff",strokeLinecap:"round",strokeOpacity:"0.64",strokeWidth:"3",d:"M1.5 8.5L14.5 8.5",animate:t?"open":"closed",variants:n,initial:{pathLength:1}}),Object(i.jsx)(ee.a.path,{stroke:"#fff",strokeLinecap:"round",strokeOpacity:"0.64",strokeWidth:"3",d:"M22.5 15.5L9.499 15.5",animate:t?"open":"closed",variants:a,initial:{pathLength:1}}),Object(i.jsx)(ee.a.path,{stroke:"#fff",strokeLinecap:"round",strokeOpacity:"0.64",strokeWidth:"3",d:"M22.5 8.5L19.5 8.5",animate:t?"open":"closed",variants:a,initial:{pathLength:1}}),Object(i.jsx)(ee.a.path,{stroke:"#fff",strokeLinecap:"round",strokeOpacity:"0.64",strokeWidth:"3",d:"M1.5 15.5L4.5 15.5",animate:t?"open":"closed",variants:n,initial:{pathLength:1}})]}),Object(i.jsx)(ee.a.div,{style:{opacity:0,position:"absolute",top:-10,left:-45,fontSize:22,color:"darkgray"},animate:t?"open":"closed",variants:{open:{opacity:[0,1],x:[-10,0],transition:{duration:.3,delay:.2}},closed:{opacity:[1,0],x:[0,-10],transition:{duration:.1}}},initial:{opacity:0},children:r({id:"navClose"})})]})};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=function(e){return Object(i.jsx)("svg",ne(ne({width:37,height:16,viewBox:"0 0 37 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(i.jsxs)("g",{id:"Vector",children:[Object(i.jsx)("path",{d:"M3.3965 15.952C2.74955 15.952 2.20552 15.8561 1.76442 15.6641C1.33802 15.4574 0.992484 15.1696 0.727821 14.8005C0.463159 14.4314 0.272014 13.9959 0.154386 13.4939C0.0514622 12.9772 0 12.4088 0 11.7887V1.19584C0 0.686233 0.411435 0.273117 0.918967 0.273117H2.87453C3.38206 0.273117 3.79349 0.686234 3.79349 1.19584V11.9216C3.79349 12.3054 3.85966 12.5638 3.99199 12.6967C4.13903 12.8295 4.27871 12.896 4.41104 12.896C4.48456 12.896 4.54337 12.896 4.58748 12.896C4.70573 12.896 4.8249 12.9584 4.84344 13.0756L5.13694 14.9323C5.20292 15.3496 4.97636 15.7608 4.56419 15.8461C4.53567 15.852 4.50667 15.8578 4.4772 15.8634C4.18314 15.9225 3.8229 15.952 3.3965 15.952Z",fill:"white",fillOpacity:.7}),Object(i.jsx)("path",{d:"M22.8626 15.6789C22.2157 15.6789 21.6716 15.5829 21.2305 15.391C20.8041 15.1843 20.4586 14.8964 20.1939 14.5273C19.9293 14.1583 19.7381 13.7227 19.6205 13.2208C19.5176 12.704 19.4661 12.1357 19.4661 11.5156V0.922722C19.4661 0.413116 19.8776 0 20.3851 0H22.3406C22.8482 0 23.2596 0.413117 23.2596 0.922723V11.6485C23.2596 12.0323 23.3258 12.2907 23.4581 12.4235C23.6051 12.5564 23.7448 12.6228 23.8772 12.6228C23.9507 12.6228 24.0095 12.6228 24.0536 12.6228C24.1718 12.6228 24.291 12.6852 24.3096 12.8025L24.6031 14.6592C24.669 15.0765 24.4425 15.4877 24.0303 15.573C24.0018 15.5789 23.9728 15.5847 23.9433 15.5903C23.6493 15.6494 23.289 15.6789 22.8626 15.6789Z",fill:"white",fillOpacity:.7}),Object(i.jsx)("path",{d:"M12.1345 16C10.9337 16 9.91675 15.7601 9.08355 15.2803C8.25036 14.7882 7.61933 14.1238 7.19048 13.2872C6.77388 12.4506 6.56559 11.5094 6.56559 10.4637C6.56559 9.43021 6.77388 8.49519 7.19048 7.65859C7.61933 6.82198 8.25036 6.16377 9.08355 5.68396C9.91675 5.19184 10.9337 4.94578 12.1345 4.94578C13.3231 4.94578 14.3339 5.19184 15.1671 5.68396C16.0003 6.16377 16.6252 6.82198 17.0418 7.65859C17.4584 8.49519 17.6667 9.43021 17.6667 10.4637C17.6667 11.5094 17.4584 12.4506 17.0418 13.2872C16.6252 14.1238 16.0003 14.7882 15.1671 15.2803C14.3339 15.7601 13.3231 16 12.1345 16ZM12.1345 13.2687C12.8574 13.2687 13.4027 13.0288 13.7703 12.549C14.1501 12.0692 14.34 11.3741 14.34 10.4637C14.34 9.56555 14.1501 8.87658 13.7703 8.39676C13.4027 7.91695 12.8574 7.67704 12.1345 7.67704C11.3994 7.67704 10.8418 7.91695 10.462 8.39676C10.0822 8.87658 9.89224 9.56555 9.89224 10.4637C9.89224 11.3741 10.0822 12.0692 10.462 12.549C10.8418 13.0288 11.3994 13.2687 12.1345 13.2687Z",fill:"white",fillOpacity:.7}),Object(i.jsx)("path",{d:"M31.4678 15.6678C30.267 15.6678 29.25 15.4279 28.4169 14.9481C27.5837 14.456 26.9526 13.7916 26.5238 12.955C26.1072 12.1184 25.8989 11.1772 25.8989 10.1315C25.8989 9.09805 26.1072 8.16302 26.5238 7.32642C26.9526 6.48982 27.5837 5.83161 28.4169 5.35179C29.25 4.85967 30.267 4.61361 31.4678 4.61361C32.6564 4.61361 33.6672 4.85967 34.5004 5.35179C35.3336 5.83161 35.9585 6.48982 36.3751 7.32642C36.7917 8.16302 37 9.09805 37 10.1315C37 11.1772 36.7917 12.1184 36.3751 12.955C35.9585 13.7916 35.3336 14.456 34.5004 14.9481C33.6672 15.4279 32.6564 15.6678 31.4678 15.6678ZM31.4678 12.9366C32.1907 12.9366 32.736 12.6967 33.1036 12.2169C33.4834 11.737 33.6733 11.0419 33.6733 10.1315C33.6733 9.23338 33.4834 8.54441 33.1036 8.0646C32.736 7.58478 32.1907 7.34487 31.4678 7.34487C30.7326 7.34487 30.1751 7.58478 29.7953 8.0646C29.4155 8.54441 29.2255 9.23338 29.2255 10.1315C29.2255 11.0419 29.4155 11.737 29.7953 12.2169C30.1751 12.6967 30.7326 12.9366 31.4678 12.9366Z",fill:"white",fillOpacity:.7})]})}))};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=function(e){return Object(i.jsxs)("svg",ce(ce({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 12c0-.552.425-1 .95-1h17.1c.525 0 .95.448.95 1s-.425 1-.95 1H3.95c-.525 0-.95-.448-.95-1z",fill:"#3675EC"}),Object(i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L19.586 12l-5.293-5.293a1 1 0 010-1.414z",fill:"#F44E77"}),Object(i.jsx)("defs",{children:Object(i.jsxs)("linearGradient",{id:"prefix__paint0_linear",x1:18,y1:5,x2:18,y2:19,gradientUnits:"userSpaceOnUse",children:[Object(i.jsx)("stop",{stopColor:"#F44E77"}),Object(i.jsx)("stop",{offset:1,stopColor:"#F44E77"})]})})]}))},ue=r("CAj4"),de=r("dUCX"),fe=r("K/ea"),me=r("L3iW"),pe=function(){var e=Object(te.a)(),t=e.formatMessage,r=e.locale,a=Object(ee.b)(),n=Object(ee.b)(),o=Object(l.useRef)(null),s=Object(de.a)(),c=Object(l.useState)(null),u=c[0],d=c[1],f=Object(ue.a)(),m=Object(l.useState)(!1),p=m[0],h=m[1],b=null;u?(a.start({clipPath:"circle(".concat(2*s+200,"px at 100% 0px)"),backgroundColor:"#FFFFFF",transition:{type:"spring",stiffness:20,restDelta:2}}),n.start((function(e){return{opacity:1,y:10,transition:{delay:.3*e}}}))):(a.start({clipPath:"circle(15px at 100% -15px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}).then((function(){a.start({backgroundColor:"#FFFFFF00"})})).then((function(){return d(null)})),n.start((function(e){return{opacity:0,y:0,transition:{duration:.2}}}))),Object(l.useEffect)((function(){if(f>0)return b=document.addEventListener("scroll",(function(e){var t=document.scrollingElement.scrollTop;h(t>=20&&f<1024)})),function(){return document.removeEventListener("scroll",b)}}),[p,f]);var j=function(){d(null===u||!u||!!p&&null)};return Object(i.jsxs)("div",{className:"".concat(fe.navContainer," ").concat(p?fe.navContainerScrolled:null," fixed top-0 w-screen flex justify-between items-center px-8 py-2 lg:bg-transparent lg:shadow-none lg:flex lg:container lg:absolute lg:max-w-full lg:justify-around lg:h-24 lg:mt-4 lg:px-12 xl:px-0"),children:[Object(i.jsxs)("div",{className:"flex align-middle",children:[Object(i.jsx)("div",{className:"".concat(fe.logo," w-3"),children:Object(i.jsx)(re,{})}),Object(i.jsx)("div",{className:"\n          ".concat(null===u?p?fe.logoName:null:u?fe.logoName:fe.logoNameClosed,"\n           flex align-middle w-12 ml-1 lg:w-16"),children:Object(i.jsx)(oe,{style:{width:"100%",height:"auto"}})})]}),Object(i.jsxs)("div",{className:"hidden lg:flex text-white opacity-70 text-24 min-w-29 justify-between",children:[Object(i.jsx)($.a,{href:"#como-funciona",passHref:!0,children:Object(i.jsx)("a",{className:"opacity-50 hover:opacity-100",children:t({id:"navLinkOne"})})}),Object(i.jsx)($.a,{href:"#por-que-lolo",passHref:!0,children:Object(i.jsx)("a",{className:"opacity-50 hover:opacity-100",children:t({id:"navLinkTwo"})})}),Object(i.jsx)($.a,{href:"#servicios",passHref:!0,children:Object(i.jsx)("a",{className:"opacity-50 hover:opacity-100",children:t({id:"navLinkThree"})})})]}),Object(i.jsxs)("div",{className:"hidden lg:flex",children:[Object(i.jsxs)("div",{className:"flex items-center pr-4",children:[Object(i.jsx)($.a,{href:"/",locale:"es",children:Object(i.jsx)("a",{className:"".concat("es"===r?"text-white":"text-transparentWhite"," cursor-pointer hover:underline"),children:"Esp"})}),Object(i.jsx)("p",{className:"text-transparentWhite mx-1 inline-block",children:" \u2022 "}),Object(i.jsx)($.a,{href:"/",locale:"ca",children:Object(i.jsx)("a",{className:"".concat("ca"===r?"text-white":"text-transparentWhite"," cursor-pointer hover:underline"),children:"Cat"})})]}),Object(i.jsxs)("div",{className:"".concat(me.btn," ").concat(me.btnSm," ").concat(fe.btnLogin," text-17 inline-block z-10 cursor-pointer justify-center"),children:[Object(i.jsx)("span",{className:"mr-2",children:t({id:"headerLogin"})}),Object(i.jsx)(le,{className:"".concat(fe.loginArrow," mt-1")})]})]}),Object(i.jsxs)(ee.a.nav,{initial:!1,custom:s,ref:o,className:"lg:hidden",children:[Object(i.jsx)("div",{className:"".concat(fe.burger," \n          ").concat(null===u?p?fe.burgerScrolled:null:fe.burgerScrolled,"\n           z-50 lg:hidden"),onClick:function(){return j()},children:Object(i.jsx)(ae,{isOpen:u})}),Object(i.jsxs)(ee.a.div,{className:"absolute top-0 right-0 bottom-0 w-full h-screen",style:{zIndex:-999},animate:a,children:[Object(i.jsxs)("div",{className:"flex flex-col w-full h-80 items-center justify-center",children:[Object(i.jsx)(ee.a.div,{custom:0,animate:n,className:"mt-10 opacity-0",children:Object(i.jsx)($.a,{href:"#como-funciona",passHref:!0,children:Object(i.jsx)("a",{className:"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100",onClick:function(){return j()},children:t({id:"navLinkOne"})})})}),Object(i.jsx)(ee.a.div,{custom:1,animate:n,className:"mt-10 opacity-0",children:Object(i.jsx)($.a,{href:"#por-que-lolo",passHref:!0,children:Object(i.jsx)("a",{className:"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100",onClick:function(){return j()},children:t({id:"navLinkTwo"})})})}),Object(i.jsx)(ee.a.div,{custom:2,animate:n,className:"mt-10 opacity-0 mb-10",children:Object(i.jsx)($.a,{href:"#servicios",passHref:!0,children:Object(i.jsx)("a",{className:"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100",onClick:function(){return j()},children:t({id:"navLinkThree"})})})})]}),Object(i.jsx)(ee.a.div,{custom:3,animate:n,className:"lg:hidden text-center relative",style:{bottom:"8%"},children:Object(i.jsxs)("div",{className:"justify-center",children:[Object(i.jsxs)("div",{className:"".concat(fe.btnLoginMobile," flex z-10 cursor-pointer justify-center max-w-8 my-0 mx-auto"),children:[Object(i.jsx)("span",{className:"mr-2 font-montserrat text-orange text-24",children:t({id:"headerLogin"})}),Object(i.jsx)(le,{className:fe.loginArrow})]}),Object(i.jsx)("span",{className:"w-8 text-gray opacity-70",children:"______________"}),Object(i.jsxs)("div",{className:"mt-4 w-auto",children:[Object(i.jsx)($.a,{href:"/",locale:"es",children:Object(i.jsx)("a",{className:"text-orange ".concat("es"===r?"opacity-100":"opacity-50"),children:"Espa\xf1ol"})}),Object(i.jsx)("p",{className:"text-orange opacity-50 inline-block mx-1",children:" \u2022 "}),Object(i.jsx)($.a,{href:"/",locale:"ca",children:Object(i.jsx)("a",{className:"text-orange ".concat("ca"===r?"opacity-100":"opacity-50"),children:"Catal\xe0"})})]})]})})]})]})]})};function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je={es:r("AT1h"),ca:r("y/Wd")};t.default=function(e){var t=e.Component,r=e.pageProps,a=Object(s.useRouter)().locale;return Object(i.jsx)(Q,{locale:a,defaultLocale:"es",messages:je[a],children:Object(i.jsxs)("div",{className:"".concat(fe.html," relative overflow-hidden"),children:[Object(i.jsxs)(o.a,{children:[Object(i.jsx)("meta",{name:"description",content:"Encuentra con Lolo a quien cuide de tus mayores tal y como t\xfa lo har\xedas"}),Object(i.jsx)("title",{children:"Lolo"})]}),Object(i.jsx)(pe,{}),Object(i.jsx)(t,be({},r))]})})}},"6koa":function(e,t,r){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),a=Object.keys(t),i=r.length;if(a.length!==i)return!1;for(var n=0;n<i;n++){var o=r[n];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}},AT1h:function(e){e.exports=JSON.parse('{"navLinkHome":"Inicio","navLinkOne":"C\xf3mo funciona","navLinkTwo":"Por qu\xe9 Lolo","navLinkThree":"Servicios","navClose":"cerrar","headerLogin":"Acceso","heroTitle":"Encuentra a qui\xe9n cuide de tus mayores tal y como t\xfa lo har\xedas","heroSubtitle":"Lolo es la plataforma que te ayuda a conectar con profesionales del cuidado de personas mayores.","heroCTA":"Encuentra a tu profesional","firstSectionTitleFirst":"Encontrar a alguien de","firstSectionTitleSecond":"es as\xed de sencillo:","firstSectionTitleKeyWord":"confianza","firstSectionFirstStepTitle":"Configura tu servicio","firstSectionFirstStepSubtitle":"Elige la fecha, hora, frecuencia y caracter\xedsticas del servicio.","firstSectionSecondStepTitle":"Selecciona a tu profesional","firstSectionSecondStepSubtitle":"Somos la \xfanica plataforma en la que t\xfa seleccionas primero a qui\xe9n quieres contratar.","firstSectionThirdStepTitle":"Paga de forma segura","firstSectionThirdStepSubtitle":"Olv\xeddate del efectivo y realiza el pago de forma segura mediante nuestra plataforma.","firstSectionCTA":"Configura tu servicio","middleBannerTitle":"Encuentra a alguien de confianza, que entienda tus necesidades y con quien te lleves bien","middleBannerSubtitle":"Nuestra tecnolog\xeda te muestra aquellos perfiles que son m\xe1s afines a lo que necesitas.","secondSectionTitle":"\xbfPor qu\xe9","secondSectionSubtitle":"Estos son los motivos por los que confiar en nosotros:","secondSectionFirstCardTitle":"Calidad","secondSectionFirstCardSubtitle":"Los perfiles de nuestros profesionales est\xe1n verificados y se respaldan con las opiniones de otros usuarios.","secondSectionSecondCardTitle":"Elecci\xf3n","secondSectionSecondCardSubtitle":"Nuestra plataforma te ofrece opciones. T\xfa eliges.","secondSectionThirdCardTitle":"Flexibilidad y rapidez","secondSectionThirdCardSubtitle":"Configura tu servicio a medida, encuentra a tu profesional y reserva en cuesti\xf3n de minutos.","secondSectionFourthCardTitle":"Comunicaci\xf3n","secondSectionFourthCardSubtitle":"Te proporcionamos la tecnolog\xeda para poder gestionar la relaci\xf3n con tu cuidador. Y en el futuro, iremos m\xe1s all\xe1.","thirdSectionTitle":"Conoce nuestros servicios","thirdSectionSubtitle":"Tus seres queridos en las mejores manos","thirdSectionSecondSubtitle":"Ayudamos a las personas mayores con sus tareas en el d\xeda a d\xeda","thirdSectionFirstCardTitle":"Cuidado diurno","thirdSectionFirstCardText":"Incluye, siempre que se desee o se necesite, ayuda en actividades rutinarias, cuidado personal, cocinar, impieza, acompa\xf1amiento, recados, actividades de desarrollo motriz y cognitivo.","thirdSectionSecondCardTitle":"Cuidado nocturno","thirdSectionSecondCardText":"Incluye, siempre que se desee o se necesite, ayuda en actividades rutinarias, cuidado personal, cocinar, impieza, acompa\xf1amiento, recados, actividades de desarrollo motriz y cognitivo.","thirdSectionThirdCardTitle":"Cuidado 24 horas","thirdSectionThirdCardText":"Incluye, siempre que se desee o se necesite, ayuda en actividades rutinarias, cuidado personal, cocinar, impieza, acompa\xf1amiento, recados, actividades de desarrollo motriz y cognitivo.","thirdSectionFourthCardTitle":"Limpieza","thirdSectionFourthCardText":"Elige el pack de limpieza completa o configura con los servicios que quieras, adapt\xe1ndolo a tus necesidades.","footerFirstSectionTitle":"Pru\xe9banos sin compromiso","footerFirstSectionSubtitle":"Estamos tan seguros de que te enamorar\xe1s de nuestro servicio que la primera vez que reserves te regalamos una hora gratis.","footerFirstSectionCTA":"Encuentra a tu profesional","footerSecondSectionTitle":"\xbfQuieres trabajar como cuidador?","footerSecondSectionSubtitle":"Somos la plataforma que te pone en contacto con familias que buscan a alguien como t\xfa. Reg\xedstrate, recibe ofertas y selecciona las que te interesen.","footerSecondSectionCTA":"Reg\xedstrate como cuidador"}')},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},Rpix:function(e,t,r){},"y/Wd":function(e){e.exports=JSON.parse('{"navLinkHome":"Inici","navLinkOne":"Com funciona","navLinkTwo":"Per qu\xe8 Lolo","navLinkThree":"Serveis","navClose":"tancar","headerLogin":"Acc\xe9s","heroTitle":"Troba a qui tingui cura dels teus majors tal com tu ho faries","heroSubtitle":"Lolo \xe9s la plataforma que t\'ajuda a connectar amb professionals de la cura de persones grans.","heroCTA":"Troba al teu professional","firstSectionTitleFirst":"Trobar a alg\xfa de","firstSectionTitleSecond":"\xe9s aix\xed de senzill:","firstSectionTitleKeyWord":"confian\xe7a","firstSectionFirstStepTitle":"Configura el teu servei","firstSectionFirstStepSubtitle":"Tria la data, hora, freq\xfc\xe8ncia i caracter\xedstiques de l\'servei.","firstSectionSecondStepTitle":"Selecciona el teu professional","firstSectionSecondStepSubtitle":"Som l\'\xfanica plataforma en la qual tu selecciones primer a qui vols contractar.","firstSectionThirdStepTitle":"Paga de manera segura","firstSectionThirdStepSubtitle":"Oblida\'t de l\'efectiu i realitza el pagament de forma segura mitjan\xe7ant la nostra plataforma.","firstSectionCTA":"Configura el teu servei","middleBannerTitle":"Troba a alg\xfa de confian\xe7a, que entengui les teves necessitats i amb qui et portis b\xe9","middleBannerSubtitle":"La nostra tecnologia et mostra aquells perfils que s\xf3n m\xe9s afins al que necessites.","secondSectionTitle":"Per qu\xe8","secondSectionSubtitle":"Aquests s\xf3n els motius pels quals confiar en nosaltres:","secondSectionFirstCardTitle":"Qualitat","secondSectionFirstCardSubtitle":"Els perfils dels nostres professionals estan verificats i es recolzen amb les opinions d\'altres usuaris.","secondSectionSecondCardTitle":"Elecci\xf3","secondSectionSecondCardSubtitle":"La nostra plataforma t\'ofereix opcions. Tu tries.","secondSectionThirdCardTitle":"Flexibilitat i rapidesa","secondSectionThirdCardSubtitle":"Configura el teu servei a mida, troba al teu professional i reserva en q\xfcesti\xf3 de minuts.","secondSectionFourthCardTitle":"Comunicaci\xf3","secondSectionFourthCardSubtitle":"Et proporcionem la tecnologia per poder gestionar la relaci\xf3 amb el teu cuidador. I en el futur, anirem m\xe9s enll\xe0.","thirdSectionTitle":"Coneix els nostres serveis","thirdSectionSubtitle":"Els teus \xe9ssers estimats en les millors mans","thirdSectionSecondSubtitle":"Ajudem a la gent gran amb les seves tasques en el dia a dia","thirdSectionFirstCardTitle":"Cura di\xfcrn","thirdSectionFirstCardText":"Inclou, sempre que es vulgui o es necessiti, ajuda en activitats rutin\xe0ries, cura personal, cuinar, impieza, acompanyament, enc\xe0rrecs, activitats de desenvolupament motriu i cognitiu.","thirdSectionSecondCardTitle":"Cura nocturn","thirdSectionSecondCardText":"Inclou, sempre que es vulgui o es necessiti, ajuda en activitats rutin\xe0ries, cura personal, cuinar, impieza, acompanyament, enc\xe0rrecs, activitats de desenvolupament motriu i cognitiu.","thirdSectionThirdCardTitle":"Cura 24 hores","thirdSectionThirdCardText":"Inclou, sempre que es vulgui o es necessiti, ajuda en activitats rutin\xe0ries, cura personal, cuinar, impieza, acompanyament, enc\xe0rrecs, activitats de desenvolupament motriu i cognitiu.","thirdSectionFourthCardTitle":"Neteja","thirdSectionFourthCardText":"Tria el pack de neteja completa o configura amb els serveis que vulguis, adaptant-lo a les teves necessitats.","footerFirstSectionTitle":"Prova\'ns sense comprom\xeds","footerFirstSectionSubtitle":"Estem tan segurs que t\'enamorar\xe0s del nostre servei que la primera vegada que reservis et regalem una hora gratis.","footerFirstSectionCTA":"Troba al teu professional","footerSecondSectionTitle":"Vols treballar com a cuidador?","footerSecondSectionSubtitle":"Som la plataforma que et posa en contacte amb fam\xedlies que busquen alg\xfa com tu. Registra\'t, rep ofertes i selecciona les que t\'interessin.","footerSecondSectionCTA":"Registra\'t com a cuidador"}')}},[[0,0,2,3,1,4]]]);