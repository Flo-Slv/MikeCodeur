// Ajouter du Style CSS
// http://localhost:3000/alone/exercise/06.js

import * as React from 'react'

// 🐶 Créé un composant ButtonActions
// 🐶 Conditionne le rendu en fonction d'un prop 'isAdmin'
// Si isAdmin est false alors on affichera que le bouton 'Lire'
// 🤖 ButtonActions({isAdmin})

const buttonRead = <button>Lire</button>
const buttonCreate = <button>Créer</button>
const buttonUpdate = <button>Modifier</button>
const buttonDelete = <button>Supprimer</button>

const AdminActions = () => <>
	{buttonCreate}
	{buttonUpdate}
	{buttonDelete}
</>;

const GuestActions = () => <>
	{buttonRead}
</>;

const ButtonActions = ({ isAdmin, hidden }) => {
	// if (isAdmin) return <AdminActions />
	// else return <GuestActions />;
	if (hidden) return null;
	return isAdmin ? <AdminActions /> : <GuestActions />;
}

function App() {
  return (
    <div>
	  <ButtonActions isAdmin={Boolean(true)} hidden={Boolean(false)}/>
    </div>
  )
}

export default App
