import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./containers/Home.js";
import Nexus from "./containers/Nexus.js";
import LogIn from "./containers/LogIn.js";
import SignUp from "./containers/SignUp.js";
import About from "./containers/About.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Nexus />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
