import React from 'react';
import searchIcon from '../../../assets/icons/search-black-18dp.svg';

import classes from './SearchBar.module.css';

const SearchBar = () => {
    return(
        <div className={classes.SearchBox}>
            <input type="text" placeholder="Search..." />
            <img src={searchIcon} alt="search-btn"/>
        </div>
    )
};

export default SearchBar;