// Ajouter du Style CSS
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'

const buttonRead = <button>Lire</button>
const buttonCreate = <button>Créer</button>
const buttonUpdate = <button>Modifier</button>
const buttonDelete = <button>Supprimer</button>

function ButtonActions({isAdmin}) {
  if (isAdmin) {
    return (
      <div>
        {buttonRead}
        {buttonCreate}
        {buttonUpdate}
        {buttonDelete}
      </div>
    )
  } else {
    return <div>{buttonRead}</div>
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
