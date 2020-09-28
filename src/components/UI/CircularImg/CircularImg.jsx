import React from 'react';
import classes from './CircularImg.module.css';

const CircularImg = (props) => {
    return(
    <div className={classes.CircularImg}>
        <img src={props.img} alt="avatar"/>
    </div>

    )
}

export default CircularImg;