import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.scss";
import Terminal from "./js/components/Terminal.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Terminal />
  </React.StrictMode>
);
