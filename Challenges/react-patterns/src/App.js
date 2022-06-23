import { useState } from 'react';

import Header from './Header.js';
import Content from './Content.js';

import './App.css';

const App = () => {
	const [state, setState] = useState({
		email: "",
		password: "",
		confirmation: ""
	});

	const onInputChange = (name, value) => {
		setState(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	return <div className="container">
		<Header />

		<Content
			state={state}
			onInputChange={onInputChange}
		/>
	</div>;
};

export default App;
