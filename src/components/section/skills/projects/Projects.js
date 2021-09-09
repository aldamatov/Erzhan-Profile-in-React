import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionTitle } from '../../../section-title/SectionTitle'
import toDoList from '../../../../assets/img/todolist.PNG'
import profImg from '../../../../assets/img/myportfolio.PNG'
import prankCalc from '../../../../assets/img/calculator.PNG'

export const Projects = () => {
    return (
        <div id= "projects" className="py-5 ">
            <SectionTitle title="Projects"/>
            <Container>
                <Row className="mt-5"> 
                    <Col md="6"><img src={toDoList} width="100%" alt="not to do task list"/></Col>
                    <Col md="6"><div class="fs-2 fw-bold">
								Not To Do Task Lists -{" "}
								<a href="https://google.com" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a> {" "}
								<a href="https://google.com" target="_blank" rel="noreferrer"><i class="fab fa-chrome"></i></a>
							</div>
							<div class="fst-italic">Tech: HTML, CSS, JS</div>

							<p class="mt-3">
								<strong>About:</strong> Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ratione nesciunt quod itaque molestiae! Earum
								accusantium accusamus, libero corporis sed veniam!
							</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></Col>

                </Row>
                <Row className="mt-5">
                <Col md ="6" className="order-2"><img
								src= {profImg}
								width="100%"
								alt="Profile Project"
							/></Col>
                    <Col md="6" className="order-1"><div class="fs-2 fw-bold ">
								My Portfolio website -{" "}
								<a href="https://github.com/aldamatov/Erzhan-Profile-in-React.git" rel="noreferrer" target="_blank"><i class="fab fa-github"></i></a> {" "}
								<a href="https://aldamatov.com" rel="noreferrer"  target="_blank"><i class="fab fa-chrome"></i></a>
							</div>
							<div class="fst-italic">Tech: HTML, CSS, JS</div>

							<p class="mt-3">
								<strong>About:</strong> Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ratione nesciunt quod itaque molestiae! Earum
								accusantium accusamus, libero corporis sed veniam!
							</p></Col>
                </Row>
           
           
           <Row className="mt-5">
               <Col><img src={prankCalc} width="90%" alt="prank calculator" /></Col>
               <Col><div class="fs-2 fw-bold">
								Prank Calculator 🤣 -{" "}
								<a href="https://github.com/aldamatov/Calculator.git" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>{" "}
								<a href="https://prank-calculator.vercel.app" target="_blank" rel="noreferrer"><i class="fab fa-chrome"></i></a>
							</div>
							<div class="fst-italic">Tech: HTML, CSS, JS</div>

							<p class="mt-3">
								<strong>About:</strong> Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ratione nesciunt quod itaque molestiae! Earum
								accusantium accusamus, libero corporis sed veniam!
							</p></Col>
           </Row>
            </Container>

            
        </div>
    )
}
