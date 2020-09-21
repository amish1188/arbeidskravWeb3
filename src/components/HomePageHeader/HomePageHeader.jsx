import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import classes from './HomePageHeader.module.css';

const HomePageHeader = () => {
    return(
        <Row style={{textAlign: "center", marginTop: "4rem"}}>
            <Col style={{backgroundColor:"#fff"}} className="rounded d-flex align-items-center justify-content-between" md="8">
                <div >heu</div>
                <Button>Hol</Button>
                {/* <div className={classes.WhiteHeader}>
                    <div>Current Projects Overview</div>
                    <Button className={classes.Button}>+ Add</Button>
                </div> */}
            </Col>
            <Col className="py-3" style={{backgroundColor:"#fff"}} md="2">Customer</Col>
            <Col className="py-3" style={{backgroundColor:"#fff"}} md="2">Manager </Col>
        </Row>
                   
       
    )
};

export default HomePageHeader;