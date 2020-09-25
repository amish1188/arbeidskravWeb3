import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return(
        <Nav defaultActiveKey="/" className={`flex-column ${classes.Navbar}`} >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
            <Nav.Link as={Link} to="/outlays">Outlays</Nav.Link>
        </Nav>
    )
}

export default Navbar;