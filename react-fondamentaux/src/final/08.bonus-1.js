// Rendu de tableaux
// 🚀 Essaie sur des props ⚠️antipattern⚠️
// http://localhost:3000/alone/final/05.js

import * as React from 'react'

const skills = [
  {id: 'e313', value: 'HTML'},
  {id: 'f980', value: 'CSS'},
  {id: '11eb', value: 'JS'},
  {id: '9a03', value: 'REACT'},
  {id: '65d4', value: 'ANGULAR'},
]

function MesSkills(props) {
  const addSkillPython = () => {
    props.skills.push({id: `${Math.random()}`, value: 'Python'})
    console.log('skills', props.skills)
  }
  return (
    <>
      <ul>
        {props.skills.map(skill => (
          <li key={skill.id}>{skill.value}</li>
        ))}
      </ul>
      <button onClick={addSkillPython}>Ajouter Skill</button>
    </>
  )
}

function App() {
  return <MesSkills skills={skills} />
}

export default App
