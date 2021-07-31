import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/body.css";
import "./css/forAdv.css";
import { Store } from "./state/Store";
ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
