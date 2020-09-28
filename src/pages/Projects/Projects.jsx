import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import projects from '../../data/projects';
import Tabs from '../../components/Tabs/Tabs';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import UpcomingProjects from '../../components/Projects/UpcomingProjects/UpcomingProjects';
import FinishedProjects from '../../components/Projects/FinishedProjects/FinishedProjects';


const Projects = () => {

    const [ activeProject, setNewActiveProject ] = useState(projects);

    let { url, path } = useRouteMatch();
     const paths =  [
        {
            path:'currentprojects',
            label: 'Current Projects' 
        }, 
        {
            path:'upcomingprojects',
            label: 'Upcoming Projects'
        },
        {
            path:'finishedprojects',
            label: 'Finished Projects'
        }] 
    return(
        <BrowserRouter>
            <Tabs url={url} paths={paths} />
            <Row>
                <Col style={{paddingLeft: "0"}}>
                    <Switch>
                        <Route path={`${path}/currentprojects`}>
                            <ContentContainer projects={activeProject.filter(item => item.status === "current")} />
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