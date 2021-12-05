import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./component/ToDoList.jsx";
import "bootstrap";
import "../styles/index.scss";

//Render app
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
