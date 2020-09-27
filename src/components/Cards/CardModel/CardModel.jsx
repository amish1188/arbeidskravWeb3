import React from 'react';

import classes from './CardModel.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import phoneIcon from '../../../assets/icons/call-white-18dp.svg'; 
import mail from '../../../assets/icons/mail_outline-white-18dp.svg'; 

const CardModel = (props) => {

    const img = require(`../../../assets/profilePictures/${props.worker.img}.jpg`)
    return(
        <Card style={{width:"100%", marginBottom: "1rem", border:"none"}}>
            <Card.Body>
                <div className={classes.Header}>
                    <div className={classes.CircularImg}>
                        <img src={img} alt="avatar"/>
                    </div>
                    <div className={classes.HeaderTitle}>
                        <h4>{props.worker.name}</h4>
                        <p>{props.worker.position}</p>
                    </div>
                </div>
                <Button className={classes.Button}><img src={phoneIcon} alt="phone"/>{props.worker.phone}</Button>
                <Button style={{backgroundColor: "#AABBF3"}}className={classes.Button}><img src={mail} alt="mail"/>{props.worker.mail}</Button>
                <div>Skills</div>
            </Card.Body>
        </Card>
    );
};

export default CardModel;