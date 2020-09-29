import React from 'react';
import { Link } from 'react-router-dom';

import homeIcon from '../../../assets/icons/home-white-18dp.svg';
import projectIcon from '../../../assets/icons/description-white-18dp.svg';
import teamIcon from '../../../assets/icons/account_circle-white-18dp.svg';
import customerIcon from '../../../assets/icons/supervisor_account-white-18dp.svg';

import classes from './Navbar.module.css';

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return(
        <Nav defaultActiveKey="/" className={classes.Navbar} >
            <Nav.Link 
                className={classes.Link}  as={Link} 
                to="/"><img src={homeIcon} alt="home" /><p>Home</p>
            </Nav.Link>
            <Nav.Link 
                className={classes.Link} as={Link} 
                to="/projects"><div className={classes.IconProject} /><p>Projects</p>
            </Nav.Link>
            <Nav.Link 
                className={classes.Link} as={Link} 
                to="/team"><img src={teamIcon} alt="team" /><p>Team</p>
            </Nav.Link>
            <Nav.Link 
                className={classes.Link} as={Link} 
                to="/customers"><img src={customerIcon} alt="customers" /><p>Customers</p>
            </Nav.Link>
        </Nav>
    )
}

export default Navbar;