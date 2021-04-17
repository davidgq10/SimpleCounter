import React from "react";
import { Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	let MyNumber = props.counter;
	let MyNumberString = MyNumber.toString();
	let MyNumberArray = Array.from(MyNumberString);
	let MyNumberLength = MyNumberArray.length;

	console.log(
		"MyNumber: " + MyNumber,
		"MyNumberString: " + MyNumberString,
		"MyNumberArray: " + MyNumberArray,
		"MyNumberLength: " + MyNumberLength,
		"oneNumber: " + oneNumber,
		"twoNumber: " + twoNumber
		// "threeNumber: " + threeNumber,
		// // "fourNumber: " + fourNumber,
		// "fiveNumber: " + fiveNumber,
		// "sixNumber: " + sixNumber
	);
	console.log(MyNumberArray);

	let oneNumber = MyNumberArray[0];
	let twoNumber = () => {
		return () => {
			if (MyNumberLength > 1) {
				return MyNumberArray[1];
			} else {
				return 0;
			}
		};
	};
	// let threeNumber = MyNumberLength => {
	//     return if (MyNumberLength > 2) {
	//         return MyNumberArray[2];
	//     } else {
	//         return 0;
	//     }
	// };
	// let fourNumber = () => {
	//     return if (MyNumberLength > 3) {
	//         return MyNumberArray[3];
	//     } else {
	//         return 0;
	//     }
	// };
	// let fiveNumber = () => {
	//     return if (MyNumberLength > 4) {
	//         return MyNumberArray[4];
	//     } else {
	//         return 0;
	//     }
	// };
	// let sixNumber = () => {
	//     return if (MyNumberLength > 5) {
	//         return MyNumberArray[5];
	//     } else {
	//         return 0;
	//     }
	// };
	let a = 1;
	return (
		<div>
			<Navbar className="bg-dark py-5">
				<Container className="justify-content-between">
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">
							<i className="bi bi-alarm"></i>
						</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">{a}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">{a}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">{a}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">{a}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">{a}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">{a}</h1>
					</div>
				</Container>
			</Navbar>
		</div>
	);
}

Home.propTypes = {
	counter: PropTypes.number
};
