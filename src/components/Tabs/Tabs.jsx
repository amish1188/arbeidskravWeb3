import React from 'react';
import { NavLink } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Tabs.module.css';

const Tabs = (props) => {

    return(
        <Row className={classes.RowStyle}>
            {props.paths.map((path, index) => {
                return(
                    <Col key={index} style={{marginBottom: '3rem'}} xs='auto' md='auto'>
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