// Hello
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react';

import '../styles.css';

import Hello from '../components/hello';
import HowToTests from '../components/howToTest';

const fileName = '02.js';

const App = () => {
	return <div>
		<Hello name="John" />
		<hr />
		<HowToTests solution={false} fileName={fileName} />
	</div>;
}

export default App;
