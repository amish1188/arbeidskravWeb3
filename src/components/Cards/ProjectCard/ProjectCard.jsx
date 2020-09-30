import React from 'react';

import circleChart from '../../../assets/circlechart.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Deadline from '../../Deadline/Deadline';
import classes from './ProjectCard.module.css';

import CircularImg from '../../UI/CircularImg/CircularImg';

const ProjectCard = (props) => {
    
    const team = props.project.team
    console.log(team);
    

    let customerImg= props.project.customer.length < 1 ? 
    require(`../../../assets/profilePictures/default.png`) :
    require(`../../../assets/profilePictures/${props.project.customer}.jpg`);
    let managerImg= require(`../../../assets/profilePictures/${team[0].img}.jpg`);
   
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
                    <CircularImg img={circleChart} />
                </Col>
                <Col>
                    <header>Deadline</header>
                    <Deadline detail={false} deadline={props.project.deadline}/>
                </Col>
                <Col>
                    <header>Customer</header>
                    <CircularImg img={customerImg} />
                </Col>
                <Col>
                    <header>Manager</header>
                    <CircularImg img={managerImg} />
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