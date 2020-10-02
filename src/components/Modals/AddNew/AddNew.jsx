import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormProject from '../../Form/FormProject/FormProject';
import FormWorker from '../../Form/FormWorker/FormWorker';

import classes from './AddNew.module.css';
import closeIcon from '../../../assets/icons/close-white-18dp.svg';

const AddNew = (props) => {

   let formType;
   switch(props.type){
        case "project":
        formType = <FormProject team={props.team} closeModal={props.handleClose} submit={props.addFunc} />;
        break;

        case "worker":
        formType = <FormWorker closeModal={props.handleClose} submit={props.addFunc} />;
        break;

        case "customer":
        formType = <FormProject closeModal={props.handleClose} submit={props.addFunc} />;
        break;

        default: 
        return
   }



    return(
        <Modal dialogClassName={classes.Modal} show={true}>
            <Modal.Body className={classes.ModalBody}>
                <Row style={{justifyContent: 'flex-end'}}>
                    <Col md="auto">
                        <img style={{marginBottom:'1rem'}} onClick={props.handleClose} src={closeIcon} alt="close"/>
                    </Col>
                </Row>
                {formType}
            </Modal.Body>
        </Modal>   
    )
}

export default AddNew;