import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';

const ProjectDetail = (props) => {
    let projectID = useParams()
    let name = props.projects.filter(item => item.id === projectID.id)
    return(
        <Modal  show={true}>
            <Modal.Body  style={{backgroundColor: '#FB9C80', color:"#FFF" }}>
                <p>{name[0].name}</p>
            </Modal.Body>
        </Modal>
    )
};

export default ProjectDetail;
