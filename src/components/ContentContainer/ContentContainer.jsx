import React from 'react';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

const ContentContainer = (props) => {
    return(
        <Row>
            {props.content.map(project => {
                return(
                    <Col className="d-flex" key={project.id} md={6}>
                        <p>{project.name}</p>
                    </Col>
                )
            })}
        </Row>
    )
};

export default ContentContainer;