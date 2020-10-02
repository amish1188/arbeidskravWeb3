import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './FormProject.module.css';
import PropTypes from 'prop-types';


const FormProject = (props) => {


    const [noTitle, setNoTitle] = useState(true)

    const [project, setNewProject] = useState(
        {
            id: `${Math.random()}`,
            name: "",
            deadline:"",
            customer:"",
            manager: "",
            team: [],
            status: "current",
            description: ""
        }
    );

    const submit = () => {
        if(project.name.length > 0){
            
            
                props.submit(project);
                props.closeModal();
            
        } 
        else {
            setNoTitle(false)
        }
    }

    const replaceUiDesigner = (e) => {
        let designer = props.team.uidesigners.filter(worker => worker.img === e.target.value)
        setNewProject({...project, team: [...project.team, designer].flat() })
        console.log(designer);
    }

    const replaceDeveloper = (e) => {
        let developer = props.team.developers.filter(worker => worker.img === e.target.value)
        setNewProject({...project, team: [...project.team, developer].flat()})
    }

    const replaceManager = (e) => {
        console.log(e.target.value);
        const manager = props.team.projectmanagers.filter(worker => worker.img === e.target.value);
        setNewProject({...project, manager: e.target.value, team: [...project.team, manager].flat()})
        
    }

    return(   
        <>               
        <Form>
            <Row>
                <Col >
                    <Form.Control 
                        className={classes.Input}  
                        placeholder="Project name"
                        onChange={(e) => setNewProject({
                            ...project, name: e.target.value
                        })}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control 
                        className={classes.Input}  
                        placeholder="Project description"
                        onChange={(e) => setNewProject({
                            ...project, description: e.target.value
                        })}/>
                </Col>
            </Row>
            <Row>
                <Col sm='12' md='6'>
                    <Form.Control 
                        className={classes.Input}  
                        placeholder="Deadline mm/dd/yyyy"
                        onChange={(e) => setNewProject({
                            ...project, deadline: e.target.value
                        })}/>
                </Col>
                <Col sm='12' md='6' style={{marginBottom:'1rem'}}>
                    <Form.Control 
                        class="mr-sm-2"
                        as="select"
                        placeholder="Manager"
                        onChange={(e) => replaceManager(e)}
                    >
                        <option value="0">Manager</option>
                        {props.team.projectmanagers.map(worker => {
                            return(
                                <option value={worker.img}>{worker.name}</option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm='12' md='6' style={{marginBottom:'1rem'}}>
                <Form.Control 
                        class="mr-sm-2"
                        as="select"
                        placeholder="Developer"
                        onChange={(e) => replaceDeveloper(e)}
                    >
                        <option value="0">Developer</option>
                        {props.team.developers.map(worker => {
                            return(
                                <option value={worker.img}>{worker.name}</option>
                            )
                        })}
                    </Form.Control>
                </Col>
                <Col sm='12' md='6' style={{marginBottom:'1rem'}}>
                    <Form.Control 
                        class="mr-sm-2"
                        as="select"
                        placeholder="UI Designer"
                        onChange={(e) => replaceUiDesigner(e)}
                    >
                        <option value="0">UI Designer</option>
                        {props.team.uidesigners.map(worker => {
                            return(
                                <option value={worker.img}>{worker.name}</option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col >
                <Form.Control 
                        class="mr-sm-2"
                        as="select"
                        placeholder="Customer"
                        onChange={(e) => setNewProject({
                            ...project, customer: e.target.value
                        })}
                    >
                        <option value="0">Customer</option>
                        <option value="starbucks">Starbucks</option>
                        <option value="pinterest">Pinterest</option>    
                    </Form.Control>  
                </Col>
            </Row>
        </Form>
        <Row style={{justifyContent: 'flex-end'}}>
            {!noTitle ?  <Col style={{color:'red'}} md="auto">Project needs title</Col> : null}
            <Col md="auto">
                <button onClick={submit} className={classes.Button}>Save</button>
            </Col>
        </Row>
        </>
    );

}

export default FormProject;

FormProject.propTypes = {
    team: PropTypes.array
}