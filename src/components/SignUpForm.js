import React, { useState } from "react";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
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
