import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import classes from './HomePageHeader.module.css';

const HomePageHeader = () => {
    return(
        <Row style={{textAlign: "center", marginTop: "4rem"}}>
            <Col className="px-0" md="8">
                <div className={classes.WhiteHeader}>
                    <div>Current Projects Overview</div>
                    <Button className={classes.Button}>+ Add</Button>
                </div>
            </Col>
            <Col className="py-3" md="2">Customer</Col>
            <Col className="py-3" md="2">Manager </Col>
        </Row>
                   
       
    )
};

export default HomePageHeader;