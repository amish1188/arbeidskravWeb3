import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

import Container from 'react-bootstrap/Container';
import Navbar from './components/Navigation/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import Customers from './pages/Customers/Customers';
import Outlays from './pages/Outlays/Outlays';
import PageHeader from './components/PageHeader/PageHeader';
import ButtonSearchBarTab from './components/ButtonSearchBarTab/ButtonSearchBarTab';



function App() {

  const location = useLocation();
  let pageHeaderName;
  let buttonLabel;
  if(location.pathname.includes("/projects")) {
      pageHeaderName="Projects";
      buttonLabel="project";
  } else if(location.pathname.includes("/team")){
      pageHeaderName="Team";
      buttonLabel="worker";
  } else if(location.pathname.includes("/customers")){
      pageHeaderName="Customers";
      buttonLabel="customer";
  }

  return (
    <div className={classes.Wrapper}>
      <Navbar />
      <Container style={{height:"100vh"}}>
        <PageHeader title={pageHeaderName} />
        {location.pathname  === "/" ? null : <ButtonSearchBarTab title={buttonLabel} />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects"  component={Projects} />
          <Route path="/team" component={Team} />
          <Route path="/customers" component={Customers} />
          <Route path="/outlays" component={Outlays} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
