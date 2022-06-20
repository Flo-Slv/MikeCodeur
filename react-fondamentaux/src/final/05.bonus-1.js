// Ajouter du Style CSS
// 🚀 Composant React
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'
import '../05-styles.css'

function Container({className = '', children, style}) {
  return (
    <div
      className={`container ${className}`}
      style={{border: '1px solid', ...style}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Container
        className="container--small"
        style={{color: 'white', backgroundColor: 'darkslateblue'}}
      >
        Petit conteneur dark texte blanc
      </Container>
      <Container
        className="container--medium"
        style={{color: 'black', backgroundColor: 'pink'}}
      >
        Moyen conteneur rose texte noire
      </Container>
      <Container
        className="container--large"
        style={{color: 'black', backgroundColor: 'lightgreen'}}
      >
        Grand conteneur vert rose texte noire
      </Container>
    </div>
  )
}

export default App
