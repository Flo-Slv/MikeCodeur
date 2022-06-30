// Hook Perso
// http://localhost:3000/alone/exercise/02.js

/* eslint-disable no-unused-vars */
import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {
	fetchMarvel,
	fetchMarvelsList,
	MarvelPersoView,
	MarvelSearchForm,
	ErrorDisplay,
} from '../marvel';

import '../02-styles.css';

// const reducer = (state, action) => ({...state, ...action});
// const reducer = (state, action) => {
const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCHING':
			return { data: null, error: null, status: 'fetching' };
		case 'DONE':
			return { data: action.payload, error: null, status: 'done' };
		case 'FAIL':
			return { data: null, error: action.error, status: 'fail' };
		default:
			return { data: null, error: null, status: 'idle' };
	}
};

// const useMarvelExist = marvelName => {
// const useFindMarvelByName = marvelName => {
const useFetchData = (search, fetch) => {
	// const [exist, setExist] = React.useState(Boolean(false));
	// const [marvel, setMarvel] = React.useState(null);
	// const [error, setError] = React.useState(null);
	// const [state, dispatch] = React.useReducer(reducer, {
	// 	marvel: null,
	// 	error: null,
	// 	status: 'idle'
	// });
	const [state, dispatch] = React.useReducer(reducer, {
		marvel: null,
		error: null,
		status: 'idle'
	});

	React.useEffect(() => {
		// if (!marvelName) return;
		if (!search) return;

		// setMarvel(null);
		// setError(null);
		// dispatch({ error: null });
		// dispatch({ marvel: null });
		dispatch({ type: 'FETCHING '});

		// fetchMarvel(marvelName)
		//   .then(() => setExist(Boolean(true)))
		//   .catch(() => setExist(Boolean(false)));

		// fetchMarvel(marvelName)
		// 	.then(res => setMarvel(res))
		// 	.catch(err => setError(err));

		// fetchMarvel(marvelName)
		// 	.then(res => dispatch({ marvel: res }))
		// 	.catch(err => dispatch({ error: err }));

		// fetchMarvel(marvelName)
		fetch(search)
			.then(res => dispatch({ type: 'DONE', payload: res }))
			.catch(err => dispatch({ type: 'FAIL', error: err }));

	// }, [marvelName]);
	}, [search, fetch]);

	// return exist;
	// return [marvel, error];
	// return [state.marvel, state.error, state.status];
	return [state.data, state.error, state.status];
};

const useFindMarvelsList = marvelName => {
	return useFetchData(marvelName, fetchMarvelsList);
};

const useFindMarvelByName = marvelName => {
	return useFetchData(marvelName, fetchMarvel);
};

const Marvel = ({ marvelName }) => {
	// const marvelExist = Boolean(false);
	// const marvelExist = useMarvelExist(marvelName);
	// const [marvel, error, status] = useFindMarvelByName(marvelName);
	const [data, error, status] = useFindMarvelByName(marvelName);

	if (status === 'fail') throw error;
	else if (status === 'idle')
		return 'Entrer un nom de Marvel';
	else if (status === 'fetching')
		return 'Chargement en cours ...';
	else if (status === 'done')
		return <MarvelPersoView marvel={data} />;
		// return <MarvelPersoView marvel={marvel} />;

	// if (error) throw error;

	// return <div> {marvel ? `Le marvel existe ${marvel.name}` : `Le marvel n'existe pas`}</div>;
	// return <div>
	// 	{marvel ? <MarvelPersoView marvel={marvel} /> : `Le marvel n'existe pas`}
	// </div>;
};

const MarvelList = ({ marvelName }) => {
	const [data, error, status] = useFindMarvelsList(marvelName);

	// if (status === 'fail') throw error;
	// else if (status === 'idle')
	// 	return 'Entrer un nom de Marvel';
	// else if (status === 'fetching')
	// 	return 'Chargement en cours ...';
	// else if (status === 'done')
	// 	return <MarvelPersoView marvel={data} />;

	if (status === 'fail') throw error;

	else if (status === 'idle')
		return 'Entrer un nom de Marvel';
	else if (status === 'fetching')
		return 'Chargement en cours ...';
	else if (status === 'done')
		return <>
			{data.map(marvel => {
				return (
					<div key={marvel.id}>
					<hr style={{background: 'grey'}} />
					<MarvelPersoView marvel={marvel} />
					</div>
				)
			})}
		</>;
};

const App = () => {
	const [marvelName, setMarvelName] = React.useState('');
	const [searchList, setSearchList] = React.useState(Boolean(false));

	const handleSearch = name => setMarvelName(name);

	return <div className="marvel-app">
		<label>Search list </label>
		<input type="checkbox" checked={searchList} onChange={() => setSearchList(!searchList)} />

		<MarvelSearchForm marvelName={marvelName} onSearch={handleSearch} />

		<div className="marvel-detail">
			<ErrorBoundary key={marvelName} FallbackComponent={ErrorDisplay}>
				{searchList ? (
					<MarvelList marvelName={marvelName} />
				) : (
					<Marvel marvelName={marvelName} />
				)}
			</ErrorBoundary>
		</div>
	</div>;
};

export default App;
