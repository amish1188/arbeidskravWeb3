import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return(
        <Nav className={classes.Navbar} >
            <NavLink 
                activeClassName={classes.LinkActive}
                className={classes.Link}  as={NavLink} 
                to="/" exact={true}><div className={`${classes.IconHome} ${classes.Icon}`} /><p>Home</p>
            </NavLink>
            <NavLink 
                activeClassName={classes.LinkActive}
                className={classes.Link} as={NavLink} 
                to="/projects"><div className={`${classes.IconProject} ${classes.Icon}`} /><p>Projects</p>
            </NavLink>
            <NavLink 
                activeClassName={classes.LinkActive}
                className={classes.Link} as={NavLink} 
                to="/team"><div className={`${classes.IconTeam} ${classes.Icon}`} /><p>Team</p>
            </NavLink>
            <NavLink 
                activeClassName={classes.LinkActive}
                className={classes.Link} as={NavLink} 
                to="/customers"><div className={`${classes.IconCustomers} ${classes.Icon}`} /><p>Customers</p>
            </NavLink>
        </Nav>
    )
}

export default Navbar;