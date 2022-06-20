// Ajouter du Style CSS
// 🚀 Composition et condition
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

function ButtonActions({isAdmin}) {
  if (isAdmin) {
    return <AdminActions />
  } else {
    return <GuestActions />
  }
}

function App() {
  return (
    <div>
      <ButtonActions isAdmin={true} />
    </div>
  )
}

export default App
