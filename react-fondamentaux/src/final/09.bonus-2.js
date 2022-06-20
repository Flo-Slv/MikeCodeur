// Formulaires
// 🚀 Composant controllé
// http://localhost:3000/alone/final/05.js

import * as React from 'react'

function LoginForm() {
  const [email, setEmail] = React.useState()

  const handleChange = event => {
    setEmail(event.target.value)
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
      <input type="submit" value="Connexion" />
    </form>
  )
}
function App() {
  return <LoginForm />
}

export default App
