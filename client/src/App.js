import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Edit from "./components/Edit.js";
import Detail from "./components/Detail.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/edit/:id" Component={Edit} />
        <Route path="/view/:id" Component={Detail} />
      </Routes>
    </>
  );
}

export default App;
