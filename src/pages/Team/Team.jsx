import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Team.module.css';
import ContentModel from '../../components/ContentModel/ContentModel';

import team from '../../data/team';


const Team = () => {

    let { url, path } = useRouteMatch();

    return(
        <BrowserRouter>
            <Row style={{marginBottom: "3rem"}}>
                <Col style={{paddingLeft: "0"}}>
                    <nav>
                        <ul  className={classes.List}>
                            <li><NavLink 
                                className={classes.Tab}
                                activeClassName={classes.TabActive} 
                                to={`${url}/developers`}>
                                    Developers
                                </NavLink></li>
                            <li><NavLink 
                                className={classes.Tab}
                                activeClassName={classes.TabActive} 
                                to={`${url}/uidesigners`}>
                                    UI Designers
                                </NavLink></li>
                            <li><NavLink 
                                className={classes.Tab}
                                    activeClassName={classes.TabActive} 
                                    to={`${url}/dataanalysts`}>
                                        Data Analysts
                                </NavLink></li>
                            <li><NavLink 
                                className={classes.Tab}
                                    activeClassName={classes.TabActive} 
                                    to={`${url}/projectmanagers`}>
                                        Project Managers
                                </NavLink></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
            <Row>
                <Col style={{paddingLeft: "0"}}>
                    <Switch>
                        <Route path={`${path}/developers`}>
                            <ContentModel contentData={team.developers} />
                        </Route>
                        <Route path={`${path}/upcomingprojects`}>
                            
                        </Route>
                        <Route path={`${path}/finishedprojects`}>
                            
                        </Route>
                    </Switch>                   
                </Col>
            </Row>
        </BrowserRouter>
    )
};

export default Team;