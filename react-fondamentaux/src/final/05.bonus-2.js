// Ajouter du Style CSS
// 🚀 Customisation avec size et color
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'
import '../05-styles.css'

function Container({className = '', children, style, color, size}) {
  const sizeClass = size ? `container--${size}` : ''
  return (
    <div
      className={`container ${sizeClass} ${className}`}
      style={{border: '1px solid', color, ...style}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Container
        size="small"
        color="white"
        style={{backgroundColor: 'darkslateblue'}}
      >
        Petit conteneur dark texte blanc
      </Container>
      <Container size="medium" color="black" style={{backgroundColor: 'pink'}}>
        Moyen conteneur rose texte noire
      </Container>
      <Container
        size="large"
        color="black"
        style={{backgroundColor: 'lightgreen'}}
      >
        Grand conteneur vert rose texte noire
      </Container>
      <Container className="container--custom">Custom</Container>
    </div>
  )
}

export default App
