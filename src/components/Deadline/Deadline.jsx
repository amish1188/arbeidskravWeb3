import React from 'react';
import Card from 'react-bootstrap/Card';
import classes from './Deadline.module.css';

const Deadline = (props) => {
    return(
        
        <Card className={classes.Deadline}>
            <Card.Body className={classes.DeadlineBody}>
                <Card.Title style={{marginBottom: "0px", fontSize:"1.7em"}}>{props.date}</Card.Title>
                <Card.Text>{props.month}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Deadline;