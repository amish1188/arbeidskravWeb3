import React from 'react';
import Card from 'react-bootstrap/Card';
import classes from './Deadline.module.css';

const Deadline = (props) => {
    
    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"]
    
    var dateEnd = new Date(props.deadline)
    var dateToday = new Date();
    var n = dateToday.getTime() - dateEnd.getTime()
    var daysLeft = Math.round(Math.abs(n / (1000 * 3600 * 24)))

    const dateSplit = props.deadline.split('/')
    const day = dateSplit[1];
    const monthIndexToInt =  dateSplit[0] < 10 ? parseInt(dateSplit[0], 10) : parseInt(dateSplit[0]);
    const month = months[monthIndexToInt];

    return(  
        <Card className={classes.Deadline}>
            <Card.Body className={classes.DeadlineBody}>
                <Card.Title style={{marginBottom: "0px", fontSize:"1.7em"}}>{day}</Card.Title>
                <Card.Text>{props.deadline === "" ? "unknown" :month}</Card.Text>
            </Card.Body>
            {props.detail ? <Card.Footer style={{fontSize:"0.8rem"}}>{daysLeft} days left</Card.Footer> : null}
        </Card>
    )
};

export default Deadline;