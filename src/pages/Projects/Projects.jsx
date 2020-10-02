import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tabs from '../../components/Tabs/Tabs';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import ProjectDetail from '../../components/Modals/ProjectDetail/ProjectDetail';


const Projects = (props) => {


    let { url, path } = useRouteMatch();
     const paths =  [
        {
            path:'currentprojects',
            label: 'Current Projects' 
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
                        <Route exact={true} path={`${path}/currentprojects`}>
                            <ContentContainer 
                                path={`${path}/currentprojects`} 
                                projects={props.projects.filter(item => item.status === "current")} />
                        </Route>
                        <Route path={`${path}/finishedprojects`}>
                        </Route>
                        <Route exact={true} path={`${path}/currentprojects/:id`} >
                            <ProjectDetail projects={props.projects.filter(item => item.status === "current")}/>
                        </Route>
                    </Switch>                   
                </Col>
            </Row>
        </BrowserRouter>
    );
};

export default Projects;

Projects.propTypes = {
    projects: PropTypes.array
}