(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[36],{243:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",(function(){return o})),s.d(a,"default",(function(){return l})),s.d(a,"tableOfContents",(function(){return r})),s.d(a,"frontMatter",(function(){return u}));var e=s(84),t=(s(0),s(328)),p=["components"],o={text:"5 min read",minutes:4.225,time:253500,words:845},c={};function l(n){var a=n.components,s=Object(e.a)(n,p);return Object(t.a)("wrapper",Object.assign({},c,s,{components:a,mdxType:"MDXLayout"}),Object(t.a)("h1",{id:"hooks-personnalis\xe9s--logique-r\xe9utilisable"},"Hooks Personnalis\xe9s : Logique r\xe9utilisable"),Object(t.a)("h3",{id:"-hooks-personnalis\xe9s--logique-r\xe9utilisable"},"\ud83d\udca1 Hooks Personnalis\xe9s : Logique r\xe9utilisable"),Object(t.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(t.a)("p",null,"Detaille ce que tu as appris ici\n",Object(t.a)("inlineCode",{parentName:"p"},"src/exercise/02.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(t.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(t.a)("h2",{id:"comprendre"},"Comprendre"),Object(t.a)("p",null,"Dans une application il arrive souvent que l\u2019on ai a faire les m\xeames actions\ndans diff\xe9rentes parties. Prenons un exemple courant, les appels API REST."),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\nReact<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://hn.algolia.com/api/v1/search?query=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>query<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">json</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">setData</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>hits<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>query<span class="token punctuation">]</span><span class="token punctuation">)</span>\n'}})),Object(t.a)("p",null,"On pourrait avoir besoin de faire ces appels dans plusieurs composants. Il\nfaudrait alors dupliquer cette logique partout ou l\u2019on a besoin de faire ces\nappels API. La maintenance devient compliqu\xe9 et ne respecte pas le principe DRY\n(Don\u2019t Repeat Yourself). Les Hook personnalis\xe9s permettent d\u2019extraire une\nlogique particuliere dans un Hook dans le but de pouvoir la r\xe9utiliser partout."),Object(t.a)("p",null,Object(t.a)("strong",{parentName:"p"},"Qu\u2019est-ce qu\u2019un Hook personnalis\xe9 ?")),Object(t.a)("ul",null,Object(t.a)("li",{parentName:"ul"},"Une fonction JavaScript"),Object(t.a)("li",{parentName:"ul"},"Avec un nom commen\xe7ant par \u201cuse\u201d"),Object(t.a)("li",{parentName:"ul"},"Qui peut appeler d\u2019autres Hooks"),Object(t.a)("li",{parentName:"ul"},"Avoir ses propres states et props")),Object(t.a)("p",null,"\ud83d\udcd1 Le lien vers la doc\n",Object(t.a)("a",{parentName:"p",href:"https://fr.reactjs.org/docs/hooks-custom.html"},"des Hooks personnalis\xe9s")),Object(t.a)("h2",{id:"exercice"},"Exercice"),Object(t.a)("p",null,"Dans cet exercice nous allons reprendre les appels aux API REST de Marvel et\nconstruire nos propres Hooks Personnalis\xe9s. Commen\xe7ons par un Hook simple qui\nnous permettrais de savoir si un personnage Marvel exist que l\u2019on pourrait\nutiliser comme cela."),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> marvelExist <span class="token operator">=</span> <span class="token function">useMarvelExist</span><span class="token punctuation">(</span>marvelName<span class="token punctuation">)</span>\n'}})),Object(t.a)("h2",{id:"bonus"},"Bonus"),Object(t.a)("h3",{id:"1--hook-avec-personnage--erreur"},"1. \ud83d\ude80 Hook avec Personnage / erreur"),Object(t.a)("p",null,"Tu vas devoir faire \xe9voluer le hook pour pouvoir charger un personnage ou\nindiquer une erreur. Renommons notre Hook comme cela :"),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>marvel<span class="token punctuation">,</span> error<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useFindMarvelByName</span><span class="token punctuation">(</span>marvelName<span class="token punctuation">)</span>\n'}})),Object(t.a)("p",null,"Supprime le state ",Object(t.a)("inlineCode",{parentName:"p"},"exist")," et utilise plut\xf4t 2 states ",Object(t.a)("inlineCode",{parentName:"p"},"marvel, error")," que tu\nretourneras du hook avec ",Object(t.a)("inlineCode",{parentName:"p"},"return [marvel, error]"),"."),Object(t.a)("p",null,"L\xe8ve une erreur si le state ",Object(t.a)("inlineCode",{parentName:"p"},"error")," est pr\xe9sent, il sera catcher par\n",Object(t.a)("inlineCode",{parentName:"p"},"ErrorBoundary"),"."),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>marvel<span class="token punctuation">,</span> error<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useFindMarvelByName</span><span class="token punctuation">(</span>marvelName<span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> error\n<span class="token punctuation">}</span>\n'}})),Object(t.a)("h3",{id:"2--usereducer"},"2. \ud83d\ude80 useReducer"),Object(t.a)("p",null,"Plut\xf4t que d\u2019utiliser deux state, combinons les avec useReducer"),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token operator">...</span>action<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  marvel<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  error<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">//... dans useEffect</span>\n<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>error<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>marvel<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// return state \xe0 la fin du hook</span>\n'}})),Object(t.a)("p",null,"Comme nous affichons un personnage Marvel, tu peux r\xe9utiliser le composant\n",Object(t.a)("inlineCode",{parentName:"p"},"MarvelPersoView")," du module pr\xe9c\xe9dent a la place du nom"),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MarvelPersoView</span></span> <span class="token attr-name">marvel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>marvel<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n'}})),Object(t.a)("h3",{id:"3--type-daction-et-payload"},"3. \ud83d\ude80 Type d\u2019action et payload"),Object(t.a)("p",null,"Plus nous allons avoir de donn\xe9es : ",Object(t.a)("inlineCode",{parentName:"p"},"error"),", ",Object(t.a)("inlineCode",{parentName:"p"},"marvel"),", etc \u2026 plus il va\nfalloir les g\xe9rer individuellement. On voit d\xe9j\xe0 avant l\u2019appel API :"),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>error<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>marvel<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n'}})),Object(t.a)("p",null,"A la place nous voudrions avoir un action utiliser des types d\u2019action avec des\ndonn\xe9es en payload. Par exemple"),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'fetching\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span> payload<span class="token operator">:</span> marvel<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'fail\'</span><span class="token punctuation">,</span> error<span class="token punctuation">}</span><span class="token punctuation">)</span>\n'}})),Object(t.a)("ul",null,Object(t.a)("li",{parentName:"ul"},"L\u2019action ",Object(t.a)("inlineCode",{parentName:"li"},"fetching")," se chargera d\u2019initialiser correctement tous les states\n(",Object(t.a)("inlineCode",{parentName:"li"},"error"),", ",Object(t.a)("inlineCode",{parentName:"li"},"marvel")," \xe0 ",Object(t.a)("inlineCode",{parentName:"li"},"null"),")"),Object(t.a)("li",{parentName:"ul"},"L\u2019action ",Object(t.a)("inlineCode",{parentName:"li"},"done")," se chargera d\u2019initialiser les states ",Object(t.a)("inlineCode",{parentName:"li"},"error")," \xe0 ",Object(t.a)("inlineCode",{parentName:"li"},"null")," et\n",Object(t.a)("inlineCode",{parentName:"li"},"marvel")),Object(t.a)("li",{parentName:"ul"},"L\u2019action ",Object(t.a)("inlineCode",{parentName:"li"},"fail")," se chargera d\u2019initialiser les states\n",Object(t.a)("inlineCode",{parentName:"li"},"error avec le message d'ereur"),"et ",Object(t.a)("inlineCode",{parentName:"li"},"marvel")," \xe0 ",Object(t.a)("inlineCode",{parentName:"li"},"null"))),Object(t.a)("p",null,"Dans cet exercice tu vas devoir g\xe9rer cela dans le ",Object(t.a)("inlineCode",{parentName:"p"},"reducer")," ."),Object(t.a)("h3",{id:"4--g\xe9rer-le-chargement-avec-un-status"},"4. \ud83d\ude80 G\xe9rer le chargement avec un status"),Object(t.a)("p",null,"On voudrait maintenant g\xe9rer plus finement avec un statut."),Object(t.a)("ul",null,Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"idle")," : situation de base : afficher entrer un nom de Marvel"),Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"fetching")," : quand l\u2019appel API est en cours : afficher chargement en cours \u2026"),Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"fail")," : quand une erreur survient : ",Object(t.a)("inlineCode",{parentName:"li"},"throw error")," sera g\xe9rer par\n",Object(t.a)("inlineCode",{parentName:"li"},"ErrorBoundary")),Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"done")," : afficher le personnage Marvel dans\n",Object(t.a)("inlineCode",{parentName:"li"},"<MarvelPersoView marvel={marvel} />"))),Object(t.a)("p",null,"Tu vas devoir rajouter ",Object(t.a)("inlineCode",{parentName:"p"},"status")," dans le ",Object(t.a)("inlineCode",{parentName:"p"},"useReducer")," et le g\xe9rer dans ",Object(t.a)("inlineCode",{parentName:"p"},"reducer")),Object(t.a)("p",null,"Dans le composant Marvel pour pourra g\xe9rer plusieurs rendu en fonction du status"),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token string">\'fail\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> error\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token string">\'idle\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">\'enter un nom de Marvel\'</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token string">\'fetching\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">\'chargement en cours ...\'</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token string">\'done\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MarvelPersoView</span></span> <span class="token attr-name">marvel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>marvel<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">}</span>\n'}})),Object(t.a)("h3",{id:"5--fetch-g\xe9n\xe9rique"},"5. \ud83d\ude80 Fetch g\xe9n\xe9rique"),Object(t.a)("p",null,"On voudrait pouvoir r\xe9utiliser cette logique mais peu importe le type de donn\xe9es\nr\xe9cup\xe9r\xe9es via des API. Nous allons rendre le hook le plus g\xe9n\xe9rique possible.\nRenommer ",Object(t.a)("inlineCode",{parentName:"p"},"useFindMarvelByName")," en ",Object(t.a)("inlineCode",{parentName:"p"},"useFetchData")," et en ajoutant un param\xe8tre\n",Object(t.a)("inlineCode",{parentName:"p"},"fetch")," qui contiendra la fonction de fetch (",Object(t.a)("inlineCode",{parentName:"p"},"fetchMarvel")," ou ",Object(t.a)("inlineCode",{parentName:"p"},"fetchMarvelList"),"\nou autre). On renommera le state ",Object(t.a)("inlineCode",{parentName:"p"},"marvel")," en ",Object(t.a)("inlineCode",{parentName:"p"},"data")," dans le ",Object(t.a)("inlineCode",{parentName:"p"},"reducer")),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">useFetchData</span><span class="token punctuation">(</span><span class="token parameter">search<span class="token punctuation">,</span> fetch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  <span class="token function">fetch</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n'}})),Object(t.a)("p",null,"Par composition il est maintenant possible d\u2019avoir le m\xeame hook que pr\xe9c\xe9demment\n."),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">useFindMarvelByName</span><span class="token punctuation">(</span><span class="token parameter">marvelName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">useFetchData</span><span class="token punctuation">(</span>marvelName<span class="token punctuation">,</span> fetchMarvel<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useFindMarvelByName</span><span class="token punctuation">(</span>marvelName<span class="token punctuation">,</span> fetchMarvelById<span class="token punctuation">)</span>\n'}})),Object(t.a)("p",null,"Dans cet exercice il va falloir cr\xe9er un hook ",Object(t.a)("inlineCode",{parentName:"p"},"useFindMarvelList")," qui utilise la\nfonction ",Object(t.a)("inlineCode",{parentName:"p"},"fetchMarvelsList")," (\xe0 importer depuis ",Object(t.a)("inlineCode",{parentName:"p"},"marvel.js"),") et la passe en\nparam\xe8tre de ",Object(t.a)("inlineCode",{parentName:"p"},"useFetchData"),". Ce hook sera appel\xe9 depuis un nouveau composant\n",Object(t.a)("inlineCode",{parentName:"p"},"MarvelList"),". Ajouter une ",Object(t.a)("inlineCode",{parentName:"p"},"checkBox")," avec un state ",Object(t.a)("inlineCode",{parentName:"p"},"searchList")," et conditionner\nl\u2019affichage."),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>marvelName<span class="token punctuation">}</span></span> <span class="token attr-name">FallbackComponent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ErrorDisplay<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token punctuation">{</span>searchList <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MarvelList</span></span> <span class="token attr-name">marvelName</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>marvelName<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Marvel</span></span> <span class="token attr-name">marvelName</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>marvelName<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span>\n'}})),Object(t.a)("p",null,"Le ",Object(t.a)("inlineCode",{parentName:"p"},"render")," de ",Object(t.a)("inlineCode",{parentName:"p"},"MarvelList")," sera comme ceci"),Object(t.a)("pre",null,Object(t.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token punctuation">{</span>\n  data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">marvel</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token operator">:</span> <span class="token string">\'grey\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MarvelPersoView</span></span> <span class="token attr-name">marvel</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>marvel<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n'}})),Object(t.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(t.a)("p",null,"Remplir le formulaire le\n",Object(t.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Hooks%20Avanc%C3%A9s&entry.533578441=02%20Hooks%20Personnalis%C3%A9s%20:%20Logique%20r%C3%A9utilisable"},"formulaire de FeedBack.")))}l.isMDXComponent=!0;var r=function(){return[{id:"-hooks-personnalis\xe9s--logique-r\xe9utilisable",level:3,title:"\ud83d\udca1 Hooks Personnalis\xe9s : Logique r\xe9utilisable",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"bonus",level:2,title:"Bonus",children:[{id:"1--hook-avec-personnage--erreur",level:3,title:"1. \ud83d\ude80 Hook avec Personnage / erreur",children:[]},{id:"2--usereducer",level:3,title:"2. \ud83d\ude80 useReducer",children:[]},{id:"3--type-daction-et-payload",level:3,title:"3. \ud83d\ude80 Type d\u2019action et payload",children:[]},{id:"4--g\xe9rer-le-chargement-avec-un-status",level:3,title:"4. \ud83d\ude80 G\xe9rer le chargement avec un status",children:[]},{id:"5--fetch-g\xe9n\xe9rique",level:3,title:"5. \ud83d\ude80 Fetch g\xe9n\xe9rique",children:[]}]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},u={}},328:function(n,a,s){"use strict";s.d(a,"a",(function(){return d}));var e=s(0),t=s.n(e);function p(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function o(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,e)}return s}function c(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?o(Object(s),!0).forEach((function(a){p(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}function l(n,a){if(null==n)return{};var s,e,t=function(n,a){if(null==n)return{};var s,e,t={},p=Object.keys(n);for(e=0;e<p.length;e++)s=p[e],a.indexOf(s)>=0||(t[s]=n[s]);return t}(n,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(e=0;e<p.length;e++)s=p[e],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(t[s]=n[s])}return t}var r=t.a.createContext({}),u=function(n){var a=t.a.useContext(r),s=a;return n&&(s="function"===typeof n?n(a):c(c({},a),n)),s},i={inlineCode:"code",wrapper:function(n){var a=n.children;return t.a.createElement(t.a.Fragment,{},a)}},k=t.a.forwardRef((function(n,a){var s=n.components,e=n.mdxType,p=n.originalType,o=n.parentName,r=l(n,["components","mdxType","originalType","parentName"]),k=u(s),d=e,m=k["".concat(o,".").concat(d)]||k[d]||i[d]||p;return s?t.a.createElement(m,c(c({ref:a},r),{},{components:s})):t.a.createElement(m,c({ref:a},r))}));function d(n,a){var s=arguments,e=a&&a.mdxType;if("string"===typeof n||e){var p=s.length,o=new Array(p);o[0]=k;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=n,c.mdxType="string"===typeof n?n:e,o[1]=c;for(var r=2;r<p;r++)o[r]=s[r];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,s)}k.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=36.d284f77b.chunk.js.map