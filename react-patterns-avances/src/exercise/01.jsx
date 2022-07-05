// Composants composés
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react';

import CheckBox from '../checkbox.js';

const CompoundComponentParent = ({ children }) => {
	const [checked, setChecked] = React.useState(Boolean(false));
	const tick = () => setChecked(!checked);

	return React.Children.map(children, child => {
		return React.cloneElement(child, { checked: checked, tick: tick });
	});
};

const Accept = ({ checked, children }) => {
	if (checked) return children;

	return null;
};

const Decline = ({ checked, children }) => {
	if (!checked) return children;

	return null;
};

const CheckBoxButton = ({ checked, tick, ...props }) =>
	<CheckBox checked={checked} onChange={tick} {...props} />

const App = () =>
	<div>
		<CompoundComponentParent>
			<CheckBoxButton />
			<Accept>✅ J'accepte les termes du contrat</Accept>
			<Decline>❌ Je decline les termes du contrat</Decline>
		</CompoundComponentParent>
	</div>;

export default App;
