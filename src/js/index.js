//Import React
import React from "react";
import ReactDOM from "react-dom";

//Import components
import Home from "./component/Home.jsx";

//Import Styles
import "bootstrap";
import "../styles/index.scss";

//Render app
ReactDOM.render(<Home />, document.querySelector("#app"));
