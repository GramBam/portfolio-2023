import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Terminal from "./Terminal.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Terminal />
  </React.StrictMode>
);
