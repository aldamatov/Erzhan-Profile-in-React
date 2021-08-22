import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { TopNavBar } from '../top-nav-bar/TopNavBar'
import "./hero.style.css"
import myImg from '../../assets/img/mypic.png'
export const Hero = () => {
    return (
        <div className="hero">
            <TopNavBar/>
            <Container>
                <Row className="mt-5">
                    
                    <Col md="9">
                 <div className="order-md-1 text-lg-center mt-5"> 
                 <h1>I'm Erzhan Aldamatov</h1>
                 <p>
                     Lorem Ipsum dolor sit amet 
                 </p>
                 <div>
                     <Button variant="danger" sm>Hire Me</Button>{" "}
                     <Button variant="outline-primary" sm>Resume</Button>
                 </div>
                </div>   
                    </Col>
                    <Col md="3">
                    <div className= "info">
                        <img src={myImg} alt="erzhan"/> </div></Col>
                </Row>
            </Container>
        </div>
    )
}
