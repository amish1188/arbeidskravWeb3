import React from 'react';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import ProjectCard from '../ProjectCard/ProjectCard';
import  Container from 'react-bootstrap/Container';

const ContentContainer = (props) => {

    const colors = ["#FB9C80", "#68CAD7", "#AABBF3"];
    let index = -1;

    return(

        <Container className="overflow-auto" style={{maxHeight: '24.5rem', padding: '0'}}>
            <Row >
                {props.projects.map(project => {
                    index++;
                    if(index > 2){index= 0}
                    return(
                        <Col  className="d-flex" key={project.id} md={6}>
                            <ProjectCard project={project} color={colors[index]} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
};

export default ContentContainer;