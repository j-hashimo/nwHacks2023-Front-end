import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/useSlice";
import { Link } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isLoading, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  const checkFun = () => {
    console.log(user, isAuthenticated);
  };

  const logoutFun = () => {
    dispatch(logout());
  };

  return (
    <>
      <Link to="/">
        <div>
          <button onClick={checkFun}>Click</button>
          <button onClick={logoutFun}>Logout</button>
        </div>
      </Link>
      <form onSubmit={handleSubmit} className="LoginForm">
        <h1 className="LoginFormPrompt"> Sign in </h1>
        <h2 className="LoginFormText"> Email </h2>
        <input
          type="text"
          className="UserEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2 className="LoginFormText"> Password </h2>
        <input
          type="text"
          className="UserPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="LoginButton" className="LoginFormText">
          {" "}
          Press the button below to log in{" "}
        </label>
        <button type="submit" className="LoginButton">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
