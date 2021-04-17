import React from "react";
import { Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	//Se recibe el número de la cuenta y se conviente a un array
	let MyNumber = props.counter;
	let MyNumberString = MyNumber.toString();
	let MyNumberArray = Array.from(MyNumberString);
	let MyNumberLength = MyNumberArray.length;

	//Se declaran las variables
	let oneNumber = MyNumberArray[MyNumberLength - 1];
	let twoNumber = 0;
	let threeNumber = 0;
	let fourNumber = 0;
	let fiveNumber = 0;
	let sixNumber = 0;

	// según el length del array se le asigna el valor a cada uno de los números
	if (MyNumberLength > 1) {
		twoNumber = MyNumberArray[MyNumberLength - 2];
	}
	if (MyNumberLength > 2) {
		threeNumber = MyNumberArray[MyNumberLength - 3];
	}
	if (MyNumberLength > 3) {
		fourNumber = MyNumberArray[MyNumberLength - 4];
	}
	if (MyNumberLength > 4) {
		fiveNumber = MyNumberArray[MyNumberLength - 5];
	}
	if (MyNumberLength > 5) {
		sixNumber = MyNumberArray[MyNumberLength - 6];
	}

	//se retorna el elemento
	return (
		<div>
			<Navbar className="bg-dark py-5">
				<Container className="justify-content-between">
					<div className="col-2 py-3 text-center">
						<h1 className="display-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="150"
								height="150"
								fill="currentColor"
								className="bi bi-clock"
								viewBox="0 0 16 16">
								style={}
								<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
								<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
							</svg>
						</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center fw-bolder border border-light rounded">
						<h1 className="display-1">{sixNumber}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center fw-bolder border border-light rounded">
						<h1 className="display-1">{fiveNumber}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center fw-bolder border border-light rounded">
						<h1 className="display-1">{fourNumber}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center fw-bolder border border-light rounded">
						<h1 className="display-1">{threeNumber}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center fw-bolder border border-light rounded">
						<h1 className="display-1">{twoNumber}</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center fw-bolder border border-light rounded">
						<h1 className="display-1">{oneNumber}</h1>
					</div>
				</Container>
			</Navbar>
		</div>
	);
}

Home.propTypes = {
	counter: PropTypes.number
};
