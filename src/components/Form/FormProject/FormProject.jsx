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
            manager: "man",
            team: [
                {
                    name: "Tom Jericho",
                    img: "man",
                    position: "Manager"   
                },
                {
                    name: "Mary Jane",
                    img: "woman2",
                    position: "Developer"   
                }
            ],
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