import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './FormWorker.module.css';

const FormWorker = (props) => {


    const [noPosition, setNoPosition] = useState(true)
    const [worker, setNewWorker] = useState(
        {
            id: `${Math.random()}`,
            name: "",
            phone: "",
            mail: "",
            img: "",
            position: ""
        }
    );
    console.log(worker);

    const submit = () => {
        if(worker.position === "0" || worker.position === "" ){
            setNoPosition(false)
        } 
        else {
            props.submit(worker);
            props.closeModal();
        }
    }

    return(   
        <>               
        <Form>
            <Row>
                <Col sm='12' md='6'>
                    <Form.Control 
                        className={classes.Input}  
                        placeholder="Full name"
                        onChange={(e) => setNewWorker({
                            ...worker, name: e.target.value
                        })}/>
                </Col>
                <Col sm='12' md='6' style={{marginBottom:'1rem'}}>
                    <Form.Control 
                        class="mr-sm-2"
                        as="select"
                        onChange={(e) => setNewWorker({
                            ...worker, position: e.target.value
                        })}
                    >
                        <option value="0">Position</option>
                        <option value="Developer">Developer</option>
                        <option value="UI Designer">UI Designer</option>    
                        <option value="Data Analyst">Data Analyst</option>    
                        <option value="Project Manager">Project Manager</option>    
                    </Form.Control>
                </Col>
                
            </Row>
            <Row>
                <Col sm='12' md='6'>
                    <Form.Control 
                        className={classes.Input}  
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setNewWorker({
                            ...worker, mail: e.target.value
                        })}/>
                </Col>
                <Col sm='12' md='6'>
                    <Form.Control 
                        className={classes.Input}  
                        placeholder="Phone"
                        onChange={(e) => setNewWorker({
                            ...worker, phone: e.target.value
                        })}/>
                </Col>
            </Row>
        </Form>
        <Row style={{justifyContent: 'flex-end'}}>
            {!noPosition ?  <Col style={{color:'red'}} md="auto">Worker needs position!</Col> : null}
            <Col md="auto">
                <button onClick={submit} className={classes.Button}>Save</button>
            </Col>
        </Row>
        </>
    );

}

export default FormWorker;