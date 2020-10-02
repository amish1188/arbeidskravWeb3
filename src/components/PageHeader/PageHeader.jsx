import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageHeader = (props) => {

    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}`: date.getMonth();

    return(
        <Row style={{marginTop: "1rem", marginBottom: "3rem"}} >
            <Col className="py-3"  xs="auto" md="auto">{props.title}</Col>
            <Col className="py-3" xs="auto" md="auto">|</Col>
            <Col className="py-3">{day}.{month}.{date.getFullYear()}</Col>
            <Col className="py-3"  xs="auto" md="auto">Logout</Col>
        </Row>
    )
};

export default PageHeader;