import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Deadline from '../../components/Deadline/Deadline';
import classes from './ProjectCard.module.css';
import projects from '../../data/projects';

const ProjectCard = (props) => {
    return(
        <div style={{backgroundColor: `${props.color}`}} className={classes.ProjectCard}>
            <Row>
                <Col>
                    <h2>{props.project.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Progress</p>
                    <div>Circle</div>
                </Col>
                <Col>
                    <h4>Deadline</h4>
                    <Deadline date={props.project.date} month={props.project.month}/>
                </Col>
                <Col>
                    <h4>Customer</h4>
                </Col>
                <Col>
                    <h4>Manager</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Description</h4>
                    <p>{props.project.description}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProjectCard;