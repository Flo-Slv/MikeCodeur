// Les formulaires
// http://localhost:3000/alone/exercise/09.js

import * as React from 'react';

let LoginForm = () => {
	// 🐶 Gère l'événement onSubmit de <form> en créant une fonction 'handleSubmit'
	// 🤖 <form onSubmit={handleSubmit}>
	// 🤖 Utilise `event.preventDefault()` dans la fonction handleSubmit pour stopper
	// le comportement par defaut du formulaire (soumission et rafraichissement page)
	const [email, setEmail] = React.useState();
	const [error, setError] = React.useState();

	let handleSubmit = event => {
		event.preventDefault();
		alert(`Bonjour ${event.target.elements.emailInput.value}`);
		// alert(`Bonjour ${inputRef.current.value}`);
	};


	let handleChange = event => {
		setEmail(event.target.value);
		setError(event.target.value.includes('@') ? null : "Email non valide !");

	};

	// const inputRef = React.useRef();

	// 🐶 Affiche ensuite une popup Bonjour 'email@email.fr'
	// 🤖 Utilise `event.target.elements.emailInput.value` pour récupèrer la valeur de l'email
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Adresse email :
				<input type="text" name="emailInput" onChange={handleChange} />
			</label>

			<input type="submit" value="Connexion" />
			<div style={{color: 'red'}}>{error}</div>
		</form>
	);
};

let App = () => {
	return <LoginForm />
};

export default App;
