import React from 'react';
import classes from './CardModel.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import phoneIcon from '../../../assets/icons/call-white-18dp.svg'; 
import mail from '../../../assets/icons/mail_outline-white-18dp.svg'; 
import CircularImg from '../../UI/CircularImg/CircularImg';

const CardModel = (props) => {

    const img= require(`../../../assets/profilePictures/${props.object.img !== "" ? `${props.object.img}.jpg` : `default.png`}`);
    
    return(
        <Card style={{width:"100%", marginBottom: "1rem", border:"none"}}>
            <Card.Body>
                <div className={classes.Header}>
                    <CircularImg img={img}/>
                    <div className={classes.HeaderTitle}>
                        <h4>{props.object.name}</h4>
                        <p>{props.object.position ? props.object.position : null}</p>
                    </div>
                </div>
                <Button className={classes.Button}><img src={phoneIcon} alt="phone"/>{props.object.phone}</Button>
                <Button style={{backgroundColor: "#AABBF3"}}className={classes.Button}><img src={mail} alt="mail"/>{props.object.mail}</Button>
                <div>Skills</div>
            </Card.Body>
        </Card>
    );
};

export default CardModel;