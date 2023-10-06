import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import "./index.css";
import App from "./myApp";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
