import React, { useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

//components
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navigation/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import Customers from './pages/Customers/Customers';
import PageHeader from './components/PageHeader/PageHeader';
import ButtonSearchBarTab from './components/ButtonSearchBarTab/ButtonSearchBarTab';

//data 
import projectsData from './data/projects';
import teamData from './data/team';
import customersData from './data/customers';


function App() {

  const [projects, setNewProject] = useState(projectsData);
  const [team, setNewWorker] = useState(teamData);
  const [customers, setNewCustomer] = useState(customersData);

  const addNewProject = (newProject) => {
    setNewProject([...projects, newProject])
  }

  const addNewWorker = (newWorker) => {
    if(newWorker.position === "Developer"){setNewWorker({...team,  developers: [...team.developers, newWorker ]})}
    if(newWorker.position === "UI Designer"){setNewWorker({...team, uidesigners: [...team.uidesigners, newWorker ]})}
    if(newWorker.position === "Data Analyst"){setNewWorker({...team, dataanalysts: [...team.dataanalysts, newWorker ]})}
    if(newWorker.position === "Project Manager"){setNewWorker({...team, projectmanagers: [...team.projectmanagers, newWorker ]})}
  }
  const addNewCustomer = (newCustomer) => {
    setNewProject(...projects, newCustomer)
  }

  const location = useLocation();
  let pageHeaderName;
  let buttonLabel;
  let addFunc;
  if(location.pathname.includes("/projects")) {
      pageHeaderName="Projects";
      buttonLabel="project";
      addFunc=addNewProject;
  } else if(location.pathname.includes("/team")){
      pageHeaderName="Team";
      buttonLabel="worker";
      addFunc=addNewWorker;
  } else if(location.pathname.includes("/customers")){
      pageHeaderName="Customers";
      buttonLabel="customer";
      addFunc=addNewCustomer;
  }
  console.log(team);
  return (
    <div className={classes.Wrapper}>
      <Navbar />
      <Container style={{height:"100vh"}}>
        <PageHeader title={pageHeaderName} />
        {location.pathname  === "/" ? null : <ButtonSearchBarTab addFunc={addFunc} title={buttonLabel} />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects"  render={(props) => (<Projects {...props} projects={projects} />)} />
          <Route path="/team" render={(props) => (<Team {...props} team={team} />)} />
          <Route path="/customers" render={(props) => (<Customers {...props} customers={customers} />)} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
