import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from '../../components/Tabs/Tabs';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

const Customers = (props) => {

    const [customer] = useState(props.customers);
    let { url, path } = useRouteMatch();
    const paths = [
        {
            path: 'activecustomers',
            label: 'Active Customers'
        },
        {
            path: 'pastcustomers',
            label: 'Past Customers'
        }
    ]

    return(
        <BrowserRouter> 
            <Tabs url={url} paths={paths}/>    
            <Row>
                <Col style={{paddingLeft: "0"}}>
                    <Switch>
                        <Route path={`${path}/activecustomers`}>
                            <ContentContainer customers={customer.activecustomers} /> 
                        </Route>
                        {/* <Route path={`${path}/pastcustomers`}>
                            <ContentContainer team={customers.pastcustomers} />
                        </Route> */}
                    </Switch>                   
                </Col>
            </Row>
        </BrowserRouter>
    )
};

export default Customers;

Customers.propTypes = {
    customers: PropTypes.array
}