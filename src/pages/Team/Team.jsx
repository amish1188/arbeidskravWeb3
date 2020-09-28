import  React, { useState } from 'react';
import { BrowserRouter, Switch, Route,  useRouteMatch } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import team from '../../data/team';
import Tabs from '../../components/Tabs/Tabs';
import ContentContainer from '../../components/ContentContainer/ContentContainer';


const Team = () => {

    const [ worker , setNewWorker ] = useState(team);

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

    //make component from this ul
    return(
        <BrowserRouter> 
            <Tabs url={url} paths={paths}/>            
            <Row>
                <Col style={{paddingLeft: "0"}}>
                    <Switch>
                        <Route path={`${path}/developers`}>
                            <ContentContainer team={worker.developers} />
                        </Route>
                        <Route path={`${path}/uidesigners`}>
                            <ContentContainer team={worker.uidesigners} />
                        </Route>
                        <Route path={`${path}/dataanalysts`}>
                            <ContentContainer team={worker.dataanalysts} />    
                        </Route>
                        <Route path={`${path}/projectmanagers`}>
                            <ContentContainer team={worker.projectmanagers} />    
                        </Route>
                    </Switch>                   
                </Col>
            </Row>
        </BrowserRouter>
    )
};

export default Team;