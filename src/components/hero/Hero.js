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
                <Row className="mt-5 ">
                    <Col md="9">
                 <div className="order-md-1 text-lg-center mt-5 justify-content-md-center "> 
                 <h1 className="fw-bold">Erzhan Aldamatov</h1>
                
                 <ul className="contact">
                     <li><p id="software">Software Engineer</p> </li>
                     <li className="mb-1 " >
                         <i className="fa fa-envelope-open-text"></i> {" "}
                         <Button href="mailto:" variant="success" size= "sm">Email Me</Button>
                         
                     </li>
                     
                     <li className="mb-1 ">
                         <i className="fa fa-phone-volume mb-2"></i> {" "}
                         <Button href="tel:+61431553757" variant="warning" size= "sm">+61 431 553 757</Button>
                     </li>{" "}
                     <li>
                     <i className="fa fa-file-alt "></i>{" "}
                     <Button href={myCV} variant="danger" size= "sm">Download Resume</Button>

                     </li>
                 </ul>
                 
                <div>     
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
