// Context Module Functions
// http://localhost:3000/alone/exercise/06.js

import * as React from 'react';

import CheckBox from '../checkbox';

import {
	CounterProvider,
	CounterChangedProvider,
	useCounter,
	useCounterChanged,
	increment,
	decrement,
	reset
} from './06/context-counter';

const Counter = () => {
	const [stateX, dispatch] = useCounter();
	const [stateY, dispatchCounterChange] = useCounterChanged();

	const onReset = () => {
		reset(dispatch);
		reset(dispatchCounterChange);
	};

	return <div>
		<div>Compteur X : {stateX.count}</div>
		<button onClick={() => decrement(dispatch)}>-</button>
		<button onClick={() => increment(dispatch)}>+</button>

		<br />
		<br />

		<div>Compteur Y : {stateY.count}</div>
		<button onClick={() => decrement(dispatchCounterChange)}>-</button>
		<button onClick={() => increment(dispatchCounterChange)}>+</button>

		<br />
		<br />

		<div>Reset both</div>
		<button onClick={onReset}>Reset</button>

	</div>;
};

const TwoCheckbox = () => {
	const [, dispatch] = useCounter();
	const [, dispatchCounterChange] = useCounterChanged();

	return <div>
			<CheckBox onChange={() => increment(dispatch)} />
			<CheckBox onChange={() => increment(dispatchCounterChange)} />
	</div>;
};

const App = () => {
	return <CounterProvider>
		<CounterChangedProvider>
			<Counter />
			<TwoCheckbox />
		</CounterChangedProvider>
	</CounterProvider>;
};

export default App;
