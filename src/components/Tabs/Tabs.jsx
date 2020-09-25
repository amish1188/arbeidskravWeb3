import React from 'react';
import { BrowserRouter, Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import classes from './Tabs.module.css';
import CurrentProject from '../Projects/CurrentProjects/CurrentProjects';

const TabsHeader = (props) => {

    let { url, path } = useRouteMatch();

    return(
        <BrowserRouter>
            <Tab.Container pl="0" defaultActiveKey="0">
                <Row ml="0">
                    <Col className="pl-0">
                        <Nav variant="pills" className={classes.Tabs}>
                            {props.tabs.map((item, index) => {
                                return(
                                    <Nav.Item onClick={()=> props.onClick(item)} className="rounded" id={index}>
                                        <Nav.Link as={Link} to={`${url}${item.path}`}
                                            eventKey={index.toString()}
                                        >{item.name}</Nav.Link>
                                    </Nav.Item>
                                )
                            })}
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>

            <Switch>
                {props.tabs.map(item => {
                    return(
                        <Route path={`${path}${item.path}`} component={CurrentProject} />
                    )
                })}
            </Switch>

        </BrowserRouter>
    )
};

export default TabsHeader;