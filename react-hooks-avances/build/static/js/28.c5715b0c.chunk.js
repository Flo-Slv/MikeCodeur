/*! For license information please see 28.c5715b0c.chunk.js.LICENSE.txt */
(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[28],{258:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n(0),c=n(324),u=function(e,t){switch(t.type){case"INCREMENT":return e+t.payload;case"DECREMENT":return e-t.payload;case"RESET":return 0;default:throw new Error("Action non support\xe9")}};function a(){var e=o.useReducer(u,0),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"button",onClick:function(){return function(){a({type:"INCREMENT",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1})}(10)},value:"incr\xe9menter 10 :  ".concat(n)}),Object(c.jsx)("input",{type:"button",onClick:function(){return function(){a({type:"DECREMENT",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1})}(5)},value:"d\xe9cr\xe9menter 5 :  ".concat(n)}),Object(c.jsx)("input",{type:"button",onClick:function(){a({type:"RESET"})},value:"reset ".concat(n)})]})}t.default=function(){return Object(c.jsx)(a,{})}},324:function(e,t,n){"use strict";e.exports=n(325)},325:function(e,t,n){"use strict";n(93);var r=n(0),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,c={},s=null,p=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:p,props:c,_owner:u.current}}t.jsx=s,t.jsxs=s}}]);
//# sourceMappingURL=28.c5715b0c.chunk.js.map