import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Contact = () => {
	return (
		<div id="contact" className="py-3">
			<Container>
				<Row>
					<Col className="d-flex justify-content-between">
						
						<a href="https://www.linkedin.com/in/aldamatov/"rel="noreferrer" target="_blank">
							<i class="fab fa-linkedin"></i>
						</a>
						<a href="https://www.facebook.com/profile.php?id=100001182203965"  rel="noreferrer" target="_blank">
							<i class="fab fa-facebook-square"></i>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
