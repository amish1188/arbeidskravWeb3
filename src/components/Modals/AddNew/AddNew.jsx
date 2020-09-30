import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddNew = (props) => {
    return(
        <Modal>
            <Modal.Body>
                <Row><Col><img /></Col></Row>
                <Row><Col><p>Project name</p></Col></Row>
                <Row><Col><p>Project description</p></Col></Row>
                <Row>
                    <Col>
                        <p>Deadline</p>
                    </Col>
                    <Col>
                        <p>Customer</p>
                    </Col>
                </Row>
                <Row><Col><p>Save</p></Col></Row>
            </Modal.Body>
        </Modal>
    )
}

export default AddNew;