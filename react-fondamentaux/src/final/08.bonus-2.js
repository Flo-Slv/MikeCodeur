// Rendu de tableaux
// 🚀 Utilisation de State
// http://localhost:3000/alone/final/05.js

import * as React from 'react'

const initialSkills = [
  {id: 'e313', value: 'HTML'},
  {id: 'f980', value: 'CSS'},
  {id: '11eb', value: 'JS'},
  {id: '9a03', value: 'REACT'},
  {id: '65d4', value: 'ANGULAR'},
]

function MesSkills() {
  const [skills, setSkills] = React.useState(initialSkills)
  const addSkillPython = () => {
    setSkills([...skills, {id: `${Math.random()}`, value: 'Python'}])
  }
  return (
    <>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.value}</li>
        ))}
      </ul>
      <button onClick={addSkillPython}>Ajouter Skill</button>
    </>
  )
}

function App() {
  return <MesSkills />
}

export default App
