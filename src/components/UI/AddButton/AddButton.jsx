import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import classes from './AddButton.module.css';

import AddNew from '../../Modals/AddNew/AddNew';

const AddButton = (props) => {

    const [show, setShow] = useState(false)

    const handleClose = () => {setShow(false)}
    const handleShow = () => {setShow(true)}

    return(
        <>
            <Button className={classes.AddButton} onClick={handleShow}>+ Add new {props.title}</Button>
            {show ? <AddNew type={props.title} show={show} handleClose={handleClose} addFunc={props.addFunc}/>
            : null}
            
        </>
    );
};

export default AddButton;