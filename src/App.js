import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
             <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About Me</Link>
              </li>
              <li>
                <Link to="/skills/"> My Skills </Link>
              </li>
              <li>
                <Link to="/projects/"> My Projects </Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={AboutMe} />
          <Route path="/skills/" component={Skills} />
          <Route path="/projects/" exact component={Projects} />
        </div>
      </Router>
    )
  }
}

export default App;
