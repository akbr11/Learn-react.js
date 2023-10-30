import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Apps from "./learn1/Apps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Apps />
  </React.StrictMode>
);
