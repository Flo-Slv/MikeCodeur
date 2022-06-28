// useRef et useEffect
// http://localhost:3000/alone/final/05.js

import * as React from 'react';
import ConfettiGenerator from 'confetti-js';

const Confetti = () => {
	const confettiRef = React.useRef();

	React.useEffect(() => {
		const confettiSettings = {target: confettiRef.current};
		const confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();

		return () => confetti.clear();
	}, []);

	return <canvas ref={confettiRef} />;
};

const App = () => <Confetti />;

export default App;
