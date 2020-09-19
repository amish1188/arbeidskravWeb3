import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navigation/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import Customers from './pages/Customers/Customers';
import Outlays from './pages/Outlays/Outlays';




function App() {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/team" exact component={Team} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/outlays" exact component={Outlays} />
      </Switch>
    </div>
  );
}

export default App;
