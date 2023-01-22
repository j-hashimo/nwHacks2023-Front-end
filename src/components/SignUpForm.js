import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/action";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { error, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const loginHandler = () => {};

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(signup(email, password));
    // try {

    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form className="bg-white p-6 rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-medium mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Email/Username:
          <input
            className="border border-gray-400 p-2 rounded-md w-full"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      <br />

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Password:
          <input
            className="border border-gray-400 p-2 rounded-md w-full"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <br />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default SignUpForm;
