// Props Functions
// http://localhost:3000/alone/exercise/03.js
/* eslint-disable no-unused-vars */
import * as React from 'react';
import fetchAPIMock, {apiSubscribe, apiUnSubscribe} from '../data';

// 🐶 Tu vas devoir supprimer les appels  'apiSubscribe()' 'apiUnSubscribe()' 'fetchAPIMock()'
// des composants 'TodoList' et 'NotesList' et les faire remonter dans le HOC

const TodoList = ({ data }) => {
	//⚠️ Dans la réalité il faudrait utiliser un state et useEffect. Ici fetchAPIMock() est synchrone
	// pour simplifier la démonstration
	// apiSubscribe();
	// const todos = fetchAPIMock().todos;
	// apiUnSubscribe();

	return <div>
		{data.map(todo => (
			<div key={todo.id}>{todo.name}</div>
		))}
		</div>;
};

const NotesList = ({ data }) => {
	// apiSubscribe();
	// const notes = fetchAPIMock().notes;
	// apiUnSubscribe();

	return <div>
		{data.map(note => (
			<div key={note.id}>{note.name}</div>
		))}
		</div>;
};

// 🐶 Ici un HOC 'withSubscription' avec 2 paramètres 'WrappedComponent' et 'selectData'
const withSubscription = (WrappedComponent, selectData) => {
	return props => {
		// 🐶 Implemente ici l'appel à la souscription d'API
		// 🤖  apiSubscribe()
		apiSubscribe();

		// 🐶 Implemente ici l'appel qui permettra de charger les données et les sotcker dans `data`
		// utilise la 'dataSource' 'fetchAPIMock' et 'selectData'
		let data = selectData(fetchAPIMock);

		// 🐶 Implemente ici l'appel à la désouscription  d'API
		// 🤖  apiUnSubscribe()
		apiUnSubscribe();

		// 🐶 Passe les data en prop de WrappedComponent
		// N'oublie pas de transmettre tous les autres props : {...props}
		return <WrappedComponent {...props} data={data} />
	}
};


// 🐶 Utilise TodoListWithSubscription et NotesWithSubscription dans le render de <App />
const TodoListWithSubscription = withSubscription(
	TodoList,
	DataSource => DataSource().todos
);

const NotesWithSubscription = withSubscription(
	NotesList,
	DataSource => DataSource().notes
);

const App = () => {
	return <>
		<TodoListWithSubscription />
		<NotesWithSubscription />
	</>;
};
// const App = () => {
// 	return (
// 		<>
// 		<TodoList />
// 		<NotesList />
// 		</>
// 	)
// };

export default App;
