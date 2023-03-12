import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <HashRouter basename="/rick-and-morty">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
