import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import AboutMe from './components/pages/AboutMe'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      </div>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/resume'>
          <Resume/>
        </Route>
        <Route exact path='/aboutme'>
          <AboutMe/>
        </Route>
    </Router>
  );
}

export default App;
