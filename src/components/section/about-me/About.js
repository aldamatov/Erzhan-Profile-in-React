import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionTitle } from '../../section-title/SectionTitle'
import myPicture from '../../../assets/img/mypic2.png'

export const About = () => {
    return (
        <div id="about" className="py-5">
            <SectionTitle  title="About Me"/>
            <Container>
                <Row className="mt-5">
                    <Col><img src={myPicture} class="img" alt="Erzhan" /></Col>
                    <Col id="aboutMe"><p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
								quia sunt aliquid. Ab, beatae saepe!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
								quia sunt aliquid. Ab, beatae saepe!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
								quia sunt aliquid. Ab, beatae saepe!
							</p></Col>
                </Row>
            </Container>
        </div>
    )
}
