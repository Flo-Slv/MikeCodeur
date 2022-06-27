// Hook useEffect
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react';

// 🐶 Corrige l'erreur grâce à useEffect

const Login = ({ initialEmail = '' }) => {
	const [email, setEmail] = React.useState(() => {
		return window.localStorage.getItem('email') || initialEmail;
	});
	const [password, setPassword] = React.useState('');

	const handleChange = async event => setEmail(event.target.value);

	const handlePassChange = async e => setPassword(e.target.value);

	// 🐶 Créé un Hook useEffect
	// 🤖 React.useEffect(() => { ... })
	React.useEffect(() => {
		window.localStorage.setItem('email', email);
		console.log('Email Value', document.getElementById('email').value);
	}, [email]);

	React.useEffect(() => {
		window.localStorage.setItem('email', initialEmail);
		console.log('Email Value', document.getElementById('email').value);
	}, [initialEmail]);

	return <div>
		<form>
			<label htmlFor={"email"}>Entrez votre email : </label>
			<input id="email" value={email} onChange={handleChange} />

			<label htmlFor="password">Entrez votre mot de passe : </label>
			<input id="password" value={password} onChange={handlePassChange} />
		</form>
	</div>;
};

const App = () => {
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCount(count => count + 1);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return <Login initialEmail={`example-${count}@example.com`} />;
};

export default App;
