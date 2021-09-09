import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SectionTitle } from '../../section-title/SectionTitle'

export const Skills = () => {
    return (
        <div id="skills" className="py-5 ">
            <SectionTitle title ="Skills"/>
            <Container>
                <Row>
                    <Col>
                    <div id="logo3" class="fc-white skills-list fs-4  d-flex justify-content-between flex-wrap mt-2">
            
            <div><i class="fab fa-html5 text-primary"></i>HTLM</div>
            <div><i class="fab fa-css3-alt text-danger"></i>CSS</div>
            <div><i class="fab fa-js-square text-warning"></i>Javascript</div>
            <div><i class="fab fa-react text-info"></i>ReactJS</div>
            <div><i class="fab fa-node-js text-success"></i>NodeJS</div>
            <div><i class="fas fa-database text-success"></i>MongoDB</div>
             </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}
