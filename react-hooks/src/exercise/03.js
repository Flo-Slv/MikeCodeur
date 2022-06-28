// Lifting state
// http://localhost:3000/alone/exercise/03.js

import * as React from 'react';

// 👨‍✈️ Nous voulons afficher dans le composant Content, l'ordinateur préféré

// 🐶 accepte `computer` et `onComputerChange` en props de ce composant
const MyBestComputer = ({ computer, onComputerChange }) => {
	// ⛏️ supprime ce state il sera géré dans le composant parent.
	// const [computer, setComputer] = React.useState('MacBookPro');

	return <div>
		<label>Mon ordinateur préféré : </label>
		<input
			value={computer}
			// 🐶 remplace `setComputer` par `onComputerChange`
			// onChange={event => setComputer(event.target.value)}
			onChange={e => onComputerChange(e.target.value)}
		/>
	</div>;
};

const UserName = ({ userName, onUserNameChange }) => {
	return <div>
		<label>Nom d'utilisateur : </label>
		<input
			value={userName}
			onChange={event => onUserNameChange(event.target.value)}
		/>
	</div>;
};

// 🐶 accepte `computer` en props
const Content = ({ userName, computer }) => {
	return <div>
		{/* ⛏️ surprime ce libellé */}
		{/*Salut <b>{userName}</b> ! 🐶 Utilise plutôt celui ci */}
		{/* Salut <b>{userName}</b>, ton ordinateur préféré est <b>{computer}</b> */}
		Salut <b>{userName}</b>, ton ordinateur pref est <b>{computer}</b>
	</div>;
};

const App = () => {
	// 🐶 ajoute useState 'computer'
	const [userName, setUserName] = React.useState('');
	const [computer, setComputer] = React.useState('PC');

	const onComputerChange = comp => setComputer(comp);

	return <div>
		{/* 🐶 passe computer et onComputerChange en props */}
		<MyBestComputer computer={computer} onComputerChange={onComputerChange} />

		<UserName userName={userName} onUserNameChange={setUserName} />

		{/* 🐶 passe le prop computer ici */}
		<Content userName={userName} computer={computer}/>
	</div>;
};

export default App;
