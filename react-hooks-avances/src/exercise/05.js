// Hook Perso
// http://localhost:3000/alone/exercise/04.js

import * as React from 'react';

import '../04-styles.css';

// Grace à cet référence tu pourras utiliser `useImperativeHandle`
const Composant = React.forwardRef(({ onsubmit }, ref) => {
	const [value, setValue] = React.useState('');

	const inputRef = React.useRef();
	const buttonRef = React.useRef();

	const focusInput = () => inputRef.current.focus();

	const focusButton = () => buttonRef.current.focus();

	// 🤖 Utilise `React.useImperativeHandle` en utilisant la 'ref' du composant parent
	// ainsi que les deux fonctions ('focusInput','focusButton') qui utilisent les ref internes.

	React.useImperativeHandle(ref, () => ({ focusInput, focusButton }));

	return <div>
		<input
			ref={inputRef}
			type="text"
			value={value}
			onChange={e => setValue(e.target.value)}
		>
		</input>

		<input
			ref={buttonRef}
			type="button"
			value={'submit'}
			onClick={() => onsubmit(value)}
		>
		</input>
	</div>;
});

const App = () => {
	const [value, setValue] = React.useState('');
	const [checked, setChecked] = React.useState('');

	const composantRef = React.useRef();

	const focusInput = () => composantRef.current.focusInput();
	const focusButton = () => composantRef.current.focusButton();

	const handleCheck = e => {
		setChecked(e.target.checked);
		// ⛏️ décommente cette ligne pour appleler le focus boutton ou focus input.
		e.target.checked ? focusInput() : focusButton();
	};

	return <div>
		<Composant ref={composantRef} onsubmit={setValue} />

		<label>
			<input type="checkbox" checked={checked} onChange={handleCheck} />
			Focus sur input / button ?
		</label>
	</div>;
};

export default App;
