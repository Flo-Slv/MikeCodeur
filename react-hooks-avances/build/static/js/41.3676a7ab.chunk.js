(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[41],{254:function(e,n,t){"use strict";t.r(n),t.d(n,"readingTime",(function(){return o})),t.d(n,"default",(function(){return p})),t.d(n,"tableOfContents",(function(){return u})),t.d(n,"frontMatter",(function(){return l}));var a=t(84),s=(t(0),t(328)),r=["components"],o={text:"1 min read",minutes:.51,time:30600,words:102},c={};function p(e){var n=e.components,t=Object(a.a)(e,r);return Object(s.a)("wrapper",Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"usedebugvalue"},"useDebugValue"),Object(s.a)("h3",{id:"-utiliser-usedebugvalue-pour-debugger-dans-react-dev-tool"},"\ud83d\udca1 utiliser useDebugValue pour debugger dans React dev Tool"),Object(s.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(s.a)("p",null,"Detaille ce que tu as appris ici\n",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/07.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(s.a)("h2",{id:"comprendre"},"Comprendre"),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"useDebugValue")," s\u2019utilise uniquement des les hooks personnalis\xe9s et permet\nd\u2019afficher une \xe9tiquette dans le\n",Object(s.a)("inlineCode",{parentName:"p"},"[React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'function useCustomHook(){ React.useDebugValue("Hello"); }\n'}})),Object(s.a)("p",null,"\ud83d\udcd1 Le lien vers\n",Object(s.a)("a",{parentName:"p",href:"https://fr.reactjs.org/docs/hooks-reference.html#usedebugvalue"},"useDebugValue")),Object(s.a)("h2",{id:"exercice"},"Exercice"),Object(s.a)("p",null,"Dans cet exercice on va d\xe9bugger les donn\xe9es stocker en cache dans l\u2019API\ncontext."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'React<span class="token punctuation">.</span><span class="token function">useDebugValue</span><span class="token punctuation">(</span>cache<span class="token punctuation">[</span>marvelName<span class="token punctuation">]</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Il est \xe9galement possible de formater"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token function-variable function">formatDebugValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>prop<span class="token punctuation">,</span> state<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>prop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\` => </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\nReact<span class="token punctuation">.</span><span class="token function">useDebugValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>prop<span class="token punctuation">,</span> state<span class="token punctuation">}</span><span class="token punctuation">,</span> formatDebugValue<span class="token punctuation">)</span>\n'}})),Object(s.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(s.a)("p",null,"Remplir le formulaire le\n",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Hooks%20Avanc%C3%A9s&entry.533578441=07%20useDebugValue"},"formulaire de FeedBack.")))}p.isMDXComponent=!0;var u=function(){return[{id:"-utiliser-usedebugvalue-pour-debugger-dans-react-dev-tool",level:3,title:"\ud83d\udca1 utiliser useDebugValue pour debugger dans React dev Tool",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},l={}},328:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),s=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=s.a.createContext({}),l=function(e){var n=s.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},i={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},d=s.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||i[b]||r;return t?s.a.createElement(m,c(c({ref:n},u),{},{components:t})):s.a.createElement(m,c({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"===typeof e?e:a,o[1]=c;for(var u=2;u<r;u++)o[u]=t[u];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=41.3676a7ab.chunk.js.map