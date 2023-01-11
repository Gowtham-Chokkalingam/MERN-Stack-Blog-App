import React, { useState } from "react";
import { API_URL } from "../API/API";

const LoginPage = () => {
  const API = API_URL;

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    await fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    }); 
  };

  return (
    <form className="login" onSubmit={loginHandler}>
      <h1> Login</h1>

      <input type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)}></input>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button> Login</button>
    </form>
  );
};

export default LoginPage;
