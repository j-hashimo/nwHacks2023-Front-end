import React, { useState, useEffect } from 'react'
import "./LoginForm.css"
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/useSlice";

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, isLoading, user, isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({email, password}))

  }

  const checkFun = () => {
    console.log(user, isAuthenticated)
  }

  const logoutFun = () => {
    dispatch(logout())
  }


  return (
    <>
      <button onClick={checkFun}>Click</button>
      <button onClick={logoutFun}>Logout</button>
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
    </>
  )
}

export default LoginForm