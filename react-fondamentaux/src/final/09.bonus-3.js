// Formulaires
// 🚀 Validation et erreur
// http://localhost:3000/alone/final/05.js

import * as React from 'react'

function LoginForm() {
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState()

  const handleChange = event => {
    setEmail(event.target.value)
    setError(event.target.value.includes('@') ? null : "L'email est non valide")
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Bonjour ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresse email :
        <input type="text" name="emailInput" onChange={handleChange} />
      </label>
      <div style={{color: 'red'}}>{error}</div>
      <input type="submit" value="Connexion" />
    </form>
  )
}
function App() {
  return <LoginForm />
}

export default App
