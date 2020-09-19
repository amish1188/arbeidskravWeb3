import React from 'react';
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import PageHeader from '../../components/PageHeader/PageHeader';

const Home = () => {
    return(
        
            <Container>
                <PageHeader />
                <HomePageHeader />  
            </Container>
        
    )
}

export default Home;