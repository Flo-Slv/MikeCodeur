// Ajouter du Style CSS
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../05-styles.css'

// 🐶 Met du style sur les 3 conteneurs en te basant sur leur texte.
// 🐶 Nous avons importé le fichier CSS qui contient des classes
// 'container' 'container-small' etc ...

// 🐶 Utilise le prop `className` pour les propriétés générales du conteneur et une
// une specificité. (className aura donc 2 classes CSS)
// 🤖 className='container container-small' par exemple

// 🐶 Utilise ensuite du CSS Inline avec le prop `style` pour gerer le background color
// et la couleur du texte
// 🤖 style:{{color:'white', backgroundColor:'red'}}

const smallContainer = <div className="container container--small" style={{backgroundColor: 'black', color: 'white'}}>Petit conteneur dark texte blanc</div>
const mediumContainer = <div className="container container--medium">Moyen conteneur rose texte noire</div>
const largeContainer = <div className="container container--large">Grand conteneur vert rose texte noire</div>

let Container = ({ color, size, className, style }) => {
	let classSize = size ? `container--${size}` : '';
	return (
		<div className={className, classSize} style={{ ...style, color }}>
			Test floflo
		</div>
	);
};

function App() {
  return (
    <div>
      {smallContainer}
      {mediumContainer}
      {largeContainer}
	  <Container color={'white'} size={'medium'} className={"container"} style={{backgroundColor: 'pink'}} />
    </div>
  )
}

export default App
