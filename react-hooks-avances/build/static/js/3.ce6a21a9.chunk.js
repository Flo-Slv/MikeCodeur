/*! For license information please see 3.ce6a21a9.chunk.js.LICENSE.txt */
(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[3],{241:function(e,t,n){"use strict";n.r(t);var r=n(29),i=n(35),o=n(47),c=n(50),s=n(0),l=n(332),a=(n(331),n(324));function u(e){var t=e.value;return Object(a.jsx)("div",{className:"component-display",children:Object(a.jsx)("div",{children:t})})}function f(e){var t=e.name,n=e.orange,r=e.wide,i=e.clickHandler,o=["component-button",n?"orange":"",r?"wide":""];return Object(a.jsx)("div",{className:o.join(" ").trim(),children:Object(a.jsx)("button",{onClick:function(){i(t)},children:t})})}function h(e){var t=e.clickHandler,n=function(e){t(e)};return Object(a.jsxs)("div",{className:"component-button-panel",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{name:"AC",clickHandler:n}),Object(a.jsx)(f,{name:"+/-",clickHandler:n}),Object(a.jsx)(f,{name:"%",clickHandler:n}),Object(a.jsx)(f,{name:"\xf7",clickHandler:n,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{name:"7",clickHandler:n}),Object(a.jsx)(f,{name:"8",clickHandler:n}),Object(a.jsx)(f,{name:"9",clickHandler:n}),Object(a.jsx)(f,{name:"x",clickHandler:n,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{name:"4",clickHandler:n}),Object(a.jsx)(f,{name:"5",clickHandler:n}),Object(a.jsx)(f,{name:"6",clickHandler:n}),Object(a.jsx)(f,{name:"-",clickHandler:n,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{name:"1",clickHandler:n}),Object(a.jsx)(f,{name:"2",clickHandler:n}),Object(a.jsx)(f,{name:"3",clickHandler:n}),Object(a.jsx)(f,{name:"+",clickHandler:n,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{name:"0",clickHandler:n,wide:!0}),Object(a.jsx)(f,{name:".",clickHandler:n}),Object(a.jsx)(f,{name:"=",clickHandler:n,orange:!0})]})]})}var d=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={total:null,next:null,operation:null},e.handleClick=function(t){e.setState(Object(l.a)(e.state,t))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"component-app",children:[Object(a.jsx)(u,{value:this.state.next||this.state.total||"0"}),Object(a.jsx)(h,{clickHandler:this.handleClick})]})}}]),n}(s.Component);t.default=d},324:function(e,t,n){"use strict";e.exports=n(325)},325:function(e,t,n){"use strict";n(93);var r=n(0),i=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,o={},a=null,u=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:u,props:o,_owner:c.current}}t.jsx=a,t.jsxs=a},330:function(e,t,n){var r;!function(i){"use strict";var o,c=1e6,s=1e6,l="[big.js] ",a=l+"Invalid ",u=a+"decimal places",f=a+"rounding mode",h=l+"Division by zero",d={},x=void 0,j=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function p(e,t,n,r){var i=e.c,o=e.e+t+1;if(o<i.length){if(1===n)r=i[o]>=5;else if(2===n)r=i[o]>5||5==i[o]&&(r||o<0||i[o+1]!==x||1&i[o-1]);else if(3===n)r=r||!!i[0];else if(r=!1,0!==n)throw Error(f);if(o<1)i.length=1,r?(e.e=-t,i[0]=1):i[0]=e.e=0;else{if(i.length=o--,r)for(;++i[o]>9;)i[o]=0,o--||(++e.e,i.unshift(1));for(o=i.length;!i[--o];)i.pop()}}else if(n<0||n>3||n!==~~n)throw Error(f);return e}function v(e,t,n,r){var i,o,s=e.constructor,l=!e.c[0];if(n!==x){if(n!==~~n||n<(3==t)||n>c)throw Error(3==t?a+"precision":u);for(n=r-(e=new s(e)).e,e.c.length>++r&&p(e,n,s.RM),2==t&&(r=e.e+n+1);e.c.length<r;)e.c.push(0)}if(i=e.e,n=(o=e.c.join("")).length,2!=t&&(1==t||3==t&&r<=i||i<=s.NE||i>=s.PE))o=o.charAt(0)+(n>1?"."+o.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)o="0"+o;o="0."+o}else if(i>0)if(++i>n)for(i-=n;i--;)o+="0";else i<n&&(o=o.slice(0,i)+"."+o.slice(i));else n>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&(!l||4==t)?"-"+o:o}d.abs=function(){var e=new this.constructor(this);return e.s=1,e},d.cmp=function(e){var t,n=this,r=n.c,i=(e=new n.constructor(e)).c,o=n.s,c=e.s,s=n.e,l=e.e;if(!r[0]||!i[0])return r[0]?o:i[0]?-c:0;if(o!=c)return o;if(t=o<0,s!=l)return s>l^t?1:-1;for(c=(s=r.length)<(l=i.length)?s:l,o=-1;++o<c;)if(r[o]!=i[o])return r[o]>i[o]^t?1:-1;return s==l?0:s>l^t?1:-1},d.div=function(e){var t=this,n=t.constructor,r=t.c,i=(e=new n(e)).c,o=t.s==e.s?1:-1,s=n.DP;if(s!==~~s||s<0||s>c)throw Error(u);if(!i[0])throw Error(h);if(!r[0])return new n(0*o);var l,a,f,d,j,v=i.slice(),m=l=i.length,b=r.length,g=r.slice(0,l),O=g.length,w=e,k=w.c=[],E=0,H=s+(w.e=t.e-e.e)+1;for(w.s=o,o=H<0?0:H,v.unshift(0);O++<l;)g.push(0);do{for(f=0;f<10;f++){if(l!=(O=g.length))d=l>O?1:-1;else for(j=-1,d=0;++j<l;)if(i[j]!=g[j]){d=i[j]>g[j]?1:-1;break}if(!(d<0))break;for(a=O==l?i:v;O;){if(g[--O]<a[O]){for(j=O;j&&!g[--j];)g[j]=9;--g[j],g[O]+=10}g[O]-=a[O]}for(;!g[0];)g.shift()}k[E++]=d?f:++f,g[0]&&d?g[O]=r[m]||0:g=[r[m]]}while((m++<b||g[0]!==x)&&o--);return k[0]||1==E||(k.shift(),w.e--),E>H&&p(w,s,n.RM,g[0]!==x),w},d.eq=function(e){return!this.cmp(e)},d.gt=function(e){return this.cmp(e)>0},d.gte=function(e){return this.cmp(e)>-1},d.lt=function(e){return this.cmp(e)<0},d.lte=function(e){return this.cmp(e)<1},d.minus=d.sub=function(e){var t,n,r,i,o=this,c=o.constructor,s=o.s,l=(e=new c(e)).s;if(s!=l)return e.s=-l,o.plus(e);var a=o.c.slice(),u=o.e,f=e.c,h=e.e;if(!a[0]||!f[0])return f[0]?(e.s=-l,e):new c(a[0]?o:0);if(s=u-h){for((i=s<0)?(s=-s,r=a):(h=u,r=f),r.reverse(),l=s;l--;)r.push(0);r.reverse()}else for(n=((i=a.length<f.length)?a:f).length,s=l=0;l<n;l++)if(a[l]!=f[l]){i=a[l]<f[l];break}if(i&&(r=a,a=f,f=r,e.s=-e.s),(l=(n=f.length)-(t=a.length))>0)for(;l--;)a[t++]=0;for(l=t;n>s;){if(a[--n]<f[n]){for(t=n;t&&!a[--t];)a[t]=9;--a[t],a[n]+=10}a[n]-=f[n]}for(;0===a[--l];)a.pop();for(;0===a[0];)a.shift(),--h;return a[0]||(e.s=1,a=[h=0]),e.c=a,e.e=h,e},d.mod=function(e){var t,n=this,r=n.constructor,i=n.s,o=(e=new r(e)).s;if(!e.c[0])throw Error(h);return n.s=e.s=1,t=1==e.cmp(n),n.s=i,e.s=o,t?new r(n):(i=r.DP,o=r.RM,r.DP=r.RM=0,n=n.div(e),r.DP=i,r.RM=o,this.minus(n.times(e)))},d.plus=d.add=function(e){var t,n=this,r=n.constructor,i=n.s,o=(e=new r(e)).s;if(i!=o)return e.s=-o,n.minus(e);var c=n.e,s=n.c,l=e.e,a=e.c;if(!s[0]||!a[0])return a[0]?e:new r(s[0]?n:0*i);if(s=s.slice(),i=c-l){for(i>0?(l=c,t=a):(i=-i,t=s),t.reverse();i--;)t.push(0);t.reverse()}for(s.length-a.length<0&&(t=a,a=s,s=t),i=a.length,o=0;i;s[i]%=10)o=(s[--i]=s[i]+a[i]+o)/10|0;for(o&&(s.unshift(o),++l),i=s.length;0===s[--i];)s.pop();return e.c=s,e.e=l,e},d.pow=function(e){var t=this,n=new t.constructor(1),r=n,i=e<0;if(e!==~~e||e<-1e6||e>s)throw Error(a+"exponent");for(i&&(e=-e);1&e&&(r=r.times(t)),e>>=1;)t=t.times(t);return i?n.div(r):r},d.round=function(e,t){var n=this.constructor;if(e===x)e=0;else if(e!==~~e||e<-c||e>c)throw Error(u);return p(new n(this),e,t===x?n.RM:t)},d.sqrt=function(){var e,t,n,r=this,i=r.constructor,o=r.s,c=r.e,s=new i(.5);if(!r.c[0])return new i(r);if(o<0)throw Error(l+"No square root");0===(o=Math.sqrt(r+""))||o===1/0?((t=r.c.join("")).length+c&1||(t+="0"),c=((c+1)/2|0)-(c<0||1&c),e=new i(((o=Math.sqrt(t))==1/0?"1e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+c)):e=new i(o),c=e.e+(i.DP+=4);do{n=e,e=s.times(n.plus(r.div(n)))}while(n.c.slice(0,c).join("")!==e.c.slice(0,c).join(""));return p(e,i.DP-=4,i.RM)},d.times=d.mul=function(e){var t,n=this,r=n.constructor,i=n.c,o=(e=new r(e)).c,c=i.length,s=o.length,l=n.e,a=e.e;if(e.s=n.s==e.s?1:-1,!i[0]||!o[0])return new r(0*e.s);for(e.e=l+a,c<s&&(t=i,i=o,o=t,a=c,c=s,s=a),t=new Array(a=c+s);a--;)t[a]=0;for(l=s;l--;){for(s=0,a=c+l;a>l;)s=t[a]+o[l]*i[a-l-1]+s,t[a--]=s%10,s=s/10|0;t[a]=(t[a]+s)%10}for(s?++e.e:t.shift(),l=t.length;!t[--l];)t.pop();return e.c=t,e},d.toExponential=function(e){return v(this,1,e,e)},d.toFixed=function(e){return v(this,2,e,this.e+e)},d.toPrecision=function(e){return v(this,3,e,e-1)},d.toString=function(){return v(this)},d.valueOf=d.toJSON=function(){return v(this,4)},(o=function e(){function t(n){var r=this;if(!(r instanceof t))return n===x?e():new t(n);n instanceof t?(r.s=n.s,r.e=n.e,r.c=n.c.slice()):function(e,t){var n,r,i;if(0===t&&1/t<0)t="-0";else if(!j.test(t+=""))throw Error(a+"number");e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".",""));(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length);for(i=t.length,r=0;r<i&&"0"==t.charAt(r);)++r;if(r==i)e.c=[e.e=0];else{for(;i>0&&"0"==t.charAt(--i););for(e.e=n-r-1,e.c=[],n=0;r<=i;)e.c[n++]=+t.charAt(r++)}}(r,n),r.constructor=t}return t.prototype=d,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.version="5.2.2",t}()).default=o.Big=o,void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},331:function(e,t,n){},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(330),i=n.n(r);function o(e,t,n){var r=i()(e||"0"),o=i()(t||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return r.plus(o).toString();if("-"===n)return r.minus(o).toString();if("x"===n)return r.times(o).toString();if("\xf7"===n)return"0"===o?(alert("Divide by 0 error"),"0"):r.div(o).toString();throw Error("Unknown operation '".concat(n,"'"))}function c(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var n=o(e.total,e.next,e.operation);return{total:i()(n).div(i()("100")).toString(),next:null,operation:null}}return e.next?{next:i()(e.next).div(i()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:o(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:o(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}}}]);
//# sourceMappingURL=3.ce6a21a9.chunk.js.map