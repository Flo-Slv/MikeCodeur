// Les formulaires
// http://localhost:3000/alone/final/08.js

import * as React from 'react'

function LoginForm() {
  const handleSubmit = event => {
    event.preventDefault()
    alert(`Bonjour ${event.target.elements.emailInput.value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresse email :
        <input type="text" name="emailInput" />
      </label>
      <input type="submit" value="Connexion" />
    </form>
  )
}
function App() {
  return <LoginForm />
}

export default App
