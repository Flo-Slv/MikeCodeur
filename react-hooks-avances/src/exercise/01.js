// useReducer
// http://localhost:3000/alone/exercise/01.js

/* eslint-disable no-unused-vars */
import * as React from 'react';

// 🐶 retourne la bonne valeur dans le 'reducer'
// On veut avoir le meme comportement que 'useState'
// la valeur retournée du 'reducer' doit etre le nouveau 'state'
const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + action.step}
		case 'DECREMENT':
			if (state.count <= 0) return { count: 0 };

			return { count: state.count - action.step}
		case 'RESET':
			return { count: 0 };
		default:
			return { count: state.count };
	};
};

const Compteur = () => {
	// 🐶 créé un hook 'useReducer' qui utilise la fonction 'reducer' crée plus haut et 0 en valeur par défaut
	const [state, dispatch] = React.useReducer(reducer, {
		count: 0
	});

	const increment = (val = 1) => dispatch({ type: 'INCREMENT', step: val });

	const decrement = (val = 1) => dispatch({ type: 'DECREMENT', step: val });

	const reset = () => dispatch({ type: 'RESET' });

	// 🐶 Utilise le state `count` pour la value du input
	// 🐶 Utilise `setCount(count + 1)` pour le 'onClick'
	return <>
		<div>
			<label>Increment</label>
			<input type="button" onClick={() => increment(10)} value={state.count} />
		</div>

		<div>
			<label>Decrement</label>
			<input type="button" onClick={() => decrement(5)} value={state.count} />
		</div>

		<div>
			<label>Reset</label>
			<input type="button" onClick={() => reset()} value={state.count} />
		</div>
	</>;
};

const App = () => <Compteur />;

export default App;
