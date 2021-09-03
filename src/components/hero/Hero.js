import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'
import { TopNavBar } from '../top-nav-bar/TopNavBar'
import "./hero.style.css"
import myImg from '../../assets/img/mypic.png'
import myCV from '../../assets/ErzhanCV.pdf'

export const Hero = () => {
    return (
        <div className="hero">
            <TopNavBar/>
            <Container>
                <Row className="mt-5">
                    
                    <Col md="9">
                 <div className="order-md-2 text-lg-center mt-5 justify-content-md-center "> 
                 <h1>I am Erzhan Aldamatov</h1>
                 <p id="software">
                     Software Engineer
                 </p>
                 
                <div>
{/*                      <Button variant="danger" sm>Hire Me</Button>{" "}
    */}                     <Button href={myCV} variant="info" size= "sm">Download Resume</Button>
                 </div> 
                </div>   
                    </Col>
                    <Col md="3">
                    <div className= "order-1">
                        <Image src={myImg} alt="erzhan" roundedCircle/> </div></Col>
                </Row>
            </Container>
        </div>
    )
}
