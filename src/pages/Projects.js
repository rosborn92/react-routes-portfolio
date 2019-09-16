import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import CatTinder from '../pages/CatTinder'
import TreasureHunt from '../pages/TreasureHunt'
import PigLatin from '../pages/PigLatin'

class Projects extends Component {
    render() {
        return (
            <Router>
                <div>
                    
                    <h1>My Projects</h1>
                    <li>
                        <Link to="/projects/cat-tinder"> Cat Tinder </Link>
                    </li>
                    <li>
                        <Link to="/projects/treasure-hunt"> Treasure Hunt </Link>
                    </li>
                    <li>
                        <Link to="/projects/pig-latin"> Pig Latin </Link>
                    </li>

                    <Route path="/projects/cat-tinder/" component={CatTinder} />
                    <Route path="/projects/treasure-hunt/" component={TreasureHunt} />
                    <Route path="/projects/pig-latin/" component={PigLatin} />
                </div>
            </Router>
        )
    }
}
export default Projects