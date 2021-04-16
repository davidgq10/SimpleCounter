import React from "react";
import { Navbar, Container, Row } from "react-bootstrap";

//create your first component
export function Home() {
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
						<h1 className="display-1">8</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">0</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">9</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">6</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">0</h1>
					</div>
					<div className="col-1 bg-secondary py-3 text-center">
						<h1 className="display-1">6</h1>
					</div>
				</Container>
			</Navbar>
		</div>
	);
}
