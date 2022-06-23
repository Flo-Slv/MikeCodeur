// Lifting State Up
// http://localhost:3000/alone/exercise/06.js

import * as React from 'react';

// 🐶 Modifie 'NameInput' et 'FirstNameInput' pour que leurs states soient gérer par le composant parent App.

// 🐶 Créé deux props : onNameChange et name
// 🤖 function NameInput({onNameChange,name}) {
const NameInput = ({ onNameChange, name }) => {
	// ⛏️ supprime le state name
	// const [name, setName] = React.useState('');
	const handleChange = e => onNameChange(e.target.value);
		// 🐶 fait appel 'onNameChange' pour faire remonter le state
		// setName(e.target.value);

	return <span>
		<label>Name : </label>
		<input type="text" value={name} onChange={handleChange} />
	</span>;
};

// 🐶 Répète les mêmes étapes que pour 'NameInput'
const FirstNameInput = ({ onFirstNameChange, firstName }) => {
	// const [firstName, setFirstName] = React.useState('');
	const handleChange = e => onFirstNameChange(e.target.value);
		// setFirstName(e.target.value)

	return <span>
		<label>FirstName : </label>
		<input type="text" value={firstName} onChange={handleChange} />
	</span>;
};

const App = () => {
	// 🐶 Créé deux states 'name' et 'firstName'
	// 🤖 const [name, setName] = React.useState('');
	const [name, setName] = React.useState('');
	const [firstName, setFirstName] = React.useState('');

	const handleChangeName = name => setName(name);

	const handleChangeFirstName = firstName => setFirstName(firstName);

	// 🐶 Créé deux fonctions 'handleChangeName' et 'handleChangeFirstName'
	// qui prenent un nom en paramètre et met à jour le state
	// 🤖 const handleNameChange = name => { setName(name) }

	return <div>
		{/* 🐶 Passe les bons props (fonctions et données)  */}
		<NameInput onNameChange={handleChangeName} name={name} />
		<FirstNameInput onFirstNameChange={handleChangeFirstName} firstName={firstName} />
		<div>Bonjour {name} {firstName} </div>
	</div>;
};

export default App;
