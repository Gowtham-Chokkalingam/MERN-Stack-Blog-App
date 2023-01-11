import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const RouteLayOut = () => {
  return (
    <main>
      <Header></Header>
      <Outlet />
    </main>
  );
};

export default RouteLayOut;
