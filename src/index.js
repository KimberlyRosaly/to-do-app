import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// stores current l o c a t i o n  in  browser's address bar, using clean URLs
// navigates using the browser's built-in h i s t o r y stack.
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