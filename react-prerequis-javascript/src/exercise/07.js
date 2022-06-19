// Promise aync await
// http://localhost:3000/isolated/final/07.js

import {init} from './helper/exerciseHelper'
init('Promise aync await')

// 🐶 Créé un Promise `calculNombrePair` qui detecte si la parametre en entrée est un nombre impair
// utilise modulo pour savoir si un nombre est pair
// 🤖 if (nombre % 2 == 0)
let calcNombrePair = (num = 0) => {
	return new Promise((resolve, reject) => {
		if (num % 2 === 0)
			resolve('Pair');
		else
			reject('Impair');
	});
};

// 🐶 Appelle cette Promise avec les nombres 2 et 3 et gère les cas ok et ko dans la console
calcNombrePair(3).then(res => console.log(res), err => console.log(err))
calcNombrePair(2).then(res => console.log(res), err => console.log(err))

// 🐶 Appelle cette Promise en asynchrone
// 🤖 async function
// 🤖 await calculNombrePair
const evenOrOdd = async () => {
	let res;
	try {
		res = await calcNombrePair(2);
		console.log(res);
		res = await calcNombrePair(3);
		console.log(res);
		return res;
	}
	catch(error) {
		return `error: ${error}`;
	}
};
evenOrOdd().then(res => console.log(res), err => console.log(err));
