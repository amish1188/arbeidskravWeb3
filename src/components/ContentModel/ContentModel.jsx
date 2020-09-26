import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardModel from '../../components/Cards/CardModel/CardModel';

const ContentModel = (props) => {
    return(
        <Container>
            <Row>
                {props.contentData.map(item => {
                    return(
                        <CardModel />
                    )
                })}
            </Row>
        </Container>
    )
};

export default ContentModel;