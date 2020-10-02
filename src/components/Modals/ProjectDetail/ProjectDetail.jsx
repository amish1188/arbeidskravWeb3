import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import backIcon from '../../../assets/icons/arrow_back_ios-white-18dp.svg';
import chart from '../../../assets/chart.png';
import circleChart from '../../../assets/circlechart.png';

import classes from './ProjectDetail.module.css';
import CircularImg from '../../UI/CircularImg/CircularImg';
import Deadline from '../../Deadline/Deadline';

const ProjectDetail = (props) => {
    let projectID = useParams()
    
    let [project] = props.projects.filter(item => item.id === projectID.id)
    console.log(project);
    let customerImg= project.customer === "" ? 
        require(`../../../assets/profilePictures/default.png`) :
        require(`../../../assets/profilePictures/${project.customer}.jpg`);
   

    return(
        <Modal dialogClassName={classes.Modal} show={true}>
            <Modal.Body className={classes.ModalBody}>
                
                <Row>
                    <Col md="auto"><Link to={"/projects/currentprojects"}><img src={backIcon} alt="back"/></Link></Col>
                    <Col><h3>{project.name}</h3></Col>
                </Row>
                <Row className={classes.RowFlex}>
                    <Col md='3' xl='3'>
                        <div className={classes.Container}>
                            <p>Customer</p>
                            <CircularImg img={customerImg}/>
                        </div>
                    </Col>
                    <Col md="6" style={{padding:'0.5rem 1rem'}}>
                        <p>Description</p>
                        <p className={classes.Desc}>{project.description}</p>
                    </Col>
                    <Col class="text-center" sm='12' md='3' xl='2'>
                        <Deadline detail={true} deadline={project.deadline}/>
                    </Col>
                </Row>
                <Row className={classes.RowFlex}>
                    <Col md="5" lg='4' xl='3'>
                        <div className={classes.Container}>
                            <p>Assigned Team</p>
                            {project.team.map(worker => {
                                return(
                                    <Row style={{padding: '1rem 0rem'}}>
                                        <Col md="">
                                            <CircularImg img={require(`../../../assets/profilePictures/${worker.img}.jpg`)}/>
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
                    <Col sm='12'md="7" lg='8' xl='9'>
                        <Row style={{ marginTop:'1rem'}}>
                            <Col>
                                <div className={`${classes.Container} ${classes.RowFlex} ${classes.Charts}`}>
                                    <img  src={chart} alt="chart"/>
                                    <img  src={chart} alt="chart"/>
                                    <img  src={chart} alt="chart"/>
                                    <img  src={chart} alt="chart"/>
                                </div>    
                            </Col>
                        </Row>
                        <Row style={{marginTop:'1rem'}}>
                            <Col>
                            <div className={`${classes.Container} ${classes.RowFlex} ${classes.Charts}`}>
                                    <img  src={circleChart} alt="chart"/>
                                    <img  src={circleChart} alt="chart"/>
                                    <img  src={circleChart} alt="chart"/>
                                    <img  src={circleChart} alt="chart"/>
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

ProjectDetail.propTypes = {
    projects: PropTypes.array
}