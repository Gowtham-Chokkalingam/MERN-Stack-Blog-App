import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { API_URL } from "../API/API";
import { UserContext } from "../Context/UserContext";

const LoginPage = () => {
  const API = API_URL;
  const { setUserInfo, userInfo } = useContext(UserContext);
  console.log('userInfo')

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    console.log("response:", response);
    if (response.ok) {
      response.json().then((userInfo) => {
        console.log('userInfo:', userInfo)
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials");
    }
  };

  if (redirect) {
    return <Navigate to={"/"}></Navigate>;
  }
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
