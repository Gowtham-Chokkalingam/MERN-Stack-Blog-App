import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../API/API";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const API = API_URL;
  const { setUserInfo, userInfo } = useContext(UserContext);

  const username = userInfo?.username;
  console.log('username:', username)
  useEffect(() => {
    fetch(`${API}/profile`, {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo.username);
      });
    });
  }, []);

  const handleLogout = async () => {
    await fetch(`${API}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <Link onClick={handleLogout}>Logout</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
