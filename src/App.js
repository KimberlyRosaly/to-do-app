import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Nexus from "./containers/Nexus.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/heart" element={<Nexus />} />
      </Routes>
    </>
  );
}
