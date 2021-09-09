import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SectionTitle } from '../../section-title/SectionTitle'

export const Skills = () => {
    return (
        <div id="skills" className="py-5 ">
            <SectionTitle title ="Technical"/>
            <Container>
                <Row>
                    <Col>
                    <div id="logo3" class="fc-white skills-list fs-2  d-flex justify-content-between flex-wrap mt-1">
            
            <div><i class="fab fa-js-square text-warning"></i>Javascript</div>
            <div><i class="fab fa-html5 text-primary"></i>HTML</div>
            <div><i class="fab fa-react text-info"></i>ReactJS</div>
            <div><i class="fab fa-css3-alt text-danger"></i>CSS</div>
            <div><i class="fab fa-node-js text-success"></i>NodeJS</div>
            <div><i class="fas fa-database text-success"></i>MongoDB</div>

             </div>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <SectionTitle title ="Professional"/>
            <Container>
                <Row>
                    <Col>
                    <div id="logo3" class="fc-white skills-list fs-2  d-flex justify-content-between flex-wrap mt-1">
                    <div><i class="fas fa-comments text-info"></i>Communication</div>
                    <div><i class="fas fa-question-circle text-light"></i>Problem Solving</div>
                    <div><i class="fas fa-users text-success"></i>Teamwork</div>
                    <div><i class="fas fa-sync text-danger"></i>Agile/Scrum</div>
                    <div><i class="fas fa-tasks text-warning"></i>Project Management</div>
                    <div><i class="fab fa-medapps text-info"></i>Creativity</div>
                    </div>
            </Col>
            </Row>
            </Container>
    </div>
    )
}