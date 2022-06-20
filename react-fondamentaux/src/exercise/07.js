// Rendu de tableaux
// http://localhost:3000/alone/exercise/07.js

import * as React from 'react'

// 🐶 Le code suivant génère un warning :  Warning: Each child in a list should have a unique "key" prop

// const skills = ["HTML", "CSS", "JS", "REACT", "ANGULAR"];
const skills = [
	{ id: '01', value: "HTML"},
	{ id: '02', value: "CSS"},
	{ id: '03', value: "JS"},
	{ id: '04', value: "REACT"},
	{ id: '05', value: "ANGULAR"}
];

// 🐶 Corrige ce code avec des keys uniques sur les elements <li>
// skills.push(<li key="html">HTML</li>)
// skills.push(<li key="css">CSS</li>)
// skills.push(<li key="js">JS</li>)
// skills.push(<li key="react">REACT</li>)
// skills.push(<li key="angular">ANGULAR</li>)

function MesSkills() {
  return <ul>{skills.map(skill => {
	  return <li key={skill.id}>{skill.value}</li>
  })}</ul>
}

function App() {
  return <MesSkills />
}

export default App
