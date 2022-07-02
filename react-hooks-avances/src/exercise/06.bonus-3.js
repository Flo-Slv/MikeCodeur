// useContexte
// 🚀 Gérer le cache avec le contexte
// http://localhost:3000/alone/exercise/06.bonus-3.js

/* eslint-disable no-unused-vars */
import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import {
	fetchMarvel,
	fetchMarvelById,
	fetchMarvelsList,
	MarvelSearchForm,
	ErrorDisplay,
	MarvelPersoView,
} from '../marvel';

import '../02-styles.css';

const MarvelCacheContext = React.createContext();

const marvelCacheReducer = (state, action) => {
	const ttl = 1_000 * 60 * 60;
	const expiration = Date.now() + ttl;

	switch (action.type) {
		case 'ADD_MARVEL':
			return {
				...state,
				[action.marvelName]: { data: action.marvelData, expiration }
			};
		case 'ADD_MARVEL_LIST':
			return {
				...state,
				[`${action.marvelName}-list`]: { data: action.marvelData, expiration }
			};
		default:
			throw new Error(`Action impossible: ${action.type}`);
	};
};

const MarvelCacheProvider = props => {
	const [cache, dispatch] = React.useReducer(marvelCacheReducer, {});

	return <MarvelCacheContext.Provider value={[cache, dispatch]} {...props} />;
};

const useMarvelCache = () => {
	const context = React.useContext(MarvelCacheContext);

	if (!context) throw new Error('bad implementation');

	return context;
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'fetching':
			return {status: 'fetching', data: null, error: null};
		case 'done':
			return {status: 'done', data: action.payload, error: null};
		case 'fail':
			return {status: 'fail', data: null, error: action.error};
		default:
			throw new Error('Action non supporté');
	};
};

const useFetchData = () => {
	const [state, dispatch] = React.useReducer(reducer, {
		data: null,
		error: null,
		status: 'idle'
	});

	const {data, error, status} = state;

	const execute = React.useCallback(promise => {
		dispatch({type: 'fetching'});

		promise
			.then(marvel => dispatch({type: 'done', payload: marvel}))
			.catch(error => dispatch({type: 'fail', error}));
	}, []);

	const setData = React.useCallback(data => {
		dispatch({ type: 'done', payload: data });
	}, [dispatch]);

	return {data, error, status, execute, setData};
};

const useFindMarvelList = marvelName => {
	const [cache, dispatch] = useMarvelCache();

	const { data, error, status, execute, setData } = useFetchData();

	React.useEffect(() => {
		if (!marvelName) return;

		if (cache[`${marvelName}-list`]?.data && Date.now() < cache[`${marvelName}-list`].expiration)
			setData(cache[`${marvelName}-list`].data);
		else execute(fetchMarvelsList(marvelName).then(marvelData => {
			dispatch({ type: 'ADD_MARVEL_LIST', marvelName, marvelData });

			return marvelData;
		}));

	}, [marvelName, execute, setData, cache, dispatch]);

	return {data, error, status};
};

const useFindMarvelByName = marvelName => {
	const [cache, dispatch] = useMarvelCache();

	const { data, error, status, execute, setData } = useFetchData();

	React.useEffect(() => {
		if (!marvelName) return;
		else if (cache[marvelName]?.data && Date.now() < cache[marvelName].expiration)
			setData(cache[marvelName].data);
		else execute(fetchMarvel(marvelName).then(marvelData => {
			dispatch({ type: 'ADD_MARVEL', marvelName, marvelData });

			return marvelData;
		}));

	}, [marvelName, execute, cache, setData, dispatch]);

	return {data, error, status};
};

const Marvel = ({ marvelName }) => {
	const state = useFindMarvelByName(marvelName, fetchMarvelById)

	const {data: marvel, error, status} = state;

	if (status === 'fail') throw error;

	else if (status === 'idle')
		return 'enter un nom de Marvel';
	 else if (status === 'fetching')
		return 'chargement en cours ...';
	else if (status === 'done')
		return <MarvelPersoView marvel={marvel} />;
};

const MarvelList = ({ marvelName }) => {
	const state = useFindMarvelList(marvelName, fetchMarvelById);

	const {data: marvels, error, status} = state;

	if (status === 'fail') throw error;

	else if (status === 'idle')
		return 'enter un nom de Marvel';
	else if (status === 'fetching')
		return 'chargement en cours ...';
	else if (status === 'done')
		return <>
			{marvels.map(marvel => {
				return <div key={marvel.id}>
					<hr style={{background: 'grey'}} />
					<MarvelPersoView marvel={marvel} />
				</div>;
			})}
		</>;
};

const App = () => {
	const [marvelName, setMarvelName] = React.useState('');
	const [searchList, setSearchList] = React.useState('');

	const handleSearch = name => setMarvelName(name);

	return <div className="marvel-app">
		<label>
			<input
				type="checkbox"
				checked={searchList}
				onChange={e => setSearchList(e.target.checked)}
			/>{' '}
			Chercher une liste ?
		</label>

		<MarvelSearchForm marvelName={marvelName} onSearch={handleSearch} />

		<MarvelCacheProvider>
			<div className="marvel-detail">
				<ErrorBoundary key={marvelName} FallbackComponent={ErrorDisplay}>
					{searchList ? (
						<MarvelList marvelName={marvelName} />
					) : (
						<Marvel marvelName={marvelName} />
					)}
				</ErrorBoundary>
			</div>
		</MarvelCacheProvider>
	</div>;
};

export default App;
