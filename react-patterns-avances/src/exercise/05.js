// Props Control
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react';
import warning from 'warning';

import CheckBox from '../checkbox';

const executeAll = (...functions) =>
	(...args) => functions.forEach(func => func?.(...args));

const actionTypes = {
	tick: 'tick',
	reset: 'reset',
};

const defaultCheckboxReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.tick: return { checked: !state.checked };
		case actionTypes.reset: return action.initialState;
		default: throw new Error(`Action non supporté: ${action.type}`);
	};
};

const useOnChangeWarning = (onChange, checkedIsControlled) => {
	const hasOnChange = Boolean(onChange);

	React.useEffect(() => {
		warning(!(!hasOnChange && checkedIsControlled), "onChange n'est pas definis !");
	}, [hasOnChange, checkedIsControlled]);
};

const useControlledCheckboxWarning = controlledChecked => {
	const isControlled = controlledChecked != null;

	const { current: previousIsControlledMode } = React.useRef(isControlled);

	React.useEffect(() => {
		warning(
			!(!previousIsControlledMode && isControlled),
			"useCheckBox() passe d'un mode non controle a controle !"
		);

		warning(
			!(previousIsControlledMode && !isControlled),
			"useCheckBox() passe d'un mode controle a non controle !"
		);
	}, [controlledChecked, previousIsControlledMode, isControlled]);
};

const useCheckBox = ({
	initialChecked = Boolean(false),
	reducer = defaultCheckboxReducer,
	onChange,
	checked: controlledChecked
} = {}) => {
	const initialState = { checked: initialChecked };

	const [state, dispatch] = React.useReducer(reducer, initialState);

	const checkedIsControlled = controlledChecked != null;

	const checked = checkedIsControlled ? controlledChecked : state.checked;

	if (process.env.NODE_ENV !== 'production') {
	    // eslint-disable-next-line react-hooks/rules-of-hooks
		useOnChangeWarning(onChange, checkedIsControlled);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useControlledCheckboxWarning(controlledChecked);
	}


	const dispatchWithOnChange = action => {
		if (!checkedIsControlled) dispatch(action);

		onChange?.(reducer({ ...state, checked }, action), action);
	};

	const tick = () => dispatchWithOnChange({ type: actionTypes.tick });
	const reset = () => dispatchWithOnChange({ type: actionTypes.reset, initialState });

	const getCheckboxerProps = ({ onClick, ...props } = {}) => {
		return {
			'aria-checked': checked,
			onChange: executeAll(onClick, tick),
			...props
		};
	};

	const getResetterProps = ({ onClick, ...props } = {}) => {
		return {
			onClick: executeAll(onClick, reset),
			...props
		};
	};

	return {
		checked,
		reset,
		tick,
		getCheckboxerProps,
		getResetterProps
	};
};

const SuperCheckBox = ({ checked: controlledChecked, onChange }) => {
	const {checked, getCheckboxerProps} = useCheckBox({
		checked: controlledChecked,
		onChange
	});

	const props = getCheckboxerProps({ checked });

	return <CheckBox {...props} />;
};

const App = () => {
	const [allchecked, setAllchecked] = React.useState(Boolean(false));
	const [timesChanged, setTimesChanged] = React.useState(0);
	const changedTooMuch = timesChanged >= 4;

	const handlecheckboxChange = (state, action) => {
		if (action.type === actionTypes.tick && changedTooMuch)
			return;

		setAllchecked(state.checked);
		setTimesChanged(timesChanged => timesChanged + 1);
	};

	const handleResetClick = () => {
		setAllchecked(Boolean(false));
		setTimesChanged(0);
	};

	return <div>
			<SuperCheckBox checked={allchecked} onChange={handlecheckboxChange} />
			<SuperCheckBox checked={allchecked} onChange={handlecheckboxChange} />
			<SuperCheckBox checked={allchecked} onChange={handlecheckboxChange} />

			{changedTooMuch ? (
				<div data-testid="notice">
					Tu as changer trop de fois !
					<br />
				</div>
			) : timesChanged > 0 ? (
				<div data-testid="change-count">
					Nombre de changement: {timesChanged}
				</div>
			) : null}

			<button onClick={handleResetClick}>Reset</button>

			<hr />

			<div>
				<div>Checkbox non controllé:</div>
				<SuperCheckBox
					onChange={(...args) =>
						console.info('Uncontrolled CheckBox onChange', ...args)
					}
				/>
			</div>
	</div>;
};

export default App;
