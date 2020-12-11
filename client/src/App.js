import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './Home';
import { About } from './About';
import { NotFound } from './NotFound';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
