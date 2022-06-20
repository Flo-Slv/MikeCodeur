// Rendu de tableaux
// 🚀 Composition et condition
// http://localhost:3000/alone/final/06.bonus-1.js

import * as React from 'react'

const skills = [
  {id: 'e313', value: 'HTML'},
  {id: 'f980', value: 'CSS'},
  {id: '11eb', value: 'JS'},
  {id: '9a03', value: 'REACT'},
  {id: '65d4', value: 'ANGULAR'},
]
function MesSkills() {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.id}>{skill.value}</li>
      ))}
    </ul>
  )
}

function App() {
  return <MesSkills />
}

export default App
