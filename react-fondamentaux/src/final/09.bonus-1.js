// Formulaires
// 🚀 Composant non-controllé
// http://localhost:3000/alone/final/05.js

import * as React from 'react'

function LoginForm() {
  const emailInputRef = React.useRef()
  const handleSubmit = event => {
    event.preventDefault()
    alert(`Bonjour ${emailInputRef.current.value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresse email :
        <input type="text" name="emailInput" ref={emailInputRef} />
      </label>
      <input type="submit" value="Connexion" />
    </form>
  )
}
function App() {
  return <LoginForm />
}

export default App
