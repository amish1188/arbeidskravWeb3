import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import TabsHeader from '../../components/Tabs/Tabs';

import projects from '../../data/projects';

import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

const Projects = () => {

    const allProjects = projects;
    const [activeTab, setActiveTab] = useState({active:"Current projects"});
    const [showProjects, setShowProjects] = useState([]);

    const tabName = ["Current projects", "Upcoming projects", "Finished projects"];


    const setActiveTabHandler = tabName => {
        activateTab(tabName);
    }
    
    //make function that activates the tab content
    let activateTab = tabName => {
        let arrayOfObjects = allProjects;
        switch(tabName) {
            case "Current projects":
                setActiveTab({active: "Current projects"});
                arrayOfObjects = arrayOfObjects.filter(project => project.status === "current")
                setShowProjects(arrayOfObjects);
                break;
            case "Upcoming projects":
                setActiveTab({active: "Upcoming projects"})
                arrayOfObjects = arrayOfObjects.filter(project => project.status === "upcoming")
                setShowProjects(arrayOfObjects);
                break;
            case "Finished projects": 
                setActiveTab({active: "Finished projects"})
                arrayOfObjects = arrayOfObjects.filter(project => project.status === "finished")
                setShowProjects(arrayOfObjects);
                break;
            default: setActiveTab({active: "Current projects"})
        }
    }

    useEffect(() => {
        setActiveTabHandler(activeTab.active)
    },[])

    return(
        <Container>
                <PageHeader title={"Projects"} />
                <HomePageHeader />
                <TabsHeader onClick={setActiveTabHandler} tabs={tabName}/>
                <ContentContainer content={showProjects}/>
        </Container>
    );
};

export default Projects;