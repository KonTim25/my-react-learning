/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

import { createRoot } from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
import "./global.css";


createRoot(document.getElementById("root") as HTMLElement).render(<App />);