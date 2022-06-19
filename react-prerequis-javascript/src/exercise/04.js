/* eslint-disable no-unused-vars */
// Fonctions fléchées
// http://localhost:3000/alone/exercise/04.js

import displayText, {init} from './helper/exerciseHelper'
init('Fonctions fléchées')

// 🐶 E = mc² : Créé une fonction fléchée `calculEnergie` avec les propietes `masse` et `celerite` (vitesse de la lumière)
// `celerite` aura la valeur par défaut 300000000
//  🤖 utilise `Math.pow(celerite, 2)` pour le calcul du carré
//  🤖 utilise `round` pour arrondir
const calculEnergie = (masse, celerite = 300000000) => {
	let energie = masse * Math.pow(celerite, 2);
	return Math.round(energie);
};

// 🐶 appelle la fonction calculEnergie avec 5 grammes (0.005 kg)
// et affiche le résultat à l'ecran avec displayText
const m = 0.005;
displayText(`L'energie d'une masse de ${m} kg est ${calculEnergie(m)} joules.`);
