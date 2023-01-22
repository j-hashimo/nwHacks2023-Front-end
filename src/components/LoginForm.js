import React, {useState} from 'react'
import "./LoginForm.css"

function LoginForm() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <form onSubmit={handleSubmit} className='LoginForm'>
        <h1 className='LoginFormPrompt'> Sign in </h1>
        <h2 className='LoginFormText'> Email </h2>
        <input type="text" className='UserEmail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <h2 className='LoginFormText'> Password </h2>
        <input type="text" className='UserPassword'
        value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor='LoginButton' className='LoginFormText'> Press the button below to log in </label>
        <input type='submit' className='LoginButton' />
    </form>
  )
}

export default LoginForm