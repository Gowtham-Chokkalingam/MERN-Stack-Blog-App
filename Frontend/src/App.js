import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
import { Route, Routes } from "react-router-dom";
import RouteLayOut from "./Components/RouteLayOut";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteLayOut />}>
        <Route index element={<IndexPage />}></Route>

        <Route path={"/login"} element={<LoginPage />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
