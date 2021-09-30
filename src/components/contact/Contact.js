import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../section-title/SectionTitle";

export const Contact = () => {
	return (
		<div id="contact" className="py-3">

			<SectionTitle title="Contact Me"/>
			<Container>
				<Row className='mt-5'>
					<Col className="d-flex fs-1 justify-content-between">
						
						<a href="https://www.linkedin.com/in/aldamatov/"rel="noreferrer" target="_blank">
							<i class="fab fa-linkedin"></i>
						</a>
						<a href="https://github.com/aldamatov"  rel="noreferrer" target="_blank">
							<i class="fab fa-github-alt"></i>
						</a>
						<a href="https://www.facebook.com/profile.php?id=100001182203965"  rel="noreferrer" target="_blank">
							<i class="fab fa-facebook-square"></i>
						</a>
						
						<a href="https://www.instagram.com/erjan17/"  rel="noreferrer" target="_blank">
							<i class="fab fa-instagram"></i>
						</a>
						<a href="mailto:aldamatov@gmail.com"  rel="noreferrer" target="_blank">
						<i className="fa fa-envelope-open-text"></i>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
