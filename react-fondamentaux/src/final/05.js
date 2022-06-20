// Ajouter du Style CSS
// http://localhost:3000/alone/final/05.js

import * as React from 'react'
import '../05-styles.css'

const smallContainer = (
  <div
    className="container container--small"
    style={{color: 'white', backgroundColor: 'darkslateblue'}}
  >
    Petit conteneur dark texte blanc
  </div>
)
const mediumContainer = (
  <div
    className="container container--medium"
    style={{color: 'black', backgroundColor: 'pink'}}
  >
    Moyen conteneur rose texte noire
  </div>
)
const largeContainer = (
  <div
    className="container container--large"
    style={{color: 'black', backgroundColor: 'lightgreen'}}
  >
    Grand conteneur vert rose texte noire
  </div>
)

function App() {
  return (
    <div>
      {smallContainer}
      {mediumContainer}
      {largeContainer}
    </div>
  )
}

export default App
