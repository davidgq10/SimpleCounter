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
let mcounter = 0;
setInterval(function() {
	mcounter++,
		ReactDOM.render(
			<Home counter={mcounter} />,
			document.querySelector("#app")
		);
}, 1000);
