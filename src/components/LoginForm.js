import React from 'react'
import "./LoginForm.css"

function LoginForm() {
  return (
    <div className='LoginForm'>
        <h1 className='LoginFormPrompt'> Sign in </h1>
        <h2 className='LoginFormText'> Email </h2>
        <input type="text" className='UserEmail' />
        <h2 className='LoginFormText'> Password </h2>
        <input type="text" className='UserPassword' />
        <label htmlFor='LoginButton' className='LoginFormText'> Press the button below to log in </label>
        <input type='submit' className='LoginButton' />
    </div>
  )
}

export default LoginForm