import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddButton from '../UI/AddButton/AddButton';

const ButtonSearchBarTab = (props) => {
    return(
        <Row style={{marginBottom: "4rem"}}>
            <Col style={{padding: "0"}}>
                <AddButton title={props.title}></AddButton>
            </Col>
            {/* <Col>
                <SearchBar></SearchBar>
            </Col> */}
        </Row>
    );
};

export default ButtonSearchBarTab;