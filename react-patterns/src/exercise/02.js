// Props Functions
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react';

// 🐶 Créé 3 props du composant Calcul : 'nb1', 'nb2' pour les nombres à calculer
// et le prop opération qui contiendra la fonction de calcul
// 🤖 utilise la destruction `Calcul({nb1, nb2, operation})`

const somme = (nb1, nb2) => {
	return nb1 + nb2;
};

const multiplication = (nb1, nb2) => {
	return nb1 * nb2;
};

const exposant = (nb1, nb2) => {
	return nb1 * Math.exp(nb2);
};

const Calcul = ({ nb1, nb2, operation }) => {
	const [resultat, setResultat] = React.useState();
	const [nombre1, setNombre1] = React.useState();
	const [nombre2, setNombre2] = React.useState();

	// 🐶 Calcule le résulat de l'opération sur 'nb1' et 'nb2'
	// 🤖 operation(nb1, nb2)
	// let res = operation(nb1, nb2);
	let name = operation.name;

	const handleClick = (a = nb1, b = nb2) => {
		if (a instanceof Object) {
			a = nb1;
		}

		setNombre1(a);
		setNombre2(b);
		setResultat(operation(a, b));
	};

	// 🐶 Récupère le nom de l'opération via à la propriété 'name' de 'function'
	// 🤖 `operation.name`
	// 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/name

	// 🐶 Modifie la chaine de caractère ci-dessous pour la rendre dynamique

	return <>
		<input
			type="button"
			value={`Calculer ${name} 50 20`}
			onClick={() => handleClick(50, 20)}
		/>

		<input
			type="button"
			value={`Calculer ${name}`}
			onClick={handleClick}
		/>
		{
			resultat
				? `L'operation ${name} de ${nombre1} et ${nombre2} donne ${resultat}`
				: null
		}
	</>;
	// return <div>L'opération {operation.name} de 5 et 10 donne {res}</div>;
};

const App = () => {
	// 🐶 Déclare une fonction 'somme' et passe la en prop de '<Calcul>'
	// 🤖 <Calcul operation={somme} />

	// 🐶 Déclare une fonction 'multiplication' et passe la en prop de '<Calcul>'

	// 🐶 Déclare une fonction 'exposant' et passe la en prop de '<Calcul>'
	// 🤖 utilise `a * Math.exp(b)` pour calculer 'a exposant b'
	return <>
		<Calcul nb1={5} nb2={10} operation={somme}></Calcul>
		<Calcul nb1={5} nb2={10} operation={multiplication}></Calcul>
		<Calcul nb1={5} nb2={10} operation={exposant}></Calcul>
	</>
};

export default App;
