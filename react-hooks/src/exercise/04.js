// Emoji List
// http://localhost:3000/alone/exercise/04.js
// Fork de : https://github.com/ahfarmer/emoji-search/

/* eslint-disable no-unused-vars */
import * as React from 'react';
import emojiList from '../emojiList';
import Clipboard from 'clipboard';
import useClipboard from 'react-use-clipboard';

import '../04-styles.css';

// 👨‍✈️ Créé l'application de recherche d'émojis selons les spécifications

// 🐶 Nous allons traiter les composants un par un et pour rappel il faudra remonté les données
// dans le composants principal <EmojiSearch />

const Header = ({ nbFound }) => {
	// 🐶 Fais en sorte que le Header affiche 'Aucun résultat' ou 'X emojis trouvés' en fonction de nbFound
	return <div className="component-header">
		<div>Recherche Emoji</div>

		<div className="result-found">
		{/* 🤖 Utilise une ternaire  */}
		{/* nbFound > 0 ? 'OK' : 'KO'    */}
			{nbFound > 0 ? `${nbFound} emojis trouves` : 'Aucun resultat'}
		</div>
	</div>
};

// 🐶 Fais remonter la valeur saisie dans le champs input au composant parent.
const SearchInput = ({ onTextChange }) => {
	// 🐶 Crée une fonction onChange qui appelera la fonction onTextChange passée en props
	// Rappel : `event.target.value` permet de récuperer la valeur de l'input.
	// 🤖 onTextChange(event.target.value)
	const handleChange = e => {
		e.preventDefault();
		onTextChange(e.target.value);
	};

	return <div className="component-search-input">
		<div>
		{/* 🐶 Gère l'évènement onChange sur le champs input*/}
		{/* 🤖 onChange={onChange}*/}
			<input onChange={handleChange}/>
		</div>
	</div>
};

// 🐶 Gère le composant parent
const EmojiSearch = () => {
	// 🐶 Créé un state `dataEmoji` qui contiendra un tableau d'émojis
	// 🤖 const [dataEmoji, setDataEmoji]
	const [dataEmoji, setDataEmoji] = React.useState([]);

	// 🐶 Créé une fonction 'handleTextChange' qui prend en paramètre 'text' le texte saisie dans le champs Input
	// 🐶 Dans cette fonction, filtre les émojis avec la fonction `filterEmoji(text)`
	// 🐶 Met à jour le state 'dataEmoji'(`setDataEmoji`) avec la liste filtrée d'émojis
	const handleTextChange = text => {
		const res = filterEmoji(text);

		setDataEmoji(res);
	};

	// 🐶 Passe ensuite ces props aux composants enfants.
	return <div>
		{/* 🐶 Passe le prop 'nbFound' au Header */}
		{/* 🤖 utilise dataEmoji.length */}
		<Header nbFound={dataEmoji.length} />
		{/* 🐶 Passe le prop 'onTextChange' à  SearchInput */}
		{/* 🤖 utilise dataEmoji.length */}
		<SearchInput onTextChange={handleTextChange} />
		{/* 🐶 Passe le prop 'data' à Result */}
		{/* 🤖 data={dataEmoji} */}
		<Result data={dataEmoji}/>
	</div>
};

// 🐶 Gère le 'copier dans le presse papier' grace à la librairie clipboard
// 📑 https://www.npmjs.com/package/clipboard
// 📑 Dans la documentation il est spécifié que pour utiliser il faut instancier clipboard
// 🤖 var clipboard = new ClipboardJS('.btn'); //btn nom de classe ou sera appliqué la copy.
// 📑 l'attribut 'data-clipboard-text' permet de spécifier ce qui sera copié
// 🤖 <div data-clipboard-text='Salut' /> copiera dans le press papier salut

// 📑 il faut ensuite detruire l'objet quand on en a plus besoin
// 🤖 clipboard.destroy();
const Result = ({ data = [] }) => {
	// 🐶 Utilise 'useEffect' pour gérer l'instanciation de clipboard
	// 🤖 React.useEffect
	// 🤖 const clipboard = new Clipboard('.copy-to-clipboard')
	// React.useEffect(() => {
	// 	const clipboard = new Clipboard('.copy-to-clipboard');

	// 	return () => clipboard.destroy();
	// });

	// 🐶 N'oubllie pas de 'cleanup' detruire l'objet dans useEffect en retournant une fonction fléché
	// 🤖 return () => { clipboard.destroy() }
	return <div className="component-emoji-results">
		{data.map(emojiData => (
			<EmojiResultRow
				key={emojiData.title}
				symbol={emojiData.symbol}
				title={emojiData.title}
			/>
		))}
	</div>
};

// 🐶 Gère la copie de l'emoji en appliquant les attributs necessaires à clipboard.
const EmojiResultRow = ({ symbol, title }) => {
	// 🐶 Ajoute le className 'copy-to-clipboard'
	// 🤖 className="copy-to-clipboard"

	const [isCopied, setCopied] = useClipboard(symbol);

	// 🐶 Ajoute l'attribut data-clipboard-text à la div
	// 🤖 <div data-clipboard-text={symbol}
	return <div data-clipboard-text={symbol} onClick={setCopied} className="component-emoji-result-row copy-to-clipboard">
		{symbol}
		<span className="title">{title}</span>
		<span className="info">Copier</span>
		{isCopied ? <span className="info">📋</span> : null}
	</div>
};

const App = () => {
	return <EmojiSearch />
};

export default App;

// eslint-disable-next-line no-unused-vars
const filterEmoji = (searchText, maxResults = 10) => {
	return emojiList
		.filter(emoji => {
			if (emoji.title.toLowerCase().includes(searchText.toLowerCase()))
				return true;

			if (emoji.keywords.includes(searchText))
				return true;

			if (emoji.symbol.includes(searchText))
				return true;

			return false;
		})
		.slice(0, maxResults);
};
