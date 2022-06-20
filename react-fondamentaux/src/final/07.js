// Rendu de tableaux
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'

const skills = []
skills.push(<li key="1">HTML</li>)
skills.push(<li key="2">CSS</li>)
skills.push(<li key="3">JS</li>)
skills.push(<li key="4">REACT</li>)
skills.push(<li key="5">ANGULAR</li>)

function MesSkills() {
  return <ul>{skills.map(skill => skill)}</ul>
}

function App() {
  return <MesSkills />
}

export default App
