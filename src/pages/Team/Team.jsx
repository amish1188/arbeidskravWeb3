import  React from 'react';
import { BrowserRouter, Switch, Route,  useRouteMatch } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tabs from '../../components/Tabs/Tabs';
import ContentContainer from '../../components/ContentContainer/ContentContainer';


const Team = (props) => {

    let { url, path } = useRouteMatch();
    const paths = [
        {
            path: 'developers',
            label: 'Developers'
        },
        {
            path: 'uidesigners',
            label: 'UI Designers'
        },
        {
            path: 'dataanalysts',
            label: 'Data Analysts'
        },
        {
            path: 'projectmanagers',
            label: 'Project Managers'
        }];

    
    return(
        <BrowserRouter> 
            <Tabs url={url} paths={paths}/>            
            <Row>
                <Col style={{paddingLeft: "0"}}>
                    <Switch>
                        <Route path={`${path}/developers`}>
                            <ContentContainer team={props.team.developers} />
                        </Route>
                        <Route path={`${path}/uidesigners`}>
                            <ContentContainer team={props.team.uidesigners} />
                        </Route>
                        <Route path={`${path}/dataanalysts`}>
                            <ContentContainer team={props.team.dataanalysts} />    
                        </Route>
                        <Route path={`${path}/projectmanagers`}>
                            <ContentContainer team={props.team.projectmanagers} />    
                        </Route>
                    </Switch>                   
                </Col>
            </Row>
        </BrowserRouter>
    )
};

export default Team;