import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Deadline from '../../Deadline/Deadline';
import classes from './ProjectCard.module.css';
import projects from '../../../data/projects';

const ProjectCard = (props) => {
    return(
        <div style={{backgroundColor: `${props.color}`}} className={classes.ProjectCard}>
            <Row>
                <Col>
                    <h4>{props.project.name}</h4>
                </Col>
            </Row>
            <Row  style={{marginBottom: "1rem"}}>
                <Col>
                    <header>Progress</header>
                    <div>Circle</div>
                </Col>
                <Col>
                    <header>Deadline</header>
                    <Deadline date={props.project.date} month={props.project.month}/>
                </Col>
                <Col>
                    <header>Customer</header>
                </Col>
                <Col>
                    <header>Manager</header>
                </Col>
            </Row>
            <Row>
                <Col>
                    <header>Description</header>
                    <p>{props.project.description}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProjectCard;