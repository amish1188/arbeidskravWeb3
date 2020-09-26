import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import projects from '../../data/projects';

import PageHeader from '../../components/PageHeader/PageHeader';
import ContentContainer from '../../components/ContentContainer/ContentContainer';


import classes from './Projects.module.css';
import ButtonSearchBarTab from '../../components/ButtonSearchBarTab/ButtonSearchBarTab';
import UpcomingProjects from '../../components/Projects/UpcomingProjects/UpcomingProjects';
import FinishedProjects from '../../components/Projects/FinishedProjects/FinishedProjects';


const Projects = () => {

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
                                to={`${url}/currentprojects`}>
                                    Current Projects
                                </NavLink></li>
                            <li><NavLink 
                                className={classes.Tab}
                                activeClassName={classes.TabActive} 
                                to={`${url}/upcomingprojects`}>
                                    Upcoming Projects
                                </NavLink></li>
                            <li><NavLink 
                                className={classes.Tab}
                                    activeClassName={classes.TabActive} 
                                    to={`${url}/finishedprojects`}>
                                        Finished Projects
                                </NavLink></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
            <Row>
                <Col style={{paddingLeft: "0"}}>
                    <Switch>
                        <Route path={`${path}/currentprojects`}>
                            <ContentContainer projects={projects.filter(item => item.status === "current")} />
                        </Route>
                        <Route path={`${path}/upcomingprojects`}>
                            <UpcomingProjects />
                        </Route>
                        <Route path={`${path}/finishedprojects`}>
                            <FinishedProjects />
                        </Route>
                    </Switch>                   
                </Col>
            </Row>
        </BrowserRouter>
    );
};

export default Projects;