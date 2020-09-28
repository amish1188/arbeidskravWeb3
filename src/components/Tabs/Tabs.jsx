import React from 'react';
import { NavLink } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Tabs.module.css';

const Tabs = (props) => {

    return(
        <Row style={{marginBottom: '3rem'}}>
            {props.paths.map(path => {
                return(
                    <Col md='auto'>
                        <NavLink activeClassName={classes.TabActive} className={classes.Tab} to={`${props.url}/${path.path}`}>
                            {path.label}
                        </NavLink>
                    </Col>
                )
            })}
        </Row>

        
    )
};

export default Tabs;