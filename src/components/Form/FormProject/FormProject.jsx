import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './FormProject.module.css';


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

    const twoCalls = (e) => {
        let worker = props.team.developers.filter(worker => worker.img === e.target.value);
        
        setNewProject({...project, manager: e.target.value});
        setNewProject({...project, team: worker});
        console.log(worker);
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
                <Col>
                    <Form.Control 
                        className={classes.Input}  
                        placeholder="Deadline mm/dd/yyyy"
                        onChange={(e) => setNewProject({
                            ...project, deadline: e.target.value
                        })}/>
                </Col>
                <Col>
                    <Form.Control 
                        class="mr-sm-2"
                        as="select"
                        placeholder="Manager"
                        onChange={(e) => twoCalls(e)}
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
                <Col>
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