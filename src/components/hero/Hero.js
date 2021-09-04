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
                 <div className="order-md-1 text-lg-center mt-5 justify-content-md-center "> 
                 <h1>I am Erzhan Aldamatov</h1>
                 <p id="software">
                     Software Engineer
                 </p>
                 <ul className="contact">
                     <li >
                         <i className="fa fa-envelope"></i> {" "}
                         <a href="mailto:"> aldamatov@gmail.com</a>
                     </li>
                     
                     <li>
                         <i className="fa fa-phone"></i> {" "}
                         <a href="callto:"> +61 431 55 37 57</a>
                     </li>
                 </ul>
                 
                <div>
{/*                      <Button variant="danger" sm>Hire Me</Button>{" "}
    */}                     <Button href={myCV} variant="info" size= "sm">Download Resume</Button>
                 </div> 
                </div>   
                    </Col>
                    <Col md="3">
                    <div className= "order-2 ">
                        <Image src={myImg} fluid alt="erzhan" roundedCircle/> </div></Col>
                    
                </Row>
            </Container>
        </div>
    )
}
