import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './AddButton.module.css';

const AddButton = (props) => {
    return(
        <Button className={classes.AddButton}>+ Add new {props.title}</Button>
    );
};

export default AddButton;