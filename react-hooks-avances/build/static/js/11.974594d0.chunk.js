/*! For license information please see 11.974594d0.chunk.js.LICENSE.txt */
(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[11],{264:function(e,r,t){"use strict";t.r(r);var n=t(7),c=t(0),a=t(94),o=t(326),u=(t(327),t(324)),s=function(e,r){switch(r.type){case"fetching":return{marvel:null,error:null};case"done":return{marvel:r.payload,error:null};case"fail":return{marvel:null,error:r.error};default:throw new Error("Action non support\xe9")}};function i(e){var r=function(e){var r=c.useReducer(s,{marvel:null,error:null}),t=Object(n.a)(r,2),a=t[0],u=t[1];return c.useEffect((function(){e&&(u({type:"fetching"}),Object(o.d)(e).then((function(e){return u({type:"done",payload:e})})).catch((function(e){return u({type:"fail",error:e})})))}),[e]),a}(e.marvelName),t=r.error,a=r.marvel;if(t)throw t;return Object(u.jsxs)("div",{children:[" ",a?Object(u.jsx)(o.b,{marvel:a}):"Le marvel n'existe pas"]})}r.default=function(){var e=c.useState(""),r=Object(n.a)(e,2),t=r[0],s=r[1];return Object(u.jsxs)("div",{className:"marvel-app",children:[Object(u.jsx)(o.c,{marvelName:t,onSearch:function(e){s(e)}}),Object(u.jsx)("div",{className:"marvel-detail",children:Object(u.jsx)(a.ErrorBoundary,{FallbackComponent:o.a,children:Object(u.jsx)(i,{marvelName:t})},t)})]})}},324:function(e,r,t){"use strict";e.exports=t(325)},325:function(e,r,t){"use strict";t(93);var n=t(0),c=60103;if(r.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;c=a("react.element"),r.Fragment=a("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,a={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:c,type:e,key:i,ref:l,props:a,_owner:o.current}}r.jsx=i,r.jsxs=i},326:function(e,r,t){"use strict";t.d(r,"b",(function(){return d})),t.d(r,"c",(function(){return v})),t.d(r,"d",(function(){return s})),t.d(r,"a",(function(){return h})),t.d(r,"e",(function(){return i})),t.d(r,"f",(function(){return l}));var n=t(7),c=t(0),a=t(324),o="5a4bd353e754599ed13518c2f87509df",u={method:"GET",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),mode:"cors"},s=function(e){var r="https://gateway.marvel.com:443/v1/public/characters?apikey=".concat(o,"&nameStartsWith=").concat(e);return fetch(r,u).then((function(e){return e.json()})).then((function(r){return r.data.results.length>0?r.data.results[0]:Promise.reject(new Error('Aucun Marvel trouv\xe9 avec le nom "'.concat(e,'"')))})).catch((function(r){return Promise.reject(new Error('Aucun Marvel trouv\xe9 avec le nom "'.concat(e,'"')))}))},i=function(e){var r="https://gateway.marvel.com:443/v1/public/characters/".concat(e,"?apikey=").concat(o);return fetch(r,u).then((function(e){return e.json()})).then((function(r){return r.data.results.length>0?r.data.results[0]:Promise.reject(new Error("Aucun Marvel trouv\xe9 avec l'id \"".concat(e,'"')))})).catch((function(r){return Promise.reject(new Error("Aucun Marvel trouv\xe9 avec l'id \"".concat(e,'"')))}))},l=function(e){var r="https://gateway.marvel.com:443/v1/public/characters?apikey=".concat(o,"&nameStartsWith=").concat(e);return fetch(r,u).then((function(e){return e.json()})).then((function(r){return r.data.results.length>0?r.data.results:Promise.reject(new Error('Aucun Marvel trouv\xe9 avec le nom "'.concat(e,'"')))})).catch((function(r){return Promise.reject(new Error('Aucun Marvel trouv\xe9 avec le nom "'.concat(e,'"')))}))};function d(e){var r=e.marvel;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"marvel-img",children:Object(a.jsx)("img",{height:"400",src:r.thumbnail.path+"."+r.thumbnail.extension,alt:r.name})}),Object(a.jsx)("div",{className:"marvel-name",children:Object(a.jsxs)("h1",{children:[r.name,Object(a.jsx)("sup",{children:r.number})]})}),Object(a.jsxs)("div",{className:"marvel-wrapper",children:[Object(a.jsx)("h3",{children:"Apparait dans"}),Object(a.jsx)("ul",{children:r.series.items.map((function(e,r){return Object(a.jsxs)("li",{children:[Object(a.jsx)("label",{children:e.name}),":"," "]},r)}))})]})]})}function v(e){var r=e.onSearch,t=e.marvelName,o=c.useState(t),u=Object(n.a)(o,2),s=u[0],i=u[1];return Object(a.jsxs)("div",{className:"component-header",children:[Object(a.jsxs)("div",{children:["Recherche Marvel (",Object(a.jsx)("span",{onClick:function(e){return i("x-men")},children:"x-men"}),","," ",Object(a.jsx)("span",{onClick:function(e){return i("spider-man")},children:"spider-man"})," ...)"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("input",{type:"button",onClick:function(){return r(s)},value:"rechercher"})]})]})}function h(e){var r=e.error;return Object(a.jsxs)("div",{style:{color:"red"},children:["Une erreur est survenue lors de la recherche de Marvel detail :"," ",Object(a.jsxs)("pre",{style:{color:"grey"},children:[" D\xe9tail : ",r.message]})]})}},327:function(e,r,t){}}]);
//# sourceMappingURL=11.974594d0.chunk.js.map