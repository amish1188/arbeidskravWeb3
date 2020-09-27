import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddButton from '../UI/AddButton/AddButton';
import SearchBar from '../UI/SearchBar/SearchBar';

const ButtonSearchBarTab = (props) => {
    return(
        <Row style={{marginBottom: "4rem"}}>
            <Col md={6}>
                <AddButton title={props.title}></AddButton>
            </Col>
            <Col md={6} >
                <SearchBar></SearchBar>
            </Col>
        </Row>
    );
};

export default ButtonSearchBarTab;