import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/action";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const loginHandler = () => {

  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(signup(email, password))
    // try {


    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form className="bg-green-900" onSubmit={handleSubmit}>
      <label>
        Email/Username:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUpForm;
