//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
// ReactDOM.render(<Home />, document.querySelector("#app"));
//render your react application
let counter = 0;
setInterval(function() {
	counter++,
		alert(counter),
		ReactDOM.render(<Home />, document.querySelector("#app"));
}, 3000);
