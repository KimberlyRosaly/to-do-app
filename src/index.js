import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* - - - - - - - R E A C T   R O U T E R*/}
    <Router>  {/* AKA 'BROWSERROUTER' | wrapper for entire application */}
      <App />
    </Router>
    {/* - - - - - - - R E A C T   R O U T E R*/}

  </StrictMode>
);
// 