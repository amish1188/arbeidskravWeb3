import React from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow_back_ios-white-18dp.svg';
import chart from '../../assets/chart.png';
import circleChart from '../../assets/circlechart.png';

import classes from './ProjectDetail.module.css';
import CircularImg from '../UI/CircularImg/CircularImg';
import Deadline from '../Deadline/Deadline';

const ProjectDetail = (props) => {
    let projectID = useParams()
    let [project] = props.projects.filter(item => item.id === projectID.id)
    let customerImg= require(`../../assets/profilePictures/${project.customer}.jpg`);
   

    return(
        <Modal dialogClassName={classes.Modal} show={true}>
            <Modal.Body className={classes.ModalBody}>
                
                <Row>
                    <Col md="auto"><Link to={"/projects/currentprojects"}><img src={backIcon} alt="back"/></Link></Col>
                    <Col><h3>{project.name}</h3></Col>
                </Row>
                <Row className={classes.RowFlex}>
                    <Col md='3'>
                        <div className={classes.Container}>
                            <p>Customer</p>
                            <CircularImg img={customerImg}/>
                        </div>
                    </Col>
                    <Col md='7' style={{padding:'0.5rem 1rem'}}>
                        <p>Description</p>
                        <p className={classes.Desc}>{project.description}</p>
                    </Col>
                    <Col class="text-center" md='2'>
                        <Deadline detail={true} deadline={project.deadline}/>
                    </Col>
                </Row>
                <Row className={classes.RowFlex}>
                    <Col md="3">
                        <div className={classes.Container}>
                            <p>Assigned Team</p>
                            {project.team.map(worker => {
                                return(
                                    <Row style={{padding: '1rem 0rem'}}>
                                        <Col md="auto">
                                            <CircularImg img={require(`../../assets/profilePictures/${worker.img}.jpg`)}/>
                                        </Col>
                                        <Col>
                                            <Row>{worker.position}</Row>
                                            <Row><p className={classes.Desc}>{worker.name}</p></Row>
                                        </Col>
                                    </Row>
                                )
                            })}
                            
                        </div>
                    </Col>
                    <Col md="9">
                        <Row style={{marginBottom:'2rem'}}>
                            <Col>
                                <div className={`${classes.Container} ${classes.RowFlex}`}>
                                    <img style={{height:"10em"}} src={chart} alt="chart"/>
                                    <img style={{height:"10em"}} src={chart} alt="chart"/>
                                    <img style={{height:"10em"}} src={chart} alt="chart"/>
                                    <img style={{height:"10em"}} src={chart} alt="chart"/>
                                </div>    
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className={`${classes.Container} ${classes.RowFlex}`}>
                                    <img style={{height:"7.6em"}} src={circleChart} alt="chart"/>
                                    <img style={{height:"7.6em"}} src={circleChart} alt="chart"/>
                                    <img style={{height:"7.6em"}} src={circleChart} alt="chart"/>
                                    <img style={{height:"7.6em"}} src={circleChart} alt="chart"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
            
        </Modal>
    )
 };

export default ProjectDetail;
