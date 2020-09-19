import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return(
        <Nav defaultActiveKey="/" className={`flex-column ${classes.Navbar}`} >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/customers">Customers</Nav.Link>
            <Nav.Link href="/outlays">Outlays</Nav.Link>
        </Nav>
    )
}

export default Navbar;