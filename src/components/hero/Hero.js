import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { TopNavBar } from '../top-nav-bar/TopNavBar'
import "./hero.style.css"
import myImg from '../../assets/img/mypic.png'
import myCV from '../../assets/Eliza CV.pdf'
export const Hero = () => {
    return (
        <div className="hero">
            <TopNavBar/>
            <Container>
                <Row className="mt-5">
                    
                    <Col md="9">
                 <div className="order-md-1 text-lg-center mt-5"> 
                 <h1>I am Erzhan Aldamatov</h1>
                 <p id="software">
                     Software Engineer
                 </p>
                 
                <div>
{/*                      <Button variant="danger" sm>Hire Me</Button>{" "}
    */}                     <Button href={myCV} variant="info" size= "md">Download Resume</Button>
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
