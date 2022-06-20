// Ajouter du Style CSS
// 🚀 Masquer un composant et ternaire
// http://localhost:3000/alone/final/06.bonus-1.js

import * as React from 'react'

const buttonRead = <button>Lire</button>
const buttonCreate = <button>Créer</button>
const buttonUpdate = <button>Modifier</button>
const buttonDelete = <button>Supprimer</button>

function AdminActions() {
  return (
    <div>
      {buttonRead}
      {buttonCreate}
      {buttonUpdate}
      {buttonDelete}
    </div>
  )
}

function GuestActions() {
  return <div>{buttonRead}</div>
}

function ButtonActions({isAdmin, hidden}) {
  if (hidden) {
    return null
  }
  return isAdmin ? <AdminActions /> : <GuestActions />
}

function App() {
  return (
    <div>
      <ButtonActions isAdmin={true} hidden={false} />
    </div>
  )
}

export default App
