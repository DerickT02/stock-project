import React, { useState, useEffect } from 'react';
import fire from './fire'

function App(){
const [user, setUser] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')
const [hasAccount, setHasAccount] = useState(false)

const clearInputs = () => {
    setEmail('')
    setPassword('')
}

const clearErrors = () => {
    setEmailError('');
    setPasswordError('')
  }

  


return (
    <div>
    <h1>Hello World</h1>
    </div>
)
}

export default App