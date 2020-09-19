import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageHeader = () => {
    return(
        
            
                    <Row style={{marginTop: "1rem"}}>
                        <Col className="py-3" md="auto">Home</Col>
                        <Col className="py-3" md="auto">|</Col>
                        <Col className="py-3">14.08.2020</Col>
                        <Col className="py-3" md="auto">Logout</Col>
                    </Row>
             
        
    )
};

export default PageHeader;