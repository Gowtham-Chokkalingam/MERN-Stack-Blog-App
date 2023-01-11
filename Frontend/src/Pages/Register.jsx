import React, { useState } from "react";
import { json } from "react-router-dom";
import { API_URL } from "../API/API";

const Register = () => {
  const API = API_URL;
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log("password:", password);

  const registerHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("res:", res);

    if (res.status === 200) {
      alert("Registration  Successfull");
    } else {
      alert("Registration Failed");
    }
  };

  return (
    <form className="register" onSubmit={registerHandler}>
      <h1> Register</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)}></input>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button type="submit"> Register</button>
    </form>
  );
};

export default Register;
