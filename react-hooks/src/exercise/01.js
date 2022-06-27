// Hook useState
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react';

// 🐶 Rend ce composant statefull en ajoutant un state email

const fonctionLongue = () => window.localStorage.getItem('email');

const Login = ({ initialEmail = '' }) => {
	// ⛏️ supprime la variable email et replace par un hook useState.
	// const email = '';
	// const [email, setEmail] = React.useState(initialEmail);
	const [email, setEmail] = React.useState(() => fonctionLongue() || initialEmail);
	const [error, setError] = React.useState(Boolean(false));

	const handleChange = event => {
		// 🐶 Récupère la valeur du champ input avec event.target.value et met à jour l'email
		let value = event.target.value;

		setEmail(value);
		value.includes('@') ? setError(Boolean(false)) : setError(Boolean(true));

		window.localStorage.setItem('email', value);
	};

	return <div>
		<div>
			<label>Entrez votre email : </label>
			<input value={email} onChange={handleChange} />

			<div style={{ color: error ? 'red' : '' }}>
				Votre email est {error ? 'invalide' : 'valide'}
			</div>
		</div>
	</div>
};

const App = () => {
	return <Login initialEmail={'flo@dev.fr'} />;
};

export default App;
