// Rendu de tableaux
// 🚀 Keys dynamiques
// http://localhost:3000/alone/final/06.bonus-1.js

import * as React from 'react'

const skills = ['HTML', 'CSS', 'JS', 'REACT', 'ANGULAR']

function MesSkills() {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  )
}

function App() {
  return <MesSkills />
}

export default App
