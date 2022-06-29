// useEffect HTTP Avancée
// http://localhost:3000/alone/exercise/08.js

/* eslint-disable no-unused-vars */
import React from 'react';

// 🐶 Tu vas avoir besoin d'appeler l'API Marvel et d'utiliser 'MarvelPersoView'
// pour afficher le detail d'un personnage Marvel.
// importe donc 'fetchMarvel' 'MarvelPersoView' depuis '../marvel'
import { MarvelSearchForm, fetchMarvel, MarvelPersoView } from '../marvel';

import '../08-styles.css';

const MarvelDetails = ({ marvelName = '' }) => {
	// 🐶 Créé un state pour le personnage marvel
	const [marvel, setMarvel] = React.useState(null);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		if (!marvelName) return;

		setMarvel(null);

		fetchMarvel(marvelName)
			.then(res => setMarvel(res))
			.catch(error => setError(error));
	}, [marvelName]);

	if (error)
		return <div style={{ color: 'red' }}>
			Une erreur est survenue: {error.message}
		</div>;

	if (!marvelName)
		return 'Entre un nom de Marvel';

	if (!marvel)
		return 'Chargement...';


	return <MarvelPersoView marvel={marvel} />

	// 🐶 React.useEffect : utilise React.useEffect pour appeler l'API marvel quand le prop 'marvelName' change
	// Attention aux dependances de useEffect []
	// N'appelle pas l'API marvel si 'marvelName' n'est pas renseigné
	// 🤖 if (!marvelName) { return }
	// 🐶 Avant d'appeler `fetchMarvel` met le state marvel à null (nettoyage du précedent Marvel)
	// 🤖 Appelle `fetchMarvel` :
	//    fetchMarvel(marvelName)
	//    .then(marvel => /* met à jour le state marvel ici */)

	// 🐶 retourne (render) 3 choses differentes en fonctions du state et prop
	//  - 'Entrer un nom de personnage Marvel' si `marvelName` n'est pas renseigné
	//  - 'chargement ...' si `marvel` n'est pas renseigné
	//  - <MarvelPersoView marvel={marvel} sinon
};

const App = () => {
	const [marvelName, setMarvelName] = React.useState('');

	const handleSearch = name => setMarvelName(name);

	return <div className="marvel-app">
		<MarvelSearchForm marvelName={marvelName} onSearch={handleSearch} />

		<div className="marvel-detail">
			<MarvelDetails marvelName={marvelName} />
		</div>
	</div>;
};

export default App;
