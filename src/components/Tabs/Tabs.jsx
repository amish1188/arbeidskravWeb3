import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import classes from './Tabs.module.css';

const TabsHeader = (props) => {
    return(
        <Tab.Container pl="0" defaultActiveKey="0">
            <Row ml="0">
                <Col className="pl-0">
                    <Nav variant="pills" className={classes.Tabs}>
                        {props.tabs.map((item, index) => {
                            return(
                                <Nav.Item onClick={()=> props.onClick(item)} className="rounded" id={index}>
                                    <Nav.Link 
                                        eventKey={index.toString()}
                                    >{item}</Nav.Link>
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                </Col>
            </Row>
        </Tab.Container>
    )
};

export default TabsHeader;