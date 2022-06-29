// useRef et useEffect
// http://localhost:3000/alone/exercise/06.js

import React from 'react';
import calculate from '../logic/calculate';

import '../06-styles.css';

// 👨‍✈️ Il faut migrer cet application calculette.

const Display = ({ value }) => {
	return <div className="component-display">
		<div>{value}</div>
	</div>;
};

const Button = ({ clickHandler, name, orange, wide }) => {
	const handleClick = () => clickHandler(name);

	const className = [
		'component-button',
		orange ? 'orange' : '',
		wide ? 'wide' : ''
	];

	return <div className={className.join(' ').trim()}>
		<button onClick={handleClick}>{name}</button>
	</div>;
};

const ButtonPanel = ({ clickHandler }) => {
	const handleClick = buttonName => clickHandler(buttonName);

	return <div className="component-button-panel">
		<div>
			<Button name="AC" clickHandler={handleClick} />
			<Button name="+/-" clickHandler={handleClick} />
			<Button name="%" clickHandler={handleClick} />
			<Button name="÷" clickHandler={handleClick} orange />
		</div>

		<div>
			<Button name="7" clickHandler={handleClick} />
			<Button name="8" clickHandler={handleClick} />
			<Button name="9" clickHandler={handleClick} />
			<Button name="x" clickHandler={handleClick} orange />
		</div>

		<div>
			<Button name="4" clickHandler={handleClick} />
			<Button name="5" clickHandler={handleClick} />
			<Button name="6" clickHandler={handleClick} />
			<Button name="-" clickHandler={handleClick} orange />
		</div>

		<div>
			<Button name="1" clickHandler={handleClick} />
			<Button name="2" clickHandler={handleClick} />
			<Button name="3" clickHandler={handleClick} />
			<Button name="+" clickHandler={handleClick} orange />
		</div>

		<div>
			<Button name="0" clickHandler={handleClick} wide />
			<Button name="." clickHandler={handleClick} />
			<Button name="=" clickHandler={handleClick} orange />
		</div>
	</div>;
};

// export default class App extends React.Component {
const App = () => {
	const [total, setTotal] = React.useState(null);
	const [next, setNext] = React.useState(null);
	const [operation, setOperation] = React.useState(null);


	const handleClick = buttonName => {
		const calculObject = calculate({
			total,
			next,
			operation
		}, buttonName);

		// ⚠️ Ici une syntaxe particulière `this.setState(calculObject)` qui permet de mettre à jour 3 states en meme temps
		// car calculObject contient total, next, operation
		// on pourait croire qu'il suffit de faire
		// 🤖
		// setTotal(calculObject.total)
		// setNext(calculObject.next)
		// setOperation(calculObject.operation)
		//
		// Mais cette syntaxe met systématiquemement à jour le state
		// tandis que this.setState(calculObject), met à jour uniquement si les states sont définis (!== undefined)
		// La bonne équivalence est plutot
		// 🤖
		// if (objCalc.total !== undefined) {
		//  setTotal(objCalc.total)
		// }

		// 🐶 Les migrations ne sont pas toujours automatisables et il faut comprendre les subitilités
		if (calculObject.total !== undefined)
			setTotal(calculObject.total);

		if (calculObject.next !== undefined)
			setNext(calculObject.next);

		if (calculObject.operation !== undefined)
			setOperation(calculObject.operation);
	};

	return <div className="component-app">
		<Display value={next || total || '0'} />
		<ButtonPanel clickHandler={handleClick} />
	</div>;
};

export default App;
