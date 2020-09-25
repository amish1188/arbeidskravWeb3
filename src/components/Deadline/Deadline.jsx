import React from 'react';
import Card from 'react-bootstrap/Card';

const Deadline = (props) => {
    return(
        
        <Card style={{border: "none", color:"#000"}}className="text-center">
            <Card.Body>
                <Card.Title>{props.date}</Card.Title>
                <Card.Text >{props.month}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Deadline;