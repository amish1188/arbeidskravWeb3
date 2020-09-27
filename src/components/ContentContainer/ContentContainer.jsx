import React from 'react';

import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import  Container from 'react-bootstrap/Container';
import CardModel from '../Cards/CardModel/CardModel';

const ContentContainer = (props) => {

    const projetcsColors = ["#FB9C80", "#68CAD7", "#AABBF3"];
    let index = -1;

    let renderContent;
    
    if(props.projects){
        renderContent = props.projects.map(project => {
            index++;
            if(index > 2){index= 0}
            return(
                <Col  className="d-flex" key={project.id} md={6}>
                    <ProjectCard project={project} color={projetcsColors[index]} />
                </Col>
        )});
    } else if(props.team){
        renderContent = props.team.map(worker => {
            return(
                <Col className="d-flex" key={worker.id} md={6} lg={4} xl={3}>
                    <CardModel worker={worker}/>
                </Col>
            );
        });        
    }      

    return(

        <Container  className="overflow-auto" style={{maxHeight: '24.5rem', padding: '0'}}>
            <Row >
                {renderContent}
            </Row>
        </Container>
    )
};

export default ContentContainer;