import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./containers/Home.js";
import Nexus from "./containers/Nexus.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<Nexus />} />
      </Routes>
    </>
  );
}
