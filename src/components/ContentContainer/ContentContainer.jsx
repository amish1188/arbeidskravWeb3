import React from 'react';
import { Link } from 'react-router-dom';

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
            let color= projetcsColors[index]
            if(index > 2){index= 0}
            return(
                <Col  className="d-flex" key={project.id} md={6}>
                    <Link style={{textDecoration: 'none', width:'100%'}} to={{ 
                        pathname: `${props.path}/${project.id}`,
                        state: {
                            project: {project} 
                        }
                    }}><ProjectCard project={project} color={color} /></Link>
                </Col>
        )});
    } else if(props.team){
        renderContent = props.team.map(worker => {
            return(
                <Col className="d-flex" key={worker.id} md={6} lg={4} xl={3}>
                    <CardModel object={worker}/>
                </Col>
            );
        });        
    }  else if(props.customers){
        renderContent = props.customers.map(customer => {
            return(
                <Col className="d-flex" key={customer.id} md={6} lg={4} xl={3}>
                    <CardModel object={customer}/>
                </Col>
            );
        });      
    }

    return(

        <Container  className="overflow-auto" style={{maxHeight: '24.5rem'}}>
            <Row >
                {renderContent}
            </Row>
        </Container>
    )
};

export default ContentContainer;