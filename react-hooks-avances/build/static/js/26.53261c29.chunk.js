/*! For license information please see 26.53261c29.chunk.js.LICENSE.txt */
(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[26],{256:function(e,t,r){"use strict";r.r(t);var n=r(7),o=r(0),c=r(324),u=function(e,t){switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;case"RESET":return 0;default:throw new Error("Action non support\xe9")}};function s(){var e=o.useReducer(u,0),t=Object(n.a)(e,2),r=t[0],s=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"button",onClick:function(){return s({type:"INCREMENT"})},value:"incr\xe9menter ".concat(r)}),Object(c.jsx)("input",{type:"button",onClick:function(){return s({type:"DECREMENT"})},value:"d\xe9cr\xe9menter ".concat(r)}),Object(c.jsx)("input",{type:"button",onClick:function(){return s({type:"RESET"})},value:"reset ".concat(r)})]})}t.default=function(){return Object(c.jsx)(s,{})}},324:function(e,t,r){"use strict";e.exports=r(325)},325:function(e,t,r){"use strict";r(93);var n=r(0),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,c={},i=null,f=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:u.current}}t.jsx=i,t.jsxs=i}}]);
//# sourceMappingURL=26.53261c29.chunk.js.map