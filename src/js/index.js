//Import React
import React from "react";
import ReactDOM from "react-dom";

//Import components
import ToDoList from "./component/ToDoList.jsx";

//Import Styles
import "bootstrap";
import "../styles/index.scss";

//Render app
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
