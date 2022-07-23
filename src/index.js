import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/TodoApp";
import "./App.css";
import "react-bootstrap"
// ReactDOM.render(<TodoApp />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);
